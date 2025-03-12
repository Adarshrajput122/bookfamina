import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import profileImage from '../img/profile.png';


function About() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 dark:text-white">
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-8 text-center mt-10">About Us</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Company</h2>
            <p className="text-lg">
              Welcome to Book Famina, where we strive to deliver the best products and services to our valued customers. Our company was founded in [Year] with a vision to innovate and inspire. Over the years, we have grown into a dynamic and reputable organization, committed to excellence and customer satisfaction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg">
              Our mission is to provide top-notch solutions that meet the evolving needs of our customers. We believe in the power of innovation, quality, and integrity. Our dedicated team works tirelessly to ensure that we exceed expectations in everything we do.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example team member */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
              <img src={profileImage} alt="Team Member" className="w-32 h-32 rounded-full mb-4" />

                <h3 className="text-xl font-semibold mb-2">Adarsh Raj</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
              {/* Add more team members as needed */}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-lg font-semibold mb-2">Email</p>
                <p>contact@yourcompany.com</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-lg font-semibold mb-2">Phone</p>
                <p>(123) 456-7890</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-lg font-semibold mb-2">Address</p>
                <p>123 Your Company St, City, State, ZIP</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default About;
