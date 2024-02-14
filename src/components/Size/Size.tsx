import { PropsWithChildren } from 'react';

const Size = ({ children }: PropsWithChildren) => {
  return (
    <div
      className="w-6/12 flex justify-center items-center opacity-0 hover:opacity-100 hover:bg-blue-950 hover:bg-opacity-70 transition"
      style={{ height: 400 }}
    >
      <h3 className="text-lg font-bold">{children}</h3>
    </div>
  );
};
export { Size };
