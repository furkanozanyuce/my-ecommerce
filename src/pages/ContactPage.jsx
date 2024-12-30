// ContactPage.jsx
import React, { useState } from "react";
import { Linkedin, Github, Twitter, Mail, Phone } from "lucide-react";
import PageContent from "@/layout/PageContent";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      return "All fields are required.";
    }
    // Simple email regex for validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setFormStatus({ submitting: false, success: null, error });
      return;
    }

    setFormStatus({ submitting: true, success: null, error: null });

    try {
      // Simulate form submission (Replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormStatus({
        submitting: false,
        success: "Your message has been sent successfully!",
        error: null,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setFormStatus({
        submitting: false,
        success: null,
        error: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <PageContent>
      <div className="flex font-monts items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat p-4" style={{ backgroundImage: `url('/images/signup-img.jpg')` }}>
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Information */}
            <div className="lg:w-1/2 bg-indigo-600 text-white p-8">
              <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
              <p className="mb-6">
                We'd love to hear from you! Whether you have a question about
                our services, pricing, or anything else, our team is ready to
                answer all your questions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-3" />
                  <a
                    href="mailto:contact@example.com"
                    className="hover:underline"
                  >
                    contact@example.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-3" />
                  <a href="tel:+1234567890" className="hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://www.linkedin.com/in/yourprofile/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2 p-8">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              {formStatus.success && (
                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
                  {formStatus.success}
                </div>
              )}
              {formStatus.error && (
                <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
                  {formStatus.error}
                </div>
              )}
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your message..."
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300 ${
                    formStatus.submitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageContent>
  );
}

export default ContactPage;
