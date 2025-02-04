/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { cn } from '@/lib/utils.ts';
import {
  Select as SelectShadcn,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface SelectProps {
  className?: string;
  error?: string;
  placeholder?: string;
  options: {
    value: string;
    label: string;
  }[];
  value?: string;
  onChange?(value: string): void;
}

export function Select({ className, error, placeholder, options, value, onChange }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState(value ?? '');

  function handleSelect(value: string) {
    setSelectedValue(value);
    onChange?.(value);
  }

  return (
    <div>
      <div className="relative">
        <label
          className={cn(
            'absolute z-10 top-1/2 -translate-y-1/2 left-3 text-gray-700 pointer-events-none',
            selectedValue && 'text-xs left-[13px] top-2 transition-all translate-y-0',
          )}
        >
          {placeholder}
        </label>

        <SelectShadcn onValueChange={handleSelect} value={value}>
          <SelectTrigger
            className={cn(
              'bg-white rounded-lg w-full border border-gray-500 px-3 h-[52px] text-gray-800 placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none text-left relative pt-4',
              error && '!border-red-900',
              className,
            )}
          >
            <SelectValue />
          </SelectTrigger>

          <SelectContent className="z-[99] bg-white overflow-hidden rounded-2xl border-gray-100 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]">
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="p-2 text-gray-800 text-sm data-[state=checked]:font-bold data-[highlighted]:bg-gray-50 outline-none rounded-lg transition-colors"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectShadcn>
      </div>
    </div>
  );
}
