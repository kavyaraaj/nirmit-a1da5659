import { Link } from "react-router-dom";
import logo from "@/assets/nirmit-labs-logo.png";
import GlassSurface from "./GlassSurface";

const Navigation = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-fit">
      <GlassSurface
        width="auto"
        height="auto"
        borderRadius={9999}
        className="transition-all duration-300"
      >
        <div className="flex items-center justify-center px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Nirmit Labs" className="h-8 w-auto" />
          </Link>
        </div>
      </GlassSurface>
    </nav>
  );
};

export default Navigation;
