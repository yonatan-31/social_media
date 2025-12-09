import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Rocket, Target } from "lucide-react";

const stats = [
  { icon: Users, value: "150+", label: "Happy Clients" },
  { icon: Award, value: "50+", label: "Awards Won" },
  { icon: Rocket, value: "500+", label: "Projects Delivered" },
  { icon: Target, value: "95%", label: "Client Retention" },
];

export const AboutPreview = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium mb-4 block">Who We Are</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space mb-6">
              A Creative Agency for the Modern Market
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              SparkMedia is a youth-driven creative powerhouse. We exist to help 
              businesses reflect their true identity and communicate with impact 
              through modern digital strategies, innovative designs, and compelling 
              content production.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At SparkMedia, we are creative, bold, and fearless. We combine strategy, 
              design, and technology to empower brands to thrive in the digital age. 
              Our strategic approach goes beyond simple promotion—we leverage data 
              analytics and insights to build strategies that deliver measurable results.
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg" className="group">
                Learn More About Us
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-500 group"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-4xl font-bold font-space text-gradient mb-2">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
