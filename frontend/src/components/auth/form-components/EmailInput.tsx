"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi';

interface EmailInputProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput = ({
  id,
  name,
  label,
  value,
  placeholder,
  error,
  required = false,
  onChange,
}: EmailInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <HiMail className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="email"
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
            error
              ? 'border-red-500 focus:ring-red-200'
              : isFocused
              ? 'border-primary focus:ring-primary/20'
              : 'border-gray-300 focus:ring-primary/10'
          }`}
          required={required}
        />
      </div>
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

export default EmailInput;
