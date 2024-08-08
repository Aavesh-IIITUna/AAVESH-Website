import { useContext } from "react";
import {
  FaHome,
  FaUser,
  FaImage,
  FaEnvelope,
  FaCalendarAlt,
  FaHandsHelping,
} from "react-icons/fa";
import GlobalContext from "../context/GlobalContext";

const Header = () => {
  const { breakpoint } = useContext(GlobalContext);

  return (
    <nav
      className="fixed w-16 text-white flex flex-col justify-center"
      style={{ zIndex: 5 }}
    >
      <ul className="list-none p-4 m-4 flex flex-col items-center font-iceland">
        <li className="w-full text-center py-3 cursor-pointer">
          {breakpoint("mobile") ? (
            <FaHome size={24} />
          ) : (
            <span className="vertical-text text-3xl">Home</span>
          )}
        </li>
        <li className="w-full text-center py-3 cursor-pointer">
          {breakpoint("mobile") ? (
            <FaUser size={24} />
          ) : (
            <span className="vertical-text text-3xl">About</span>
          )}
        </li>
        <li className="w-full text-center py-3 cursor-pointer">
          {breakpoint("mobile") ? (
            <FaCalendarAlt size={24} />
          ) : (
            <span className="vertical-text text-3xl">Events</span>
          )}
        </li>
        <li className="w-full text-center py-3 cursor-pointer">
          {breakpoint("mobile") ? (
            <FaImage size={24} />
          ) : (
            <span className="vertical-text text-3xl">Gallery</span>
          )}
        </li>
        <li className="w-full text-center py-3 cursor-pointer">
          {breakpoint("mobile") ? (
            <FaHandsHelping size={24} />
          ) : (
            <span className="vertical-text text-3xl">Sponsors</span>
          )}
        </li>
        <li className="w-full text-center py-3 cursor-pointer">
          {breakpoint("mobile") ? (
            <FaEnvelope size={24} />
          ) : (
            <span className="vertical-text text-3xl">Contact Us</span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
