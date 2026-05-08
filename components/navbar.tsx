"use client";

import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-slate-900 text-slate-100 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100/5 ring-1 ring-slate-800 flex items-center justify-center">
                  <span className="text-white font-semibold tracking-tight">
                    a
                  </span>
                </div>
                <span className="hidden sm:inline-block font-semibold text-lg tracking-tight">
                  anvist
                </span>
              </Link>
            </div>

            {/* Center: Links (desktop) */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link
                href="/products"
                className="text-slate-200 hover:text-white transition-colors"
              >
                Products
              </Link>
              <Link
                href="/services"
                className="text-slate-200 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="/solution"
                className="text-slate-200 hover:text-white transition-colors"
              >
                Solution
              </Link>
              <Link
                href="/support"
                className="text-slate-200 hover:text-white transition-colors"
              >
                Support
              </Link>
              <Link
                href="/career"
                className="text-slate-200 hover:text-white transition-colors"
              >
                Career
              </Link>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-b from-slate-800 to-slate-900 ring-1 ring-slate-700 hover:from-slate-700 hover:to-slate-800 transition-colors"
              >
                <span className="text-slate-100 font-medium">Contact us</span>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label="Toggle navigation"
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:bg-slate-800 md:hidden"
              >
                {open ? (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`md:hidden transition-[max-height,opacity] duration-200 ease-out overflow-hidden ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-4 border-t border-slate-800 bg-slate-900">
            <Link
              href="/products"
              className="block text-slate-200 py-2 rounded-md hover:bg-slate-800 px-3"
            >
              Products
            </Link>
            <Link
              href="/services"
              className="block text-slate-200 py-2 rounded-md hover:bg-slate-800 px-3"
            >
              Services
            </Link>
            <Link
              href="/solution"
              className="block text-slate-200 py-2 rounded-md hover:bg-slate-800 px-3"
            >
              Solution
            </Link>
            <Link
              href="/support"
              className="block text-slate-200 py-2 rounded-md hover:bg-slate-800 px-3"
            >
              Support
            </Link>
            <Link
              href="/career"
              className="block text-slate-200 py-2 rounded-md hover:bg-slate-800 px-3"
            >
              Career
            </Link>

            <div className="pt-2">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-2 rounded-lg bg-gradient-to-b from-slate-800 to-slate-900 ring-1 ring-slate-700"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
