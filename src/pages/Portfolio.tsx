import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

const categories = ["All", "Digital Marketing", "Video Production", "Branding", "Social Media", "Web Design"];

const portfolioItems = [
  {
    id: 1,
    title: "TechStart Brand Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=800&fit=crop",
    description: "Complete digital marketing overhaul resulting in 300% engagement increase.",
    type: "image",
  },
  {
    id: 2,
    title: "StyleHouse Product Launch",
    category: "Video Production",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=800&fit=crop",
    description: "Cinematic product launch video with 2M+ views.",
    type: "video",
  },
  {
    id: 3,
    title: "GrowthLabs Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=800&fit=crop",
    description: "Complete brand identity redesign for a SaaS company.",
    type: "image",
  },
  {
    id: 4,
    title: "FoodieApp Social",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=800&fit=crop",
    description: "Social media strategy that grew following by 500%.",
    type: "image",
  },
  {
    id: 5,
    title: "Fintech Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=800&fit=crop",
    description: "Modern, conversion-focused website design.",
    type: "image",
  },
  {
    id: 6,
    title: "Event Highlight Reel",
    category: "Video Production",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=800&fit=crop",
    description: "Professional event coverage and highlight video.",
    type: "video",
  },
  {
    id: 7,
    title: "Influencer Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&h=800&fit=crop",
    description: "Influencer marketing campaign with 10M+ reach.",
    type: "image",
  },
  {
    id: 8,
    title: "Restaurant Branding",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=800&fit=crop",
    description: "Full brand identity for an upscale restaurant.",
    type: "image",
  },
  {
    id: 9,
    title: "Fitness App Launch",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=800&fit=crop",
    description: "Launch campaign across all social platforms.",
    type: "image",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our latest work. From brand campaigns to viral content, 
              see how we've helped our clients achieve remarkable results.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-card border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Video Play Icon */}
                {item.type === "video" && (
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-primary">
                    <Play size={16} className="text-primary-foreground fill-current" />
                  </div>
                )}
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-primary text-sm font-medium">{item.category}</span>
                  <h3 className="text-xl font-bold font-space mt-1 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <Button variant="outline" size="sm" className="group/btn">
                    View Project
                    <ExternalLink size={14} className="ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-6">
            Like What You See?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Let's create something amazing together for your brand.
          </p>
          <Button variant="hero" size="xl" className="rounded-full" asChild>
            <a href="/contact">Start Your Project</a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Portfolio;
