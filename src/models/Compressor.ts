export interface CompressorState {
  image?: {
    blob: Blob | MediaSource | File;
    file: File;
    urlImage: string;
  };
  prevImage?: File & { url: string };
  type: 'image/jpeg' | 'image/jpg' | 'image/webp' | 'image/png';
  percentage: number;
}
