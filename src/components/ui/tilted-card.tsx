import React, { useRef, useState } from "react";

interface TiltedCardProps {
  imageSrc: string;
  altText?: string;
  captionText?: string;
  containerHeight?: string;
  containerWidth?: string;
  imageHeight?: string;
  imageWidth?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  displayOverlayContent?: boolean;
  overlayContent?: React.ReactNode;
  className?: string;
}

export function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  scaleOnHover = 1.05,
  rotateAmplitude = 14,
  showTooltip = true,
  displayOverlayContent = false,
  overlayContent = null,
  className = "",
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    // Calculate rotation angle
    const rotX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    setRotateX(rotX);
    setRotateY(rotY);

    // Glare position in percentage
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY, opacity: 0.25 });

    // Tooltip position relative to card
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  function handleMouseEnter() {
    setIsHovered(true);
    setScale(scaleOnHover);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setScale(1);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  }

  return (
    <div
      ref={ref}
      className={`relative w-full aspect-video select-none rounded-xl [perspective:1000px] cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Tilted Card Body */}
      <div
        className="relative w-full h-full rounded-xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 shadow-md transition-all duration-200 ease-out [transform-style:preserve-3d]"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
        }}
      >
        {/* Project Image */}
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover pointer-events-none"
          loading="lazy"
        />

        {/* Dynamic Holographic Glare Overlay */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
            opacity: glarePosition.opacity,
          }}
        />

        {/* 3D Floating Overlay Content (if provided) */}
        {displayOverlayContent && overlayContent && (
          <div className="absolute inset-0 [transform:translateZ(30px)] pointer-events-none">
            {overlayContent}
          </div>
        )}
      </div>

      {/* Floating 3D Parallax Tooltip / Badge */}
      {showTooltip && captionText && isHovered && (
        <div
          className="absolute pointer-events-none z-30 px-3 py-1 rounded-md bg-neutral-950/90 dark:bg-white/95 text-white dark:text-neutral-950 text-[11px] font-mono font-bold shadow-lg backdrop-blur-md transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-full"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y - 12}px`,
          }}
        >
          {captionText}
        </div>
      )}
    </div>
  );
}

export default TiltedCard;
