// src/pages/ContactPage.jsx

import React from "react";
import PageContent from "@/layout/PageContent";
// Lucide icons
import { Phone, MapPin, Mail, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

function ContactPage() {
  return (
    <PageContent>
      <div className="font-monts">
        {/* 1) Hero Section */}
        <section className="max-w-[1200px] mx-auto px-4 py-10 lg:py-14 flex flex-col lg:flex-row items-center gap-10">
          {/* Left Side Text */}
          <div className="lg:w-1/2 space-y-4 text-black flex flex-col gap-2">
            <p className="uppercase text-sm font-semibold text-gray-500">
              Contact Us
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight max-w-80">
              Get in touch today!
            </h1>
            <p className="text-gray-700 max-w-64">
              We know how large objects will act, but things on a small scale
            </p>

            {/* Phone / Fax */}
            <div className="space-y-1 mt-4">
              <p className="font-bold text-lg">Phone: +451 215 215</p>
              <p className="font-bold text-lg">Fax: +451 215 215</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 items-center mt-3 text-black">
              {/* Tailwind placeholders for social icons: e.g. Twitter, Facebook, Instagram, LinkedIn */}
              <a href="#" className="hover:text-gray-700"><Twitter/></a>
              <a href="#" className="hover:text-gray-700"><Facebook/></a>
              <a href="#" className="hover:text-gray-700"><Instagram/></a>
              <a href="#" className="hover:text-gray-700"><Linkedin/></a>
            </div>
          </div>

          {/* Right Side with image + circles behind */}
          <div className="relative lg:w-1/2 flex justify-center">
            
            {/* Actual image */}
            <img
              src="/images/contact2.png"
              alt="Family with shopping bags"
              className="relative w-[280px] lg:w-[400px] object-cover"
            />
          </div>
        </section>

        {/* 2) Middle Office/Support Section */}
        <section className="max-w-[1200px] mx-auto px-4 py-10 text-center space-y-6">
          {/* Title / Subtitle */}
          <p className="uppercase text-sm font-semibold text-gray-400">
            Visit Our Office
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold max-w-96 items-center mx-auto">
            We help small businesses with big ideas
          </h2>

          {/* 3 column grid for contact cards (phone / location / email) */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Card 1: Phone */}
            <div className="flex flex-col items-center justify-center p-6 space-y-5 hover:shadow-lg transition">
              <Phone className="w-14 h-14 text-[#23A6F0]" />
              <div className="text-gray-600 text-sm">
                georgia.young@example.com
                <br />
                georgia.young@ple.com
              </div>
              <p className="mt-2 px-4 py-1 font-bold text-black">
                Get Support
              </p>
              <button className="mt-1 px-4 py-2 font-bold text-[#23A6F0] border border-[#23A6F0] rounded-full hover:bg-blue-500 hover:text-white transition">
                Submit Request
              </button>
            </div>

            {/* Card 2: MapPin (center) */}
            <div className="flex flex-col items-center justify-center bg-[#252B42] min-h-96 text-white p-6 space-y-5 hover:shadow-lg transition">
              <MapPin className="w-14 h-14 text-[#23A6F0]" />
              <div className="text-sm">
                georgia.young@example.com
                <br />
                georgia.young@ple.com
              </div>
              <p className="mt-2 px-4 py-1 font-bold text-white">
                Get Support
              </p>
              <button className="mt-1 px-4 py-2 font-bold border border-[#23A6F0] text-[#23A6F0] rounded-full hover:bg-blue-500 hover:text-white transition">
                Submit Request
              </button>
            </div>

            {/* Card 3: Mail */}
            <div className="flex flex-col items-center justify-center p-6 space-y-5 hover:shadow-lg transition">
              <Mail className="w-14 h-14 text-[#23A6F0]" />
              <div className="text-gray-600 text-sm">
                georgia.young@example.com
                <br />
                georgia.young@ple.com
              </div>
              <p className="mt-2 px-4 py-1 font-bold text-black">
                Get Support
              </p>
              <button className="mt-1 px-4 py-2 font-bold text-[#23A6F0] border border-[#23A6F0] rounded-full hover:bg-blue-500 hover:text-white transition">
                Submit Request
              </button>
            </div>
          </div>
        </section>

        {/* 3) Bottom CTA */}
        <section className="max-w-[1200px] mx-auto px-4 py-10 text-center space-y-4">
          <div className="flex flex-col items-center space-y-4">
          <img src="/images/arrow.png"/>
          <p className="uppercase text-sm font-semibold text-gray-800">
            We can't wait to meet you
          </p>
          <h3 className="text-5xl font-bold">Let's Talk</h3>
          <button className="mt-4 bg-[#23A6F0] text-white px-6 py-2 rounded hover:bg-blue-600 transition">
            Try it free now
          </button>
          </div>
        </section>
      </div>
    </PageContent>
  );
}

export default ContactPage;