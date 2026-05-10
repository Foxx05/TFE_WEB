import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function VideoScroll() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeText, setActiveText] = useState("");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const canvas = canvasRef.current as HTMLCanvasElement;
    if (!canvas) return;

    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!context) return;

    const frameCount = 72;
    const images: HTMLImageElement[] = [];
    const video = { frame: 0 };

    const currentFrame = (index: number) =>
      `${import.meta.env.BASE_URL}/frames/frame_${String(index + 1).padStart(4, "0")}.webp`;

    function updateText(frameIndex: number) {
      if (frameIndex < 5) {
        setActiveText("");
      } else if (frameIndex >= 5 && frameIndex < 20) {
        setActiveText("Here’s what a greenhouse equipped with the Berrycam ripening monitoring system looks like. Cameras monitor the plants from the side. The length of the rail can be adjusted to suit your needs.");
      } else if (frameIndex >= 22 && frameIndex < 35) {
        setActiveText("In this installation example, a camera monitors three trays of strawberries. The camera is positioned 35 cm (about 14 inches) from the trough. It’s entirely possible that it could monitor more trays if the camera were positioned further back.");
      } else if (frameIndex >= 37 && frameIndex < 68) {
        setActiveText("Once the photo is taken, it is analyzed by a third-party program. This analysis (of the color) determines whether the strawberry is ready for harvest or not.");
      } else if (frameIndex >= 70 && frameIndex < 72) {
        setActiveText("");
      }
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
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    }

    function loadImage(index: number) {
      if (images[index]) return;

      const img = new Image();
      img.src = currentFrame(index);
      img.onload = render;
      images[index] = img;
    }

    function loadAroundFrame(index: number) {
      for (let i = index - 3; i <= index + 8; i++) {
        if (i >= 0 && i < frameCount) {
          loadImage(i);
        }
      }
    }

    resizeCanvas();

    for (let i = 0; i < frameCount; i++) {
      loadImage(i);
    }

    Promise.all(
      images.map(
        (img) =>
          new Promise<void>((resolve) => {
            if (img.complete) {
              resolve();
            } else {
              img.onload = () => resolve();
            }
          })
      )
    ).then(() => {
      render();
      ScrollTrigger.refresh();
    });

    const tween = gsap.to(video, {
      frame: frameCount - 1,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      onUpdate: () => {
        const frameIndex = Math.floor(video.frame);
        loadAroundFrame(frameIndex);
        updateText(frameIndex);
        render();
      },
    });

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      tween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="scroll--video">

      {activeText && (
        <div className="video--text">
          <p>{activeText}</p>
        </div>
      )}

      <canvas ref={canvasRef} className="scroll--video__canvas" />
    </section>
  );
}