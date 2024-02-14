import { type DragEvent, type ChangeEvent, type FormEvent, useState } from 'react';
import { compressor } from 'compressor-image';

import { CompressorState } from '@/models';

const defaultValue: CompressorState = {
  image: undefined,
  prevImage: undefined,
  percentage: 50,
  type: 'image/webp',
};

export const useCompressor = () => {
  const [format, setFormat] = useState(defaultValue);
  const [imageUrl, setImageUrl] = useState('');
  const [counter, setCounter] = useState(0);

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();

    const files = e.dataTransfer.files;

    if (files.length) {
      handleFiles(files);
    }
    setCounter(0);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();

    setCounter((prev) => prev + 1);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();

    setCounter((prev) => prev - 1);
  };

  const handleFiles = (files: FileList) => {
    if (files && files.length) {
      const newFiles = Object.entries(files).map(([, file]) => file);

      handleChange(newFiles);
    }
  };

  const handleChange = async (files: File[]) => {
    const { type, percentage } = format;
    const image = await compressor({
      filename: files[0].name,
      fileImage: files[0],
      type,
      percentage,
    });
    const reader = new FileReader();
    const file = files[0];

    reader.onload = () => {
      const url = reader.result as string;

      setFormat({
        ...format,
        image,
        prevImage: {
          name: file.name,
          type: file.type,
          size: file.size,
          url,
        } as CompressorState['prevImage'],
      });
    };

    reader.readAsDataURL(files[0]);
  };

  const handleReset = () => setFormat(defaultValue);

  const handleChangeInput = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormat({ ...format, [name]: value });
  };

  const handleInput = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { type, percentage } = format;
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const compressed = await compressor({ fileImage: blob, type, percentage });

    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result;

      setFormat({
        ...format,
        image: compressed,
        prevImage: {
          name: 'filename',
          size: blob.size,
          type: blob.type,
          url,
        } as CompressorState['prevImage'],
      });
    };

    reader.readAsDataURL(blob);
  };

  return {
    format,
    counter,
    imageUrl,
    handleChange,
    handleDrop,
    handleDragOver,
    handleDragEnter,
    handleDragLeave,
    handleChangeInput,
    handleInput,
    handleSubmit,
    handleReset,
  };
};
