import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlassContainer({ children, className }: Props) {
  return (
    <div
      className={className ?? ""}
      style={{
        boxShadow:
          " 0px 30.79005px 11.3437px 0px rgba(27, 27, 27, 0.16), 0px 1.62053px 19.44635px 0px rgba(255, 255, 255, 0.08) inset, -1.62053px 0px 20.25661px 0px rgba(171, 160, 223, 0.08) inset",
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(27deg, rgba(83, 56, 158, 0.10) 8.33%, rgba(105, 65, 198, 0.10) 91.67%)",
        backdropFilter: "blur(12.153966903686523px)",
        border: "0.24px solid",
      }}
    >
      {children}
    </div>
  );
}
