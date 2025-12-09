import { 
  Palette, 
  Video, 
  BarChart3, 
  Figma, 
  Instagram, 
  Youtube,
  Sparkles,
  Zap,
  Target
} from "lucide-react";

const icons = [
  { Icon: Palette, className: "top-[15%] left-[10%] animate-float", color: "text-blue-500" },
  { Icon: Video, className: "top-[20%] right-[15%] animate-float-reverse", color: "text-purple-500" },
  { Icon: BarChart3, className: "top-[40%] left-[5%] animate-float-slow", color: "text-orange-500" },
  { Icon: Figma, className: "top-[60%] right-[8%] animate-float", color: "text-pink-500" },
  { Icon: Instagram, className: "bottom-[30%] left-[15%] animate-float-reverse", color: "text-rose-500" },
  { Icon: Youtube, className: "top-[25%] left-[25%] animate-float-slow", color: "text-red-500" },
  { Icon: Sparkles, className: "top-[35%] right-[25%] animate-float", color: "text-yellow-500" },
  { Icon: Zap, className: "bottom-[40%] right-[20%] animate-float-slow", color: "text-cyan-500" },
  { Icon: Target, className: "top-[55%] left-[20%] animate-float-reverse", color: "text-green-500" },
];

export const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, className, color }, index) => (
        <div
          key={index}
          className={`absolute ${className}`}
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg">
            <Icon size={28} className={color} />
          </div>
        </div>
      ))}
    </div>
  );
};
