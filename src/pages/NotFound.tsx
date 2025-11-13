import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import DarkVeil from "@/components/DarkVeil";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center relative">
      <div className="fixed inset-0 w-full h-full -z-10">
        <DarkVeil 
          speed={0.5}
          hueShift={0}
          noiseIntensity={0.02}
          scanlineIntensity={0}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-accent underline hover:text-accent/80 transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
