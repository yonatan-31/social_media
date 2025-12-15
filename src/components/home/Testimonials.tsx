import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "samuel temsgen",
    role: "Marketing Director",
    company: "TechStart Inc.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSASWZYXTVciHuadb6t56qZ0MLF4QzZ-3YCMGw4SxBDWQ&s",
    content: "SparkMedia transformed our social media presence completely. Our engagement increased by 300% in just three months. Their creative approach and strategic thinking are unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "lili abera",
    role: "CEO",
    company: "GrowthLabs",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi14noYrxKhWFIwP51oXmTfakSRE7_pfRIcHQ1mso2Yg&s",
    content: "Working with SparkMedia was a game-changer for our brand. They understood our vision perfectly and delivered content that resonated with our audience. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "samson kassa",
    role: "Brand Manager",
    company: "StyleHouse",
    image: "https://img.freepik.com/premium-photo/professional-businessman-office_1254878-110652.jpg?semt=ais_hybrid&w=740&q=80",
    content: "The video production quality exceeded our expectations. SparkMedia's team is professional, creative, and always delivers on time. They've become our go-to agency for all digital needs.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our clients have to say 
            about working with SparkMedia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 p-3 rounded-xl bg-primary shadow-glow">
                <Quote size={20} className="text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
