// import React, { useState } from 'react'
// import style from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className="bg-[#9DC8AE] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo Column */}
            <div>
              <img src="lovable-uploads/logo.png" alt="" />
            </div>

            {/* Navigation Column */}
            <div className="space-y-4">
              <nav className="flex flex-col gap-4">
                <a
                  href="/"
                  className="text-gray-800 hover:text-black transition-colors"
                >
                  Home
                </a>
                <a
                  href="/products"
                  className="text-gray-800 hover:text-black transition-colors"
                >
                  Products
                </a>
                <a
                  href="/about"
                  className="text-gray-800 hover:text-black transition-colors"
                >
                  About Us
                </a>
                <a
                  href="/ai-help"
                  className="text-gray-800 hover:text-black transition-colors"
                >
                  AI Help
                </a>
                <a
                  href="/community"
                  className="text-gray-800 hover:text-black transition-colors"
                >
                  Community
                </a>
              </nav>
            </div>

            {/* Contact Info Column */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Contact Us</h3>
                <p className="text-gray-800">+1 (234) 567 89 00</p>
              </div>

              <div>
                <p className="text-gray-800">
                  310 E 67th St, New York,
                  <br />
                  NY 10065, USA
                </p>
              </div>

              <div>
                <p className="text-gray-800">Monday - Saturday: 9 AM - 9 PM</p>
                <p className="text-gray-800">Sunday: 12 AM - 7 PM</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mt-12">
            <a
              href="#"
              className="text-gray-800 hover:text-black transition-colors"
            >
              <img
                src="lovable-uploads/twitter.svg"
                alt=""
                className="w-6 h-6"
              />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-black transition-colors"
            >
              <img
                src="lovable-uploads/Instagram.svg"
                alt=""
                className="w-6 h-6"
              />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-black transition-colors"
            >
              <img
                src="lovable-uploads/facebook.svg"
                alt=""
                className="w-6 h-6"
              />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-black transition-colors"
            >
              <img
                src="lovable-uploads/github.svg"
                alt=""
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
