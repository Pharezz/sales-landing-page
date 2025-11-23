import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isActive, setIsActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-5 max-w-7xl mx-auto px-5 text-lg">
        {/* Logo */}
        <a href="#hero" className="text-black font-semibold">
          Your Logo
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {[
            { name: "Product", id: "product" },
            { name: "Features", id: "features" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition ${
                isActive === item.id ? "text-blue-700" : "text-gray-700"
              }`}
              onClick={() => setIsActive(item.id)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Buy Button */}
        <button className="hidden md:block px-7 py-2 rounded-2xl bg-red-600 text-white cursor-pointer hover:bg-gray-700 transition-all duration-500 ease-in-out ">
          Buy it Now
        </button>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32}/> : <Menu size={32}/>}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 py-4 shadow-lg" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6">
          {[
            { name: "Product", id: "product" },
            { name: "Features", id: "features" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-lg ${
                isActive === item.id ? "text-blue-700" : "text-gray-700"
              }`}
              onClick={() => {
                setIsActive(item.id);
                setMenuOpen(false);
              }}
            >
              {item.name}
            </a>
          ))}

          <button className="mt-3 px-6 py-3 rounded-2xl bg-red-600 text-white w-full">
            Click to Buy it Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
