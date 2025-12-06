import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Smartphone, Globe, Sparkles, Code2, Palette, Rocket, Database, Cloud, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Pattern from "@/components/Pattern";
import { GlowCard } from "@/components/GlowCard";
import Stepper, { Step } from "@/components/Stepper";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Next.js, React, and Tailwind-powered scalable sites that deliver exceptional performance and user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern Stack"]
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native Android, iOS, and cross-platform applications built with attention to detail and performance.",
      features: ["Native Development", "Cross-Platform", "App Store Ready", "Cloud Integration"]
    },
    {
      icon: Sparkles,
      title: "AI Workflow Development",
      description: "Intelligent automation pipelines, chatbots, and custom AI APIs that transform your business processes.",
      features: ["Custom AI Solutions", "Process Automation", "Chatbot Development", "API Integration"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love, designed with accessibility and conversion in mind.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Scalable backend infrastructure and APIs built with modern technologies and best practices.",
      features: ["RESTful APIs", "Database Design", "Cloud Services", "Real-time Features"]
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Comprehensive security audits, ongoing maintenance, and performance optimization for your digital products.",
      features: ["Security Audits", "Performance Monitoring", "Regular Updates", "24/7 Support"]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 w-full h-full -z-10">
        <Pattern />
      </div>
      <div className="relative z-10">
        <Navigation />

      <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-20 animate-fade-in">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">Our Services</h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Comprehensive digital solutions designed to scale your business and delight your users
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-20">
            {services.map((service, index) => (
              <GlowCard
                key={service.title}
                glowColor={index % 2 === 0 ? 'purple' : 'blue'}
                customSize
                className="animate-slide-up w-full h-auto aspect-auto"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-5 sm:p-8 space-y-4 sm:space-y-6 h-full flex flex-col">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3 flex-grow">
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2 pt-2 sm:pt-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild variant="outline" className="w-full rounded-full mt-4 sm:mt-6">
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </div>
              </GlowCard>
            ))}
          </div>

          {/* Process Section */}
          <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-12 space-y-8 sm:space-y-12 animate-fade-in">
            <div className="text-center space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Our Process</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                A streamlined approach to delivering exceptional results
              </p>
            </div>

            <Stepper
              initialStep={1}
              onStepChange={(step) => console.log('Current step:', step)}
              onFinalStepCompleted={() => console.log("Process completed!")}
              backButtonText="Previous"
              nextButtonText="Next"
            >
              <Step>
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground text-center">Discovery</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground text-center px-2">
                    We start by understanding your vision, requirements, and business goals to create a comprehensive project roadmap.
                  </p>
                </div>
              </Step>
              <Step>
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground text-center">Design</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground text-center px-2">
                    Creating intuitive and beautiful interfaces that prioritize user experience and align with your brand identity.
                  </p>
                </div>
              </Step>
              <Step>
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground text-center">Development</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground text-center px-2">
                    Building with cutting-edge technologies and best practices to ensure scalability, performance, and maintainability.
                  </p>
                </div>
              </Step>
              <Step>
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground text-center">Launch</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground text-center px-2">
                    Deploying and scaling your solution with ongoing support to ensure continued success and growth.
                  </p>
                </div>
              </Step>
            </Stepper>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 sm:mt-20 space-y-4 sm:space-y-6 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Ready to Get Started?</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Let's discuss your project and turn your vision into reality
            </p>
            <Button asChild size="lg" className="rounded-full px-6 sm:px-8 w-full sm:w-auto">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </div>

        <Footer />
      </div>
    </div>
  );
};

export default Services;
