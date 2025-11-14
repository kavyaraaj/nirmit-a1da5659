import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Smartphone, Globe, Sparkles, Code2, Palette, Rocket, Database, Cloud, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GridScan } from "@/components/GridScan";
import CardSwap, { Card } from "@/components/CardSwap";
import Stack from "@/components/Stack";

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
        <GridScan 
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>
      <div className="relative z-10">
        <Navigation />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions designed to scale your business and delight your users
            </p>
          </div>

          {/* Services Cards */}
          <div className="relative h-[600px] mb-32">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={true}
              width={400}
              height={500}
            >
              {services.map((service, index) => (
                <Card key={index}>
                  <div className="p-8 space-y-6 h-full flex flex-col">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                    
                    <div className="space-y-3 flex-1">
                      <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                      <p className="text-white/80 leading-relaxed">{service.description}</p>
                    </div>

                    <div className="space-y-2 pt-4">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-white/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>

          {/* Process Section */}
          <div className="glass rounded-3xl p-12 space-y-12 animate-fade-in relative">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A streamlined approach to delivering exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Code2, title: "Discovery", description: "Understanding your vision and requirements" },
                { icon: Palette, title: "Design", description: "Creating intuitive and beautiful interfaces" },
                { icon: Rocket, title: "Development", description: "Building with cutting-edge technologies" },
                { icon: Cloud, title: "Launch", description: "Deploying and scaling your solution" }
              ].map((step, index) => (
                <div key={step.title} className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center relative">
                    <step.icon className="w-8 h-8 text-accent" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Stack Component */}
            <div className="flex flex-col items-center justify-center pt-12 space-y-6">
              <div className="text-center">
                <p className="text-lg text-white font-medium">Explore Our Work</p>
                <p className="text-sm text-white/60 mt-2">Drag cards left or right to explore</p>
              </div>
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={{ width: 200, height: 200 }}
                cardsData={[
                  { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
                  { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
                  { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
                  { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
                ]}
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20 space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your project and turn your vision into reality
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
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
