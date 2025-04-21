"use client";
import { motion } from 'framer-motion';

interface CheckboxInputProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CheckboxInput = ({
  id,
  label,
  checked,
  onChange,
}: CheckboxInputProps) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary/50"
      />
      <label htmlFor={id} className="ml-2 block text-sm text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;
