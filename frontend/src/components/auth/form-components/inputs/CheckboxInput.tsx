"use client";

interface CheckboxInputProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CheckboxInput = ({ id, label, checked, onChange }: CheckboxInputProps) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
      />
      <label htmlFor={id} className="ml-2 block text-sm text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;
