"use client";

import { useEffect, useRef, useState } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 112;

export default function ScrollyCanvas({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${frameIndex}_delay-0.066s.webp`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          // Force draw the first frame once everything is loaded
          drawFrame(0, loadedImages);
        }
      };
      loadedImages.push(img);
    }
    // Set initially so we have the array, even if not fully loaded
    setImages(loadedImages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const drawFrame = (frameIndex: number, imgs: HTMLImageElement[] = images) => {
    if (!canvasRef.current || imgs.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgs[frameIndex];
    // Don't draw if not yet loaded
    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let renderWidth = canvas.width;
    let renderHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      renderHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - renderHeight) / 2;
    } else {
      renderWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - renderWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    );
    requestAnimationFrame(() => drawFrame(frameIndex));
  });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const latest = scrollYProgress.get();
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(latest * FRAME_COUNT)
        );
        drawFrame(frameIndex);
      }
    };
    handleResize(); // Init on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
  );
}
