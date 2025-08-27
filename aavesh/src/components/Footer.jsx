import { useState } from "react";
import PropTypes from "prop-types";
import emailjs from "emailjs-com";
import socials from "../Socials";
import { motion } from "framer-motion";
import Heading from "./Heading";

const Footer = (props) => {
  const [user, setUser] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
  "service_3wqq0ir",
  "template_qihejkg",
  e.currentTarget,
  "0KrmH-uQhKkkBTEOv"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setUser({
      name: "",
      message: "",
    });
  };

  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div id={props.id} className="relative  group">
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "400% 400%",
        }}
        className="absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
      />
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "400% 400%",
        }}
        className="absolute inset-0 rounded-3xl z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
      />
      <div className="relative z-10 bg-[#1c1c1c] text-white py-8 rounded-t-3xl shadow-lg mt-10">
        <div className="container mx-auto px-4 relative">
          <div className="  text-center font-iceland mb-6">
            <div className="flex">
              <div className="w-1/2">
            <img
              src="/logo.png"
              alt="AAVESH Logo"
              className="m-4 w-64 lg:block hidden"
            />
            </div>
             <div className="w-1/2 flex justify-end">
            <img
              src="/iiitLogo.webp"
              alt="AAVESH Logo"
              className="m-4 w-32 right-0 lg:block hidden"
            />
            </div>
            </div>
            <div className="border-t-2 border-cyan-600 mb-4 lg:block hidden"></div>
            <Heading as="h2" sizeClass="text-3xl sm:text-4xl md:text-5xl" uppercase={false} colorClass="text-white font-iceland" className="font-bold m-2">LET&apos;S CONNECT!</Heading>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="p-2 rounded-full text-black w-64"
                required
              />
              <input
                type="text"
                placeholder="Your Message"
                name="message"
                value={user.message}
                onChange={handleChange}
                className="p-2 rounded-full text-black w-64"
                required
              />
              <button
                type="submit"
                className="cursor-target bg-cyan-600 text-white py-2 px-4 rounded-none"
              >
                SEND
              </button>
            </form>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-6 mb-1">
            <p>© AAVESH IIITU 2024</p>
            <div className="flex justify-center space-x-6 mb-1">
              {socials.map((social, id) => (
                <a
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex font-iceland items-center space-x-3 text-white hover:text-gray-400"
                  key={id}
                >
                  <div className="text-2xl">{social.icon}</div>
                </a>
              ))}
            </div>
            <p>
              <a href="/developers">Developed by <span className="text-cyan-600">@aavesh</span></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  id: PropTypes.string,
};

export default Footer;
