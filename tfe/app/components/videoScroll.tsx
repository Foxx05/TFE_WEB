import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function VideoScroll() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current as HTMLCanvasElement;
    if (!canvas) return;

    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!context) return;

    const frameCount = 144;
    const images: HTMLImageElement[] = [];
    const video = { frame: 0 };

    const currentFrame = (index: number) =>
      `/frames/frame_${String(index + 1).padStart(4, "0")}.webp`;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    }

    function render() {
      const frameIndex = Math.min(
        frameCount - 1,
        Math.max(0, Math.floor(video.frame))
      );

      const img = images[frameIndex];
      if (!img || !img.complete) return;

      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );

      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        img,
        x,
        y,
        img.width * scale,
        img.height * scale
      );
    }

    let loadedImages = 0;
    let tween: gsap.core.Tween | null = null;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);

      img.onload = () => {
        loadedImages++;

        if (loadedImages === frameCount) {
          resizeCanvas();

          tween = gsap.to(video, {
            frame: frameCount - 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".scroll--video",
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
            onUpdate: render,
          });

          ScrollTrigger.refresh();
        }
      };

      images.push(img);
    }

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      tween?.kill();

      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <section className="scroll--video">
      <canvas ref={canvasRef} className="scroll--video__canvas" />
    </section>
  );
}