"use client";

import { useState, useEffect } from "react";
import {
  ShoppingCart,
  Heart,
  ScanLine,
  Menu,
  X,
  User,
  LogOut,
} from "lucide-react";

export default function NavbarAfterAuth() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4 transition-all duration-300">
        {/* Left Icons */}
        <div className="hidden md:flex items-center gap-4">
          {[
            { icon: <ShoppingCart size={20} />, text: "Cart" },
            { icon: <Heart size={20} />, text: "Wishlist" },
            { icon: <ScanLine size={20} />, text: "Scanner" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 cursor-pointer transform transition-transform hover:scale-105"
            >
              <div className="p-2 bg-[#2E5B41] text-white rounded-full">
                {item.icon}
              </div>
              <span className="text-gray-700 font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Center Logo */}
        <div className="flex items-center transition-transform duration-300 hover:scale-110">
          <img
            src="lovable-uploads/logo.png"
            alt="Grovana Logo"
            className="h-12 md:h-16"
          />
        </div>

        {/* Right Navigation */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-semibold">
          {["Home", "Shop", "About Us", "AI Help", "Community","review"].map(
            (item, index) => (
              <a
                key={index}
                href=   {item}
                className={`block py-2 text-lg transform transition-transform hover:scale-105 ${
                  item === "Home"
                    ? "text-green-700 font-bold"
                    : "hover:text-green-700"
                }`}
              >
                {item}
              </a>
            )
          )}

          {/* User Avatar & Dropdown */}
          <div className="relative">
            <img
              src="lovable-uploads/AiScaner.jpg"
              alt="User"
              className="w-10 h-10 rounded-full object-cover cursor-pointer transition-transform hover:scale-110"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 transition"
                >
                  <User size={18} /> Profile
                </a>
                <button className="flex w-full items-center gap-3 px-4 py-3 text-red-600 hover:bg-gray-100 transition">
                  <LogOut size={18} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 transition-transform hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md overflow-hidden transition-all duration-500 ${
          isOpen ? "opacity-100 scale-y-100 h-auto" : "opacity-0 scale-y-0 h-0"
        } origin-top`}
      >
        <div className="flex flex-col items-center py-4 space-y-3">
          {["Home", "Shop", "About Us", "AI Help", "Community"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className={`block py-2 text-lg transition-transform hover:scale-105 ${
                  item === "Home"
                    ? "text-green-700 font-bold"
                    : "hover:text-green-700"
                }`}
              >
                {item}
              </a>
            )
          )}

          {/* Mobile User Avatar & Dropdown */}
          <div className="relative flex flex-col items-center w-full">
            <img
              src="lovable-uploads/AiScaner.jpg"
              alt="User"
              className="w-12 h-12 rounded-full object-cover cursor-pointer mt-3 transition-transform hover:scale-110"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />

            {/* Mobile Dropdown Menu - Styled to match mobile layout */}
            {isDropdownOpen && (
              <div className="mt-3 w-[90%] bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 text-center">
                <a
                  href="#"
                  className="block py-3 text-gray-700 text-lg font-medium hover:bg-gray-100 transition"
                >
                  Profile
                </a>
                <button className="block w-full py-3 text-lg font-medium text-red-600 hover:bg-gray-100 transition">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
