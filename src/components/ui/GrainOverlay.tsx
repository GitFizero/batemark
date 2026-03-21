import { useEffect, useRef } from "react";

/**
 * Grain overlay using a real Canvas-generated noise texture.
 * SVG feTurbulence via background-image is unreliable across browsers.
 * Canvas gives us real pixel-level control.
 */
export const GrainOverlay = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const size = 256;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.createImageData(size, size);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255;
      data[i] = v;     // R
      data[i + 1] = v; // G
      data[i + 2] = v; // B
      data[i + 3] = 25; // Alpha — subtle but visible
    }

    ctx.putImageData(imageData, 0, 0);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="grain-overlay"
      style={{
        width: "100%",
        height: "100%",
        imageRendering: "pixelated",
      }}
    />
  );
};
