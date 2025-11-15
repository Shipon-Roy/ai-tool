"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  // Scroll effect for background blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-500 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/20"
          : "bg-black/40 backdrop-blur-2xl border-b border-white/10"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">AI TOOL</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link href="#home" className="hover:text-pink-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="#feature" className="hover:text-pink-500 transition">
              Feature
            </Link>
          </li>
          <li>
            <Link href="#pricing" className="hover:text-pink-500 transition">
              Pricing
            </Link>
          </li>

          {/* Dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between w-full py-2 px-3 rounded font-medium text-gray-100 md:w-auto hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-purple-400"
            >
              Pages
              <svg
                className={`w-4 h-4 ml-1.5 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Items */}
            {isOpen && (
              <div className="absolute left-0 mt-2 z-20 bg-gray-900 border border-gray-700 rounded-lg w-44 shadow-lg">
                <ul className="p-2 text-sm text-gray-200 font-medium">
                  <li>
                    <Link
                      href="#"
                      className="block p-2 rounded hover:bg-gray-700 hover:text-white"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block p-2 rounded hover:bg-gray-700 hover:text-white"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block p-2 rounded hover:bg-gray-700 hover:text-white"
                    >
                      Earnings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block p-2 rounded hover:bg-gray-700 hover:text-white"
                    >
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li>
            <Link href="#support" className="hover:text-pink-500 transition">
              Supports
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/signin">
            <button className="px-4 py-2 rounded border border-white/40 text-white hover:bg-white/10 transition duration-300">
              Sign in
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 font-medium transition duration-300">
              Sign up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          {!open ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-black/80 backdrop-blur-lg">
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="#home"
                className="block text-white hover:text-pink-500 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#feature"
                className="block text-white hover:text-pink-500 transition"
              >
                Feature
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="block text-white hover:text-pink-500 transition"
              >
                Pricing
              </Link>
            </li>

            {/* Mobile Dropdown */}
            <li>
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex justify-between items-center w-full text-white hover:text-pink-500 transition"
              >
                Pages <span>{dropdown ? "▲" : "▼"}</span>
              </button>

              <ul
                className={`ml-4 mt-2 flex flex-col gap-2 text-gray-300 overflow-hidden transition-all duration-75 ${
                  dropdown ? "max-h-40" : "max-h-0"
                }`}
              >
                <li>
                  <Link href="#about">About</Link>
                </li>
                <li>
                  <Link href="#blog">Blog</Link>
                </li>
                <li>
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="#support"
                className="block text-white hover:text-pink-500 transition"
              >
                Supports
              </Link>
            </li>
          </ul>

          <div className="flex flex-col gap-3 mt-3">
            <Link href="/signin">
              <button className="px-4 py-2 border border-white/40 text-white rounded hover:bg-white/10 transition">
                Sign in
              </button>
            </Link>
            <Link href="/signup">
              <button className="  px-4 py-2 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 font-medium transition duration-300">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
