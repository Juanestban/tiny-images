import { ChangeEvent, DragEvent } from 'react';
import cn from 'classnames';

import { UploadIcon } from '@/components';
import { CompressorState } from '@/models';

import s from './Dropper.module.css';

interface DropperProps {
  counter: number;
  format: CompressorState;
  view: 'upload' | 'link';
  onDrop?: (event: DragEvent) => void;
  onDragOver?: (event: DragEvent) => void;
  onDragEnter?: (event: DragEvent) => void;
  onDragLeave?: (event: DragEvent) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Dropper = ({
  counter,
  format,
  view,
  onChange,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
}: DropperProps) => {
  return (
    <div
      className={cn(
        'border-dashed border-2 p-3 w-1/2 flex flex-col justify-center place-items-center transition',
        s.card,
        !counter ? s.notUploading : 'border-blue-300',
        view === 'upload' ? 'visible' : 'hidden',
        format.image ? 'hidden' : 'visible',
      )}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onChange={onChange}
      draggable
    >
      <UploadIcon className={s[counter ? 'uploadDrop' : 'uploadDefault']} />
      <h2 className="text-2xl m-2">
        Drag and drop your{' '}
        <label htmlFor="files" className="hover:underline cursor-pointer text-blue-400 font-bold">
          image
        </label>
      </h2>
      <span className="uppercase font-bold text-blue-400">png, jpeg, jpg, webp</span>
      <input
        id="files"
        type="file"
        className="hidden"
        accept="image/jpeg,image/jpg,image/png,image/webp"
      />
    </div>
  );
};

export { Dropper };
