import { cn } from "@/utils";

interface Props {
  text: string;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
}

export default function Pill({
  text,
  variant = "primary",
  className,
}: Props): JSX.Element {
  return (
    <div
      className={cn(
        "rounded-full",
        variant === "tertiary"
          ? "max-w-max text-center text-[18.919px] font-normal capitalize leading-normal text-IFText lg:text-[31.247px]"
          : "w-max text-sm font-normal uppercase text-white",
        variant === "secondary" ? "bg-[#0E0926]" : "bg-[#120D1E]",
        variant === "tertiary" ? "p-[14.53px] lg:p-[24px]" : "px-4 py-2",
        className ?? "",
      )}
      style={
        variant === "tertiary"
          ? {
              border: "0.868px solid #53389E",
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(27deg, rgba(83, 56, 158, 0.10) 8.33%, rgba(105, 65, 198, 0.10) 91.67%)",
              boxShadow:
                "0px 65.96673px 24.30353px 0px rgba(27, 27, 27, 0.16), 0px 3.47193px 41.66319px 0px rgba(255, 255, 255, 0.08) inset, -3.47193px 0px 43.39916px 0px rgba(171, 160, 223, 0.08) inset",
              backdropFilter: "blur(26px)",
            }
          : variant === "secondary"
          ? {
              boxShadow:
                "0px 2px 4px 0px rgba(236, 178, 46, 0.25) inset, -2px 0px 4px 0px rgba(236, 178, 46, 0.25) inset",
            }
          : {
              boxShadow:
                "0px 2px 4px 0px rgba(248, 248, 248, 0.16) inset, -2px 0px 4px 0px rgba(183, 183, 183, 0.25) inset",
            }
      }
    >
      {text}
    </div>
  );
}
