import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoScroll() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    const setupAnimation = () => {
        gsap.to(video, {
            currentTime: video.duration || 1,
            ease: "none",
            scrollTrigger: { trigger: section, start: "top top", end: "bottom bottom", scrub: true, },
        });
    };

    if (video.readyState >= 1) {
        setupAnimation();
    } else {
        video.addEventListener("loadedmetadata", setupAnimation);
    }

    return () => {
        video.removeEventListener("loadedmetadata", setupAnimation);
        ScrollTrigger.getAll().forEach((st) => st.kill());
    };
    }, []);

    return (
        <section ref={sectionRef} className="section--video">
            <video ref={videoRef} src="/images/videoRender.mp4" playsInline preload="auto" muted className="video-background"/>
        </section>
    );
}