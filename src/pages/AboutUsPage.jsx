// src/pages/AboutUsPage.jsx

import PageContent from "@/layout/PageContent";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function AboutUsPage() {
  return (
    <PageContent>
      <div className="font-monts">
        <section className="px-4 py-10 lg:py-16 lg:px-12 max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 space-y-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>About</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              ABOUT US
            </h2>
            <p className="text-gray-700 max-w-64">
              We know how large objects will act, but things on a small scale
            </p>
            <button className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition">
              Get Quote Now
            </button>
          </div>

          <div className="relative lg:w-1/2 flex justify-center">

            <img
              src="/images/about0.png"
              alt="Woman with shopping bags"
              className="relative max-w-[300px] lg:max-w-[500px] object-cover"
            />
          </div>
        </section>

        <section className="px-4 py-8 lg:px-12 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-red-500 font-semibold">Problem trying</h3>
            <h2 className="text-2xl lg:text-3xl font-bold">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h2>
            <p className="text-gray-600">
              Problem trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              Problem trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </section>

        <section className="px-4 py-8 lg:px-12 max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-3xl font-bold">15K</h4>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">150K</h4>
            <p className="text-gray-600">Monthly Visitors</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">15</h4>
            <p className="text-gray-600">Countries Worldwide</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">100+</h4>
            <p className="text-gray-600">Top Partners</p>
          </div>
        </section>

        <section className="px-4 py-8 lg:px-12 max-w-[1200px] mx-auto">
          <div className="w-full h-[220px] sm:h-[320px] lg:h-[400px] bg-gray-200 rounded-lg relative flex items-center justify-center overflow-hidden">
            <iframe
              className="absolute w-full h-full object-cover"
              width="1156"
              height="650"
              src="https://www.youtube.com/embed/jV6U7ZlPKEA"
              title="Chaos Chaos - Do You Feel It"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="mt-12 bg-[#F8F8F8]">
          <div className="max-w-[1200px] mx-auto px-4 text-center py-10 pb-24 flex flex-col gap-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">
              Big Companies Are Here
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>

            <div className="flex flex-wrap gap-14 justify-center items-center">
              <img
                src="images/about3.png"
                className="w-20 h-auto object-contain"
              />
              <img
                src="images/about4.png"
                className="w-16 h-auto object-contain"
              />
              <img
                src="images/about5.png"
                className="w-20 h-auto object-contain"
              />
              <img
                src="images/about6.png"
                className="w-16 h-auto object-contain"
              />
              <img
                src="images/about7.png"
                className="w-16 h-auto object-contain"
              />
              <img
                src="images/about8.png"
                className="w-16 h-auto object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="bg-blue-500 text-white px-8 py-12 flex flex-col justify-center text-center md:text-left items-center md:items-start">
              <p className="uppercase text-sm font-semibold mb-2">
                Work With Us
              </p>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Now Let’s grow Yours
              </h3>
              <p className="max-w-sm mb-6">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th
                century.
              </p>
              <button className="border border-white bg-transparent text-white px-5 py-2 max-w-52 rounded hover:bg-white hover:text-blue-500 transition">
                Button
              </button>
            </div>

            <div className="hidden md:block w-full h-full">
              <img
                src="images/about2.jpg"
                alt="Call to action"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </PageContent>
  );
}

export default AboutUsPage;
