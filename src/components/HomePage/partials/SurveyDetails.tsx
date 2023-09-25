import { cn } from '@/utils';

interface Props {
  title: string;
  description: string;
  className?: string;
}

export default function SurveyDetails({
  title,
  description,
  className,
}: Props) {
  return (
    <header className={cn('space-y-[6px]', className ?? '')}>
      <h3 className='text-white text-xl font-medium'>{title}</h3>
      <p className='text-IFText text-sm font-normal'>{description}</p>
    </header>
  );
}
