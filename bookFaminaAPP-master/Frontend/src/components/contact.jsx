import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-slate-900 dark:text-white">
        <div className="container mx-auto px-4 py-6 sm:px-6 md:px-8 lg:px-12">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <form className="max-w-md">
            <div className="mb-4">
              <label className="block mb-2" htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-md resize-none"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;

