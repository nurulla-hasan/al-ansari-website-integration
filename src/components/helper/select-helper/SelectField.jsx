"use client";

import { ChevronDown } from "lucide-react";

const SelectField = ({
  label,
  name,
  options = [],
  register,
  required = false,
  error,
  defaultOption = "Select an option",
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={name} className="block text-xs text-gray-600">
          {label}
        </label>
      )}
      <div className="relative border border-gray-300 px-2 py-1 rounded-sm">
        <select
          id={name}
          {...register(name, { required })}
          className="w-full text-xs text-gray-500 font-normal outline-none appearance-none"
        >
          <option value="">{defaultOption}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="text-gray-400 w-4 h-4 absolute top-1/2 -translate-y-1/2 right-2" />
      </div>

      {error && <p className="text-xs text-red-500 mt-0.5">{error.message}</p>}
    </div>
  );
};

export default SelectField;