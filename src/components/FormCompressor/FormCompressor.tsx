import { FormControl, Label } from '@/components';
import { CompressorState } from '@/models';
import { ChangeEvent } from 'react';

interface FormCompressorProps {
  format: CompressorState;
  handleChangeInput?: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const FormCompressor = ({ format, handleChangeInput }: FormCompressorProps) => {
  return (
    <>
      <FormControl>
        <Label>
          type:
          <select
            name="type"
            className="w-2/4 p-2 bg-blue-500 border-2 border-blue-600  rounded-md border-solid cursor-pointer"
            value={format.type}
            onChange={handleChangeInput}
          >
            <option value="image/jpg">jpg</option>
            <option value="image/jpeg">jpeg</option>
            <option value="image/png">png</option>
            <option value="image/webp">webp</option>
          </select>
        </Label>
      </FormControl>
      <FormControl>
        <Label>
          percentage:
          <input
            name="percentage"
            type="number"
            className="w-2/4 p-2 bg-blue-500 border-2 border-blue-600  rounded-md border-solid"
            min={0}
            max={100}
            value={format.percentage}
            placeholder="0 to 100"
            onChange={handleChangeInput}
          />
        </Label>
      </FormControl>
    </>
  );
};

export { FormCompressor };
