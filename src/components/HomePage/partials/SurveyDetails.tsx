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
      <h3 className='text-xl font-medium text-white'>{title}</h3>
      <p className='text-sm font-normal text-IFText'>{description}</p>
    </header>
  );
}
