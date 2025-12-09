import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Megaphone, 
  Video, 
  Globe, 
  Calendar, 
  PenTool, 
  BarChart3,
  Camera,
  MessageSquare,
  ArrowRight,
  Check
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies that drive growth and deliver measurable results.",
    features: [
      "Social Media Marketing",
      "Paid Advertising (PPC)",
      "SEO Optimization",
      "Email Marketing",
      "Influencer Partnerships",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "From concept to final cut, we create compelling video content that tells your brand story.",
    features: [
      "Brand Videos",
      "Social Media Shorts",
      "Product Demos",
      "Testimonial Videos",
      "Animation & Motion Graphics",
    ],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Beautiful, responsive websites that convert visitors into customers.",
    features: [
      "Custom Web Design",
      "E-commerce Development",
      "Landing Pages",
      "CMS Integration",
      "Performance Optimization",
    ],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
  },
  {
    icon: PenTool,
    title: "Brand Identity",
    description: "Crafting unique brand identities that resonate with your target audience.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Brand Strategy",
      "Rebranding",
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photography services for products, events, and lifestyle content.",
    features: [
      "Product Photography",
      "Event Coverage",
      "Lifestyle Shoots",
      "Corporate Portraits",
      "Food Photography",
    ],
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=400&fit=crop",
  },
  {
    icon: MessageSquare,
    title: "Content Strategy",
    description: "Data-driven content strategies that engage your audience and drive conversions.",
    features: [
      "Content Calendar",
      "Copywriting",
      "Blog Management",
      "Social Media Content",
      "Content Analytics",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
];

const Services = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From digital strategy to final execution, we provide a complete suite of 
              services to grow your online presence and captivate your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <service.icon size={28} className="text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-space">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-primary/20">
                          <Check size={14} className="text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="hero" className="rounded-full group">
                      Get Started
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Let's discuss how we can help you achieve your digital marketing goals.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="rounded-full">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
