interface SectionFadeProps {
  position: "top" | "bottom";
}

export const SectionFade = ({ position }: SectionFadeProps) => {
  return (
    <div
      className={`absolute left-0 right-0 h-32 pointer-events-none z-20 ${
        position === "top"
          ? "top-0 bg-gradient-to-b from-background via-background/80 to-transparent"
          : "bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent"
      }`}
    />
  );
};
