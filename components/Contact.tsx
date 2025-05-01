import React from 'react';

const ContactForm = () => {
  return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#DF5950' }}>
          Contact Us
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
                style={{ focusRingColor: '#C89AFC' }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
                style={{ focusRingColor: '#C89AFC' }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
                type="tel"
                id="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
                style={{ focusRingColor: '#C89AFC' }}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
                id="message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
                style={{ focusRingColor: '#C89AFC' }}
            ></textarea>
          </div>
          <button
              type="submit"
              className="w-full py-2 px-4 rounded-md text-white font-medium"
              style={{ backgroundColor: '#DF5950' }}
          >
            Send Message
          </button>
        </form>
      </div>
  );
};

export default ContactForm;