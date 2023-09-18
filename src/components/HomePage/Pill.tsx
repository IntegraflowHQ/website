import { cn } from '@/utils';

interface Props {
  text: string;
  variant?: 'primary' | 'secondary';
}

export default function Pill({
  text,
  variant = 'primary',
}: Props): JSX.Element {
  return (
    <div
      className={cn(
        'inline-flex justify-center items-center rounded-full text-sm font-normal text-white uppercase',
        variant === 'secondary' ? 'bg-[#0E0926]' : 'bg-[#120D1E]',
        'px-4 py-2 '
      )}
      style={
        variant === 'secondary'
          ? {
              boxShadow:
                '0px 2px 4px 0px rgba(236, 178, 46, 0.25) inset, -2px 0px 4px 0px rgba(236, 178, 46, 0.25) inset',
            }
          : {
              boxShadow:
                '0px 2px 4px 0px rgba(248, 248, 248, 0.16) inset, -2px 0px 4px 0px rgba(183, 183, 183, 0.25) inset',
            }
      }
    >
      {text}
    </div>
  );
}
