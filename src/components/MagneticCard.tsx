import React, { useRef, useState } from "react";
import { motion } from "motion/react";

interface MagneticCardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  key?: React.Key;
}

export default function MagneticCard({ children, onClick, className = "" }: MagneticCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  const [glowCoords, setGlowCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to the center of the card
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Max translation distance: +-8px
    // Max rotation/tilt angle: +-4deg
    const magnetX = (mouseX / width) * 10;
    const magnetY = (mouseY / height) * 10;
    const rotateXValue = -(mouseY / height) * 6;
    const rotateYValue = (mouseX / width) * 6;

    setCoords({
      x: magnetX,
      y: magnetY,
      rotateX: rotateXValue,
      rotateY: rotateYValue
    });

    // Spotlight coordinates relative to the card's top-left
    setGlowCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: coords.x,
        y: coords.y,
        rotateX: coords.rotateX,
        rotateY: coords.rotateY,
        scale: isHovered ? 1.02 : 1
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 24,
        mass: 0.8
      }}
      style={{
        transformStyle: "preserve-3d"
      }}
      className={`relative rounded-none overflow-hidden cursor-pointer flex flex-col justify-between transition-colors duration-300 ${
        isHovered
          ? "border-safety-orange bg-slate-950/80 shadow-[0_0_25px_rgba(249,115,22,0.15)]"
          : "border-white/10 bg-slate-950/40"
      } ${className}`}
    >
      {/* Dynamic reflective glow follows the cursor position */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(180px circle at ${glowCoords.x}px ${glowCoords.y}px, rgba(249, 115, 22, 0.12), transparent 80%)`
          }}
        />
      )}

      {/* Actual child content of the card */}
      <div className="relative z-20 h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}
