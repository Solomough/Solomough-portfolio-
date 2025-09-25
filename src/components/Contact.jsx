import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-950 text-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
              Contact Information
            </h3>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-indigo-400" />
              <a
                href="mailto:zahemenmoughkaa@gmail.com"
                className="hover:text-indigo-300"
              >
                zahemenmoughkaa@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-400" />
              <a
                href="https://wa.me/2347076560169"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300"
              >
                WhatsApp: +234 707 656 0169
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-red-400" />
              <span>Dutse, Jigawa, Nigeria</span>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg mt-6">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.97941340182!2d9.3399!3d11.7435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b3d6a4dbb9adcd%3A0x63fd05b3507e9d9!2sDutse%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1695842149050!5m2!1sen!2sng"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-xl font-semibold mb-6 text-indigo-400">
              Send a Message
            </h3>
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition text-white py-3 rounded-xl font-semibold"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
