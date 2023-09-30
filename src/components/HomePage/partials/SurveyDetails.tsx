import { cn } from "@/utils";

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
    <header className={cn("space-y-[6px]", className ?? "")}>
      <h3 className="text-sm font-medium text-white md:text-xl">{title}</h3>
      <p className="text-xs font-normal leading-[18px] text-IFText md:text-sm">
        {description}
      </p>
    </header>
  );
}
