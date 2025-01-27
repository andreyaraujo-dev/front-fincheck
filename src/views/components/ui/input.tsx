import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, placeholder, name, id, ...props }, ref) => {
    const inputId = id ?? name;
    return (
      <div className="relative w-full">
        <input
          type={type}
          id={inputId}
          className={cn(
            'flex h-[52px] w-full rounded-lg border border-gray-500 bg-white text-gray-800 px-3 placeholder-shown:pt-0 pt-4 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 peer focus:border-gray-800 outline-none',
            className,
          )}
          name={name}
          ref={ref}
          {...props}
          placeholder=" "
        />

        <label
          htmlFor={inputId}
          // className="absolute left-[13px] top-3.5 pointer-events-none text-gray-700"
          className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
        >
          {placeholder}
        </label>
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
