export const getPercentage = (newSize: number, oldSize: number) => {
  const operation = ((oldSize - newSize) / oldSize) * 100;
  const normalized = operation.toFixed(2);

  return normalized.toString();
};
