export const BYTE = 1;
export const KILOBYTE = BYTE * 1024;
export const MEGABYTE = KILOBYTE * KILOBYTE;
export const GIBABYTE = MEGABYTE * 1024;

export const SIZE_TYPE = ['KB', 'MB', 'GB'];

export const normalize = (size: number): string => {
  if (size < MEGABYTE) {
    const sizeInKb = (size / KILOBYTE).toFixed(2);

    return `${sizeInKb} ${SIZE_TYPE[0]}`;
  }

  const sizeInMb = (size / MEGABYTE).toFixed(2);

  return `${sizeInMb} ${SIZE_TYPE[1]}`;
};
