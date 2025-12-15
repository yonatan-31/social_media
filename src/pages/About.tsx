import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, Rocket, Target, Heart, Lightbulb, Zap, ArrowRight } from "lucide-react";

const stats = [
  { icon: Users, value: "150+", label: "Happy Clients" },
  { icon: Award, value: "50+", label: "Awards Won" },
  { icon: Rocket, value: "500+", label: "Projects Delivered" },
  { icon: Target, value: "95%", label: "Client Retention" },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We're deeply passionate about what we do. Every project is an opportunity to create something extraordinary.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions for our clients.",
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "We hold ourselves to the highest standards, ensuring every deliverable exceeds expectations.",
  },
];

const team = [
  {
    name: "Abel Tesfaye",
    role: "Founder & CEO",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjyIID4cwAPHYQQV57TesRKwEpjSC5NMmeg&s",
  },
  {
    name: "Sarah Kebede",
    role: "Creative Director",
    image: "https://i.pinimg.com/564x/13/ac/b0/13acb0b1970d4100939b41f11b885cc6.jpg",
  },
  {
    name: "Marcus Johnson",
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
 
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-6">
              We Are <span className="text-gradient">SparkMedia</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A creative powerhouse dedicated to helping brands shine in the digital world. 
              We combine strategy, design, and technology to create impactful experiences 
              that drive real results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-8 rounded-2xl bg-card border border-border text-center hover:border-primary/30 transition-all duration-500"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
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
      </section>

      {/* Story Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold font-space mb-6">
                From Passion to Purpose
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2018, SparkMedia began as a small team of creative enthusiasts 
                  with a shared vision: to help brands tell their stories in compelling ways. 
                  What started in a tiny studio has grown into a full-service digital agency 
                  serving clients worldwide.
                </p>
                <p>
                  Our journey has been defined by our commitment to excellence and innovation. 
                  We've had the privilege of working with startups, Fortune 500 companies, 
                  and everything in between—each project teaching us something new and 
                  pushing us to raise the bar.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for brands looking to make 
                  their mark in the digital landscape. Our team of strategists, designers, 
                  and content creators work together seamlessly to deliver results that matter.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-primary shadow-glow">
                <p className="text-primary-foreground font-bold text-2xl font-space">6+</p>
                <p className="text-primary-foreground/80 text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium mb-4 block">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-6">
              What Drives Us
            </h2>
            <p className="text-muted-foreground text-lg">
              Our core values guide everything we do, from how we work with clients 
              to how we collaborate as a team.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 text-center"
              >
                <div className="p-4 rounded-xl bg-primary/10 w-fit mx-auto mb-6">
                  <value.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold font-space mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium mb-4 block">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-6">
              Meet the Creatives
            </h2>
            <p className="text-muted-foreground text-lg">
              A diverse team of strategists, designers, and storytellers united by 
              a passion for creating exceptional work.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group text-center"
              >
                <div className="relative mb-6 rounded-2xl overflow-hidden aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-lg font-bold font-space">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Let's create something amazing together. Reach out and let's discuss 
            how we can help your brand stand out.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="rounded-full group">
              Get in Touch
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
