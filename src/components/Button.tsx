import { cn } from '@/utils';
import React from 'react';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'green';
}

const Button = React.forwardRef(
  (
    { text, onClick, className, variant = 'primary' }: ButtonProps,
    forwardedRef: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        className={cn(
          'px-8 py-4 rounded-lg font-medium text-base text-white hover:bg-gradient-button-hover',
          variant === 'primary' ? 'bg-gradient-button' : '',
          variant === 'secondary' ? 'bg-IFPurpleDark' : '',
          variant === 'tertiary' ? 'bg-[rgba(50, 39, 81, 0.20)]' : '',
          variant === 'secondary' || variant === 'tertiary'
            ? 'border border-[#53389E]'
            : '',
          variant === 'green' ? 'bg-gradient-button-hover' : '',
          className ?? ''
        )}
        onClick={onClick}
        style={{ transition: 'background-image 3s', transitionDelay: '1s' }}
        ref={forwardedRef}
      >
        <span
          className={cn(
            variant === 'tertiary'
              ? 'bg-gradient-button bg-clip-text text-transparent'
              : ''
          )}
        >
          {text}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
