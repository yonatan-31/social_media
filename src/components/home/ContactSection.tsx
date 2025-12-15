import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@sparkmedia.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+2511782541",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Bole, addis ababa, ethiopia",
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 bg-card" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Info */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md">
              Ready to start your project? Reach out and let's discuss how we can help your brand grow.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <info.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.title}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="p-8 rounded-2xl bg-background border border-border">
            <h3 className="text-xl font-bold font-space mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="home-name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="home-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="abebe"
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label htmlFor="home-email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="home-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="abebe@example.com"
                    required
                    className="bg-card border-border"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="home-message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="home-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="bg-card border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
