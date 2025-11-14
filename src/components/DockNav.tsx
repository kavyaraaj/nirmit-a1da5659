import { useNavigate, useLocation } from "react-router-dom";
import { VscHome, VscInfo, VscServer, VscMail } from "react-icons/vsc";
import Dock from "./Dock";

const DockNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { 
      icon: <VscHome size={20} />, 
      label: 'Home', 
      onClick: () => navigate('/'),
      className: location.pathname === '/' ? 'ring-2 ring-white/50' : ''
    },
    { 
      icon: <VscInfo size={20} />, 
      label: 'About', 
      onClick: () => navigate('/about'),
      className: location.pathname === '/about' ? 'ring-2 ring-white/50' : ''
    },
    { 
      icon: <VscServer size={20} />, 
      label: 'Services', 
      onClick: () => navigate('/services'),
      className: location.pathname === '/services' ? 'ring-2 ring-white/50' : ''
    },
    { 
      icon: <VscMail size={20} />, 
      label: 'Contact', 
      onClick: () => navigate('/contact'),
      className: location.pathname === '/contact' ? 'ring-2 ring-white/50' : ''
    },
  ];

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 pointer-events-none">
      <div className="pointer-events-auto">
        <Dock 
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>
    </div>
  );
};

export default DockNav;
