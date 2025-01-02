import React from "react";
import PageContent from "@/layout/PageContent";
import {
  Phone,
  MapPin,
  Mail,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { toast } from "react-toastify";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function ContactPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Your message has been sent successfully!", {
      autoClose: 2000,
    });
  };

  return (
    <PageContent>
      <div className="font-monts">
        {/* 1) Hero Section */}
        <section className="max-w-[1200px] mx-auto px-4 py-10 lg:py-14 flex flex-col lg:flex-row items-center gap-10">
          {/* Left Side Text */}
          <div className="lg:w-1/2 space-y-4 text-black flex flex-col gap-2">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Contact</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
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
              <a href="#" className="hover:text-gray-700">
                <Twitter />
              </a>
              <a href="#" className="hover:text-gray-700">
                <Facebook />
              </a>
              <a href="#" className="hover:text-gray-700">
                <Instagram />
              </a>
              <a href="#" className="hover:text-gray-700">
                <Linkedin />
              </a>
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
              <p className="mt-2 px-4 py-1 font-bold text-black">Get Support</p>
              <Sheet>
                <SheetTrigger asChild>
                  <button className="mt-1 px-4 py-2 font-bold text-[#23A6F0] border border-[#23A6F0] rounded-full hover:bg-blue-500 hover:text-white transition">
                    Submit Request
                  </button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Get in Touch</SheetTitle>
                    <SheetDescription>
                      We'd love to hear from you! Whether you have a question
                      about our services, pricing, or anything else, our team is
                      ready to answer all your questions.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 mb-2"
                      >
                        Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="px-3 min-w-60 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 mb-2"
                      >
                        Email<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        className="w-full px-3 min-w-60 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label
                        htmlFor="subject"
                        className="block text-gray-700 mb-2"
                      >
                        Subject<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        className="w-full px-3 min-w-60 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 mb-2"
                      >
                        Message<span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Your message..."
                        className="w-full px-3 min-w-60 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <button
                        onClick={handleSubmit}
                        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
                      >
                        Send Message
                      </button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>

            {/* Card 2: MapPin (center) */}
            <div className="flex flex-col items-center justify-center bg-[#252B42] min-h-96 text-white p-6 space-y-5 hover:shadow-lg transition">
              <MapPin className="w-14 h-14 text-[#23A6F0]" />
              <div className="text-sm">
                georgia.young@example.com
                <br />
                georgia.young@ple.com
              </div>
              <p className="mt-2 px-4 py-1 font-bold text-white">Get Support</p>
              <Sheet>
                <SheetTrigger asChild>
                  <button className="mt-1 px-4 py-2 font-bold border border-[#23A6F0] text-[#23A6F0] rounded-full hover:bg-blue-500 hover:text-white transition">
                    Submit Request
                  </button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Get in Touch</SheetTitle>
                    <SheetDescription>
                      We'd love to hear from you! Whether you have a question
                      about our services, pricing, or anything else, our team is
                      ready to answer all your questions.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 mb-2"
                      >
                        Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="px-3 min-w-60 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 mb-2"
                      >
                        Email<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        className="w-full px-3 min-w-60 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label
                        htmlFor="subject"
                        className="block text-gray-700 mb-2"
                      >
                        Subject<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        className="w-full px-3 min-w-60 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 mb-2"
                      >
                        Message<span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Your message..."
                        className="w-full px-3 min-w-60 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <button
                        onClick={handleSubmit}
                        className="w-full py-2 px-4 bg-[#23A6F0] text-white rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                      >
                        Send Message
                      </button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>

            {/* Card 3: Mail */}
            <div className="flex flex-col items-center justify-center p-6 space-y-5 hover:shadow-lg transition">
              <Mail className="w-14 h-14 text-[#23A6F0]" />
              <div className="text-gray-600 text-sm">
                georgia.young@example.com
                <br />
                georgia.young@ple.com
              </div>
              <p className="mt-2 px-4 py-1 font-bold text-black">Get Support</p>
              <Sheet>
                <SheetTrigger asChild>
                  <button className="mt-1 px-4 py-2 font-bold text-[#23A6F0] border border-[#23A6F0] rounded-full hover:bg-blue-500 hover:text-white transition">
                    Submit Request
                  </button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Get in Touch</SheetTitle>
                    <SheetDescription>
                      We'd love to hear from you! Whether you have a question
                      about our services, pricing, or anything else, our team is
                      ready to answer all your questions.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 mb-2"
                      >
                        Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="px-3 min-w-60 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 mb-2"
                      >
                        Email<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        className="w-full px-3 min-w-60 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label
                        htmlFor="subject"
                        className="block text-gray-700 mb-2"
                      >
                        Subject<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        className="w-full px-3 min-w-60 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 mb-2"
                      >
                        Message<span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Your message..."
                        className="w-full px-3 min-w-60 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <button
                        onClick={handleSubmit}
                        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
                      >
                        Send Message
                      </button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </section>

        {/* 3) Bottom CTA */}
        <section className="max-w-[1200px] mx-auto px-4 py-10 text-center space-y-4">
          <div className="flex flex-col items-center space-y-4">
            <img src="/images/arrow.png" />
            <p className="uppercase text-sm font-semibold text-gray-800">
              We can't wait to meet you
            </p>
            <h3 className="text-5xl font-bold">Let's Talk</h3>

            <Sheet>
              <SheetTrigger asChild>
                <button className="mt-4 bg-[#23A6F0] text-white px-6 py-2 rounded hover:bg-blue-600 transition">
                  Try it free now
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Get in Touch</SheetTitle>
                  <SheetDescription>
                    We'd love to hear from you! Whether you have a question
                    about our services, pricing, or anything else, our team is
                    ready to answer all your questions.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="px-3 min-w-60 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      className="w-full px-3 min-w-60 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 mb-2"
                    >
                      Subject<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      className="w-full px-3 min-w-60 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-2"
                    >
                      Message<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Your message..."
                      className="w-full px-3 min-w-60 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    ></textarea>
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <button
                      onClick={handleSubmit}
                      className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </section>
      </div>
    </PageContent>
  );
}

export default ContactPage;
