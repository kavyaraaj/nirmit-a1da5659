import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";

const About = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll(".fade-in-section");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl" ref={contentRef}>
          {/* Header */}
          <div className="text-center mb-20 fade-in-section">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a forward-thinking development agency crafting elegant, performance-driven digital products.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 fade-in-section">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're a forward-thinking development agency crafting elegant, performance-driven digital products. 
                From idea to execution, we focus on innovation, clarity, and seamless user experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team specializes in creating custom solutions that not only meet your business objectives 
                but exceed user expectations. We combine cutting-edge technology with timeless design principles 
                to deliver products that stand the test of time.
              </p>
            </div>

            <div className="fade-in-section">
              <div className="glass rounded-3xl p-8 shadow-glass">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">D</span>
                    </div>
                    <p className="text-lg font-semibold text-foreground">Innovation. Precision. Excellence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-12 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Our Core Values</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation First",
                  description: "We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage."
                },
                {
                  title: "Client Focused",
                  description: "Your success is our success. We work closely with you throughout the entire development journey."
                },
                {
                  title: "Quality Driven",
                  description: "We never compromise on quality. Every line of code, every pixel, every interaction is crafted with care."
                }
              ].map((value, index) => (
                <div 
                  key={value.title}
                  className="glass glass-hover rounded-2xl p-8 text-center space-y-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 glass rounded-3xl p-12 fade-in-section">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "50+", label: "Projects Delivered" },
                { number: "30+", label: "Happy Clients" },
                { number: "5+", label: "Years Experience" },
                { number: "100%", label: "Satisfaction Rate" }
              ].map((stat) => (
                <div key={stat.label} className="text-center space-y-2">
                  <div className="text-4xl md:text-5xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
