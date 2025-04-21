"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

interface TextInputProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({
  id,
  name,
  label,
  value,
  placeholder,
  error,
  required = false,
  onChange,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
          error
            ? 'border-red-500 focus:ring-red-200'
            : isFocused
            ? 'border-primary focus:ring-primary/20'
            : 'border-gray-300 focus:ring-primary/10'
        }`}
        required={required}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-xs mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default TextInput;
