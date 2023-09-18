import { cn } from '@/utils';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
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
        'px-8 py-4 rounded-lg font-medium text-base text-white',
        variant === 'secondary'
          ? 'bg-IFPurpleDark border border-[#53389E]'
          : 'bg-gradient-button',
        className ?? ''
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
