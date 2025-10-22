import { TrendingUp, Mountain } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", showText = true, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-base gap-1.5",
    md: "text-xl gap-2",
    lg: "text-2xl gap-2.5"
  };

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 28
  };

  return (
    <div className={`flex items-center ${sizeClasses[size]} ${className}`}>
      <div className="relative">
        {/* Mountain base */}
        <div className="relative flex items-end">
          <Mountain 
            className="text-primary" 
            size={iconSizes[size]} 
            strokeWidth={2.5}
          />
          {/* Trending line overlay */}
          <TrendingUp 
            className="absolute -right-1 -top-1 text-[hsl(221,83%,53%)]" 
            size={iconSizes[size] * 0.6} 
            strokeWidth={3}
          />
        </div>
      </div>
      {showText && (
        <span className="font-bold bg-gradient-to-r from-primary to-[hsl(221,83%,53%)] bg-clip-text text-transparent">
          pinnacleanalytics
        </span>
      )}
    </div>
  );
};

export default Logo;
