import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Globe, Sparkles, Check, Shield, Zap, HeartHandshake } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import Prism from "@/components/Prism";

const Index = () => {
  const services = [
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications built for performance and user experience.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Scalable, modern web applications using cutting-edge technologies like React and Next.js.",
    },
    {
      icon: Sparkles,
      title: "AI Workflow Automation",
      description: "Intelligent automation solutions that streamline your business processes with AI.",
    },
  ];

  const features = [
    { icon: Shield, text: "Custom Design & Development" },
    { icon: Zap, text: "End-to-End Solutions" },
    { icon: Sparkles, text: "Scalable AI Systems" },
    { icon: HeartHandshake, text: "Ongoing Support" },
  ];

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 w-full h-full -z-10">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.5}
          glow={1}
        />
      </div>
      <div className="relative z-10">
        <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Building Intelligent
              <br />
              <span className="gradient-text">Experiences with</span>
              <br />
              Web, Apps & AI
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
              We help businesses turn ideas into scalable digital solutions with precision, design, and intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" className="rounded-full px-8 group">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="relative mt-20 h-32">
            <div className="absolute top-0 left-1/4 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-float" />
            <div className="absolute top-10 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Why Choose Us</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-4 p-6 glass rounded-2xl animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-lg font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8 animate-fade-in">
            <h3 className="text-2xl font-semibold text-white">Trusted by Forward-Thinking Businesses</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              {["Manju EV Services", "Healthy Tiffin Services", "VG Stores"].map((company) => (
                <div key={company} className="px-6 py-4 glass rounded-xl flex items-center justify-center">
                  <span className="text-white font-semibold">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
