import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Brand Campaign",
    category: "Digital Marketing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdMKZ2qKIscYqgGsKzngs0cFCxMtGdV7PFQ&s",
  },
  {
    id: 2,
    title: "Social Content",
    category: "Content Production",
    image: "https://cdn.dribbble.com/userupload/27746979/file/original-594b4aacc09cc775437d31183f0efc5a.png?resize=400x0",
  },
  {
    id: 3,
    title: "Product Launch",
    category: "Video Production",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/875a97238182375.Y3JvcCwzNTEzLDI3NDgsMCww.jpg",
  },
  {
    id: 4,
    title: "Corporate Identity",
    category: "Branding",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/b1a0d3224314901.Y3JvcCwzMTcwLDI0ODAsMTY0LDA.jpg",
  },
  {
    id: 5,
    title: "Event Coverage",
    category: "Photography",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/5cb74e228701735.Y3JvcCwxMDgwLDg0NCwwLDg.jpg",
  },
  {
    id: 6,
    title: "Influencer Campaign",
    category: "Social Media",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/f5be97210920389.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
  },
];

export const PortfolioPreview = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space mb-4">
              Our Creative Portfolio
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Explore some of our recent digital marketing and design projects 
              that have made a significant impact for our clients.
            </p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="horizontal-scroll pl-6 md:pl-[calc((100vw-1400px)/2+24px)] gap-6 pb-4"
      >
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="scroll-item group relative w-[300px] md:w-[350px] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-primary text-sm font-medium">{item.category}</span>
              <h3 className="text-xl font-bold font-space mt-1">{item.title}</h3>
            </div>
          </div>
        ))}
        
        {/* View All Card */}
        <Link
          to="/portfolio"
          className="scroll-item w-[300px] md:w-[350px] aspect-[3/4] rounded-2xl bg-secondary flex flex-col items-center justify-center gap-4 hover:bg-primary/10 transition-colors duration-300 group"
        >
          <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <ArrowRight size={32} className="text-primary" />
          </div>
          <span className="text-lg font-semibold font-space">View All Projects</span>
        </Link>
      </div>

      <div className="container mx-auto px-6 mt-12 text-center md:hidden">
        <Link to="/portfolio">
          <Button variant="outline" size="lg">
            View Full Portfolio
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
