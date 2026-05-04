import "./header.css";
import Topbar01 from "./HeaderComponents/topbar01";
import Logo02 from "./HeaderComponents/logo02";
import Navbar03 from "./HeaderComponents/navbar03";
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isCSITRoute = location.pathname.startsWith('/CS&IT');
  const isBotanyRoute = location.pathname.startsWith('/Botany');

  // If the path starts with either /CS&IT or /Biology, we'll return null
  if (isCSITRoute || isBotanyRoute) {
    return null;
  }

  return (
    <div className="main">
      <Topbar01 />
      <div className="cont">
        <Logo02 />
      </div>
      <Navbar03 />
    </div>
  );
};

export default Header;