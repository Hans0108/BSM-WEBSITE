import React from "react";

interface CompanyLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function CompanyLogo({ className = "", iconOnly = false, size = "md" }: CompanyLogoProps) {
  // Setup sizing classes
  const dimensions = {
    sm: iconOnly ? { width: "32px", height: "18px" } : { width: "120px", height: "65px" },
    md: iconOnly ? { width: "50px", height: "28px" } : { width: "180px", height: "100px" },
    lg: iconOnly ? { width: "80px", height: "45px" } : { width: "260px", height: "145px" },
    xl: iconOnly ? { width: "120px", height: "68px" } : { width: "380px", height: "210px" }
  };

  const selectedSize = dimensions[size];

  return (
    <div className={`flex items-center select-none ${className}`}>
      <svg
        width={selectedSize.width}
        height={selectedSize.height}
        viewBox={iconOnly ? "0 0 500 190" : "0 0 500 270"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* --- SHADOWS & GLOWS (Subtle premium styling) --- */}
        <defs>
          <filter id="premium-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#F97316" floodOpacity="0.15" />
          </filter>
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.3" />
            <stop offset="0%" stopColor="#008E44" />
            <stop offset="100%" stopColor="#005B2B" />
          </linearGradient>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A65C7" />
            <stop offset="100%" stopColor="#304185" />
          </linearGradient>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EE4932" />
            <stop offset="100%" stopColor="#C42010" />
          </linearGradient>
          <filter id="inset-bevel" x="-5%" y="-5%" width="110%" height="110%">
            <feOffset dx="0" dy="2" />
            <feGaussianBlur stdDeviation="1" result="offset-blur" />
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
            <feFlood floodColor="white" floodOpacity="0.2" result="color" />
            <feComposite operator="in" in="color" in2="inverse" result="shadow" />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
        </defs>

        <g filter="url(#premium-glow)">
          {/* --- LEFT & RIGHT RED ROOF TILES (Orange/Red) --- */}
          {/* Left tile */}
          <polygon
            points="38,103 162,38 184,52 60,117"
            fill="url(#redGradient)"
            stroke="#AD1D14"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Right tile */}
          <polygon
            points="462,103 338,38 316,52 440,117"
            fill="url(#redGradient)"
            stroke="#AD1D14"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* --- HOUSE MAIN STRUCTURAL BLUE FRAME --- */}
          {/* We lay out a filled polygon for exact matches including the V-shape in center "M" design */}
          <path
            d="M 105,170 
               L 105,80
               L 250,11
               L 395,80
               L 395,170
               L 366,170
               L 366,95
               L 250,38
               L 134,95
               L 134,170
               Z"
            fill="url(#blueGradient)"
            stroke="#212C5F"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Inner roof slant pillars meeting V center */}
          <path
            d="M 235,170 
               L 235,120
               L 250,112
               L 265,120
               L 265,170
               L 235,170
               Z"
            fill="url(#blueGradient)"
            stroke="#212C5F"
            strokeWidth="1.5"
          />

          {/* --- RED CHARACTERS: "B" AND "S" --- */}
          {/* Bold, heavy display characters matching original logo perfectly */}
          {/* Letter B */}
          <text
            x="185"
            y="145"
            fontFamily="'Impact', 'Arial Black', sans-serif"
            fontSize="105"
            fontWeight="bold"
            fill="url(#redGradient)"
            stroke="#AD1D14"
            strokeWidth="3"
            textAnchor="middle"
            filter="drop-shadow(0px 3px 2px rgba(0,0,0,0.4))"
          >
            B
          </text>

          {/* Letter S */}
          <text
            x="315"
            y="145"
            fontFamily="'Impact', 'Arial Black', sans-serif"
            fontSize="105"
            fontWeight="bold"
            fill="url(#redGradient)"
            stroke="#AD1D14"
            strokeWidth="3"
            textAnchor="middle"
            filter="drop-shadow(0px 3px 2px rgba(0,0,0,0.4))"
          >
            S
          </text>

          {/* --- BLUE BASE PLATFORM --- */}
          <rect
            x="96"
            y="178"
            width="308"
            height="8"
            fill="url(#blueGradient)"
            stroke="#212C5F"
            strokeWidth="1.5"
          />
        </g>

        {/* --- GREEN BADGE BAR AND TEXT: ONLY RENDER IF NOT iconOnly --- */}
        {!iconOnly && (
          <g>
            {/* The 3D Beveled Green Bar */}
            <rect
              x="75"
              y="196"
              width="350"
              height="58"
              rx="4"
              ry="4"
              fill="url(#greenGradient)"
              stroke="#004721"
              strokeWidth="2.5"
              filter="url(#premium-glow)"
            />
            {/* Glossy top bevel border highlighting */}
            <path
              d="M 78,199 L 422,199"
              stroke="#04C460"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* White bold brand name centered */}
            <text
              x="250"
              y="237"
              fontFamily="'Helvetica Neue', 'Arial', 'Inter', sans-serif"
              fontSize="31"
              fontWeight="900"
              letterSpacing="0.2px"
              fill="#FFFFFF"
              textAnchor="middle"
              filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.5))"
            >
              BANGUN SARANA MAKMUR
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
