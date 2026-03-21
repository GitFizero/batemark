interface OrbProps {
  color?: "copper" | "blue" | "neutral";
  size?: "sm" | "md" | "lg";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  intensity?: number;
}

const colorMap = {
  copper: "196,149,110",
  blue: "100,120,150",
  neutral: "80,80,90",
};

const sizeMap = {
  sm: "w-[400px] h-[300px]",
  md: "w-[600px] h-[400px]",
  lg: "w-[800px] h-[500px]",
};

const positionMap = {
  "top-left": "-top-24 -left-32",
  "top-right": "-top-24 -right-32",
  "bottom-left": "-bottom-24 -left-32",
  "bottom-right": "-bottom-24 -right-32",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

export const AmbientOrb = ({
  color = "copper",
  size = "md",
  position = "top-right",
  intensity = 0.06,
}: OrbProps) => {
  const rgb = colorMap[color];
  return (
    <div
      className={`absolute ${sizeMap[size]} ${positionMap[position]} rounded-full pointer-events-none z-0`}
      style={{
        background: `radial-gradient(ellipse, rgba(${rgb}, ${intensity}) 0%, transparent 70%)`,
        filter: "blur(80px)",
      }}
    />
  );
};
