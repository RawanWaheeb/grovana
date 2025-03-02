import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when the mobile menu is open
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-3 lg:px-8">
        {/* Logo */}
        <div className="flex w-1/4">
          <a href="/" className="lg:pe-40 xl:pe-80 whitespace-nowrap">
            <img src="lovable-uploads/logo.png" width={200} alt="Logo" />
          </a>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex lg:gap-x-12 w-1/2 justify-center capitalize">
          {["home", "shop", "about_us", "ai_help", "content", "community","review"].map(
            (page) => (
              <a
                key={page}
                href={`#${page}`}
                onClick={() => setActive(page)}
                className={`text-lg px-4 py-2 transition ${
                  active === page
                    ? "text-[#2E5B41]"
                    : "text-black hover:text-[#2E5B41]"
                }`}
              >
                {page.replace("_", " ")}
              </a>
            )
          )}
        </div>

        {/* Login Button (Desktop) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end w-1/4">
          <a
            href="/login"
            className="bg-white text-black px-6 py-2 border-2 border-[#2E5B41] rounded-full text-lg hover:bg-[#2E5B41] hover:text-white transition-colors duration-300"
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div onClick={() => setIsOpen(true)} className="lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 bg-gray hover:bg-gray-100"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 z-50 w-4/5 bg-white transition-transform duration-300 shadow-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <a href="/" className="block">
            <img src="lovable-uploads/logo.png" width={150} alt="Logo" />
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4 px-6 space-y-4">
          {["Home", "Shop", "About Us", "AI Help", "Content", "Community"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "_")}`}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="block font-bold text-lg text-black hover:text-[#2E5B41] transition-colors duration-200"
              >
                {item}
              </a>
            )
          )}
          <a
            href="/login"
            onClick={() => setIsOpen(false)} // Close menu on click
            className="block font-bold text-lg text-black hover:text-[#2E5B41] transition-colors duration-200"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
