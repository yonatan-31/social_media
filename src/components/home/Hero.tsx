import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FloatingIcons } from "./FloatingIcons";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Floating Icons Background */}
      <FloatingIcons />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-space leading-tight mb-8 opacity-0 animate-fade-in">
            Powering Your <span className="text-gradient">Digital Presence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
            We are a creative social media agency specializing in digital marketing, 
            content production, and brand strategy. With bold ideas and fearless 
            creativity, we help brands stand out and connect.
          </p>

          {/* Email Input + CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="relative w-full sm:w-auto flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-14 pl-6 pr-4 rounded-full bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="rounded-full whitespace-nowrap">
                Free Consult
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="absolute bottom-0 left-0 right-0 py-8">
        <p className="text-center text-muted-foreground text-sm mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
          Trusted By Leading Brands
        </p>
        <div className="overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: "800ms" }}>
          <div className="flex animate-marquee">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-16 px-8">
                {["Nike", "Spotify", "Airbnb", "Slack", "Netflix", "Adobe", "Figma", "Google"].map((brand, i) => (
                  <div
                    key={`${setIndex}-${i}`}
                    className="text-muted-foreground/40 font-bold text-xl font-space whitespace-nowrap"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
