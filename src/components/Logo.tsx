import logoImage from "@/assets/logo.png";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", showText = true, size = "md" }: LogoProps) => {
  const heightClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10"
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoImage} 
        alt="Pinnacle Analytics" 
        className={`${heightClasses[size]} w-auto object-contain`}
        style={{ filter: 'hue-rotate(0deg) saturate(1.2)' }}
      />
    </div>
  );
};

export default Logo;
