import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Iridescence from "@/components/Iridescence";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center relative">
      <div className="fixed inset-0 w-full h-full -z-10">
        <Iridescence 
          color={[0.2, 0.3, 0.5]}
          speed={1.0}
          amplitude={0.1}
          mouseReact={true}
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
