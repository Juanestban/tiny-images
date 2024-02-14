import cn from 'classnames';

import { Button, Size } from '@/components';
import { normalize } from '@/utils/normalize';
import { CompressorState } from '@/models';

import s from './PreviewImages.module.css';

interface PreviewImagesProps {
  format: CompressorState;
  handleReset?: () => void;
  handleDownload?: () => void;
}

const PreviewImages = ({ format, handleDownload, handleReset }: PreviewImagesProps) => {
  return (
    <>
      <div className="relative">
        <picture className={cn('flex', s.previewImages)}>
          <img src={format?.prevImage?.url ?? ''} width="50%" alt="prevImage" />
          <img src={format?.image?.urlImage} width="50%" alt="newImage" />
        </picture>
        <div className={cn('absolute w-full top-0')} style={{ height: 400 }}>
          <div className="flex justify-between w-full">
            <Size>{normalize(format.prevImage?.size as number)}</Size>
            <Size>{normalize(format.image?.file.size as number)}</Size>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3">
        <Button className="bg-blue-400" onClick={handleReset}>
          Try Again
        </Button>
        <Button className="border-dashed border-2 border-blue-400" onClick={handleDownload}>
          Download
        </Button>
      </div>
    </>
  );
};

export { PreviewImages };
