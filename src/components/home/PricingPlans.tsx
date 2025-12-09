import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const categories = ["Digital Marketing", "Video Production", "Web Development"];

const plans = {
  "Digital Marketing": [
    {
      name: "Basic Plan",
      subtitle: "Starter Content Kit",
      price: "14,999",
      currency: "Birr/Month",
      popular: false,
      features: [
        "Social Media Management (3 platforms)",
        "12 Posts per Month",
        "Basic Hashtag Strategy",
        "Monthly Performance Report",
        "Royalty-free background music",
        "Email Support",
      ],
    },
    {
      name: "Standard Package",
      subtitle: "Growth Content Pack",
      price: "29,999",
      currency: "Birr/Month",
      popular: true,
      features: [
        "Social Media Management (5 platforms)",
        "15 Posts per Month (Graphics, Captions)",
        "8 Professional Videos per Month",
        "2 Ad Campaigns (Meta or Google)",
        "Community Management",
        "Monthly Strategy Call",
        "Bi-weekly Reports",
      ],
    },
    {
      name: "Premium Package",
      subtitle: "Pro Branding Series",
      price: "59,999",
      currency: "Birr/Month",
      popular: false,
      features: [
        "Social Media Management (up to 6 platforms)",
        "20+ Custom Posts per Month",
        "Advanced SEO",
        "Email Marketing Campaigns (2 per month)",
        "Dedicated Account Manager",
        "15 Professional Videos per Month",
      ],
    },
  ],
  "Video Production": [
    {
      name: "Starter",
      subtitle: "Basic Video Kit",
      price: "9,999",
      currency: "Birr/Month",
      popular: false,
      features: [
        "2 Short Videos per Month",
        "Basic Editing",
        "Stock Music",
        "1 Revision",
      ],
    },
    {
      name: "Professional",
      subtitle: "Content Creator Pack",
      price: "24,999",
      currency: "Birr/Month",
      popular: true,
      features: [
        "6 Videos per Month",
        "Professional Editing",
        "Motion Graphics",
        "Custom Music",
        "3 Revisions",
        "Social Media Optimization",
      ],
    },
    {
      name: "Enterprise",
      subtitle: "Full Production Suite",
      price: "49,999",
      currency: "Birr/Month",
      popular: false,
      features: [
        "Unlimited Videos",
        "Cinematic Production",
        "Advanced VFX",
        "Original Soundtrack",
        "Unlimited Revisions",
        "Dedicated Editor",
      ],
    },
  ],
  "Web Development": [
    {
      name: "Landing Page",
      subtitle: "Single Page Website",
      price: "19,999",
      currency: "One-time",
      popular: false,
      features: [
        "Responsive Design",
        "Basic SEO",
        "Contact Form",
        "1 Month Support",
      ],
    },
    {
      name: "Business Site",
      subtitle: "Multi-page Website",
      price: "49,999",
      currency: "One-time",
      popular: true,
      features: [
        "Up to 10 Pages",
        "Advanced SEO",
        "CMS Integration",
        "Analytics Setup",
        "3 Months Support",
        "Performance Optimization",
      ],
    },
    {
      name: "E-Commerce",
      subtitle: "Full Online Store",
      price: "99,999",
      currency: "One-time",
      popular: false,
      features: [
        "Unlimited Products",
        "Payment Integration",
        "Inventory Management",
        "Order Tracking",
        "6 Months Support",
        "Mobile App Integration",
      ],
    },
  ],
};

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ transform, transition: "transform 0.15s ease-out" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export const PricingPlans = () => {
  const [activeCategory, setActiveCategory] = useState("Digital Marketing");

  return (
    <section className="py-24 bg-background" id="pricing">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space mb-6">
            Our <span className="text-gradient">Pricing</span> Plans
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the perfect plan that fits your business needs and budget.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-card border border-border">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans[activeCategory as keyof typeof plans].map((plan, index) => (
            <TiltCard
              key={plan.name}
              className={`relative p-8 rounded-2xl bg-card border transition-all duration-500 group ${
                plan.popular
                  ? "border-primary"
                  : "border-border hover:border-primary"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider inline-block whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold font-space text-primary mb-1">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm">{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold font-space">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.currency}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link to="/contact">
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full rounded-lg"
                >
                  Get Started
                </Button>
              </Link>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
