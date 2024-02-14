import { ChangeEvent, useState } from 'react';
import cn from 'classnames';

import { useCompressor } from '@/hooks/useCompressor';
import { Button, PreviewImages, FormCompressor, Dropper } from '@/components';

import s from './Home.module.css';

type View = 'upload' | 'link';

function Home() {
  const [view, setView] = useState<View>('upload');
  const {
    format,
    counter,
    imageUrl,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleChange,
    handleReset,
    handleInput,
    handleSubmit,
    handleChangeInput,
  } = useCompressor();

  const handleClick = (newView: View) => () => {
    setView(newView);
  };

  const handleFormat = ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
    if (files && files.length) {
      const newFiles = Object.entries(files).map(([, file]) => file);
      handleChange(newFiles);
    }
  };

  const handleDownload = () => {
    const anchor = document.createElement('a');

    anchor.download = format.image?.file.name ?? 'download';
    anchor.href = format.image?.urlImage as string;
    anchor.click();
  };

  const eventDrag = {
    onDrop: handleDrop,
    onDragOver: handleDragOver,
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    onChange: handleFormat,
  };

  return (
    <section className="flex flex-col gap-10 justify-center items-center flex-1">
      <div className="flex gap-3">
        <Button className={cn(view === 'upload' && 'bg-blue-600')} onClick={handleClick('upload')}>
          upload
        </Button>
        <Button className={cn(view === 'link' && 'bg-blue-600')} onClick={handleClick('link')}>
          link
        </Button>
      </div>
      <div className={cn(s.preview, format.image ? 'visible' : 'hidden', 'flex flex-col gap-3')}>
        <PreviewImages format={format} handleReset={handleReset} handleDownload={handleDownload} />
      </div>
      <Dropper counter={counter} format={format} view={view} {...eventDrag} />
      <div
        className={cn(
          s.card,
          'w-6/12 relative',
          view === 'link' ? 'visible' : 'hidden',
          format.image ? 'hidden' : 'visible',
        )}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full p-3 bg-blue-500 border-2 border-blue-600 rounded-md border-solid"
            value={imageUrl}
            style={{ paddingRight: 72 }}
            placeholder="https://example.com/image.png"
            onChange={handleInput}
          />
          <Button type="submit" className="absolute right-1 bg-blue-600" style={{ top: 6 }}>
            Buscar
          </Button>
        </form>
      </div>
      <div className={cn('w-2/12', format.image ? 'hidden' : 'visible')}>
        <FormCompressor format={format} handleChangeInput={handleChangeInput} />
      </div>
    </section>
  );
}

export default Home;
