import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Megaphone, Video, Globe, Calendar, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "We build brands that grow. From social media management and ad campaigns to SEO and email marketing, we turn engagement into measurable results.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Visual storytelling is our thing. We produce everything from social media shorts to cinematic brand videos, designed to captivate and convert.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Your website is your digital home. We create responsive, SEO-optimized websites that look and work like a dream.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
  },
  {
    icon: Calendar,
    title: "Event Marketing",
    description: "We bring ideas to life, on stage and online. From corporate events to product launches, we handle everything from concept to coverage.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space mb-6">
            Our Digital Marketing & Creative Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From digital strategy to final execution, we provide a complete suite of services 
            to grow your online presence and captivate your audience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-space">{service.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link to="/services">
            <Button variant="outline" size="lg" className="group">
              View All Services
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
