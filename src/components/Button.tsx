import { cn } from '@/utils';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'green';
}

export default function Button({
  text,
  onClick,
  className,
  variant = 'primary',
}: ButtonProps): JSX.Element {
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
