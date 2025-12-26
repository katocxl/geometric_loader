
import React from 'react';

/**
 * Geometric Loader Component
 * 
 * This component visualizes a complex multi-ring SVG animation.
 * The animations are defined via global keyframes in index.html to 
 * maintain the precise timing and dash-array transitions requested.
 */
const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <svg 
        className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40" 
        width={240} 
        height={240} 
        viewBox="0 0 240 240"
      >
        {/* Ring A - Outer Red Ring */}
        <circle 
          className="animate-ring-a" 
          cx={120} 
          cy={120} 
          r={105} 
          fill="none" 
          stroke="#f42f25" 
          strokeWidth={20} 
          strokeDasharray="0 660" 
          strokeDashoffset={-330} 
          strokeLinecap="round" 
        />
        
        {/* Ring B - Inner Orange Ring */}
        <circle 
          className="animate-ring-b" 
          cx={120} 
          cy={120} 
          r={35} 
          fill="none" 
          stroke="#f49725" 
          strokeWidth={20} 
          strokeDasharray="0 220" 
          strokeDashoffset={-110} 
          strokeLinecap="round" 
        />
        
        {/* Ring C - Left Blue Ring */}
        <circle 
          className="animate-ring-c" 
          cx={85} 
          cy={120} 
          r={70} 
          fill="none" 
          stroke="#255ff4" 
          strokeWidth={20} 
          strokeDasharray="0 440" 
          strokeLinecap="round" 
        />
        
        {/* Ring D - Right Pink Ring */}
        <circle 
          className="animate-ring-d" 
          cx={155} 
          cy={120} 
          r={70} 
          fill="none" 
          stroke="#f42582" 
          strokeWidth={20} 
          strokeDasharray="0 440" 
          strokeLinecap="round" 
        />
      </svg>
    </div>
  );
};

export default Loader;
