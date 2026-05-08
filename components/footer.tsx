"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Newsletter / Top */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-slate-800 pb-8">
          <div className="max-w-xl">
            <h3 className="text-lg font-semibold text-slate-100">
              Stay updated with the latest news, promotions, and exclusive
              offers.
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Get curated updates and product announcements — no spam.
            </p>
          </div>

          <form
            className="flex items-center gap-3 justify-start lg:justify-end w-full lg:w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="enter your email"
              className="w-full lg:w-80 bg-slate-800 border border-slate-800/60 placeholder-slate-500 text-slate-100 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-700"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-to-b from-slate-800 to-slate-900 px-4 py-2 text-sm font-medium text-slate-100 ring-1 ring-slate-700 hover:from-slate-700 hover:to-slate-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 py-10">
          {/* Brand / CTA */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-100/5 ring-1 ring-slate-800 flex items-center justify-center">
                <span className="text-white font-semibold tracking-tight">
                  a
                </span>
              </div>
              <span className="text-xl font-semibold tracking-tight hidden sm:inline-block">
                anvist
              </span>
            </Link>

            <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-slate-100 leading-tight">
              Begin your path to success — contact us today.
            </h2>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-emerald-400/10 text-emerald-300 px-6 py-3 font-medium ring-1 ring-emerald-700/20 hover:bg-emerald-400/20 transition"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Links columns */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold text-slate-300">Company</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                href="/"
                className="text-slate-400 hover:text-slate-200 transition"
              >
                Home
              </Link>
              <Link
                href="/career"
                className="text-slate-400 hover:text-slate-200 transition"
              >
                Career
              </Link>
              <Link
                href="/about"
                className="text-slate-400 hover:text-slate-200 transition"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-slate-400 hover:text-slate-200 transition"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold text-slate-300">Explore</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                href="/products"
                className="text-slate-400 hover:text-slate-200 transition"
              >
                Products
              </Link>
              <Link
                href="/services"
                className="text-slate-400 hover:text-slate-200 transition"
              >
                Services
              </Link>
              <Link
                href="/solution"
                className="text-slate-400 hover:text-slate-200 transition"
              >
                Solution
              </Link>
              <Link
                href="/support"
                className="text-slate-400 hover:text-slate-200 transition"
              >
                Support
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 mt-6 border-t border-slate-800 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-sm text-slate-400">
            ©{new Date().getFullYear()} Anvist Systems. All Rights Reserved
          </p>

          <div className="flex items-center gap-4">
            <nav className="hidden sm:flex gap-4">
              <Link
                href="/privacy"
                className="text-sm text-slate-400 hover:text-slate-200 transition"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-slate-400 hover:text-slate-200 transition"
              >
                Terms
              </Link>
              <Link
                href="/faqs"
                className="text-sm text-slate-400 hover:text-slate-200 transition"
              >
                FAQs
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              {/* simple social icons */}
              <Link
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-md hover:bg-slate-800 transition text-slate-300"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M23 4.5a9.1 9.1 0 01-2.6.7 4.5 4.5 0 00-7.6 4.1A12.8 12.8 0 013 3.9a4.5 4.5 0 001.4 6 4.4 4.4 0 01-2-.6v.1a4.5 4.5 0 003.6 4.4 4.6 4.6 0 01-2 .1 4.5 4.5 0 004.2 3.1A9 9 0 012 19.5a12.8 12.8 0 006.9 2" />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="GitHub"
                className="p-2 rounded-md hover:bg-slate-800 transition text-slate-300"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1 1.7.7 2.1 1 .2-.8.5-1.4.9-1.7-2.7-.3-5.6-1.4-5.6-6 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3 0 0 1-.3 3.2 1.2a11 11 0 015.8 0C18 4.9 19 5.2 19 5.2c.6 1.5.2 2.7.1 3 .8.8 1.2 1.8 1.2 3 0 4.6-2.9 5.6-5.7 5.9.6.5 1.1 1.4 1.1 2.9v4.3c0 .3.2.6.8.5A12 12 0 0012 .5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
