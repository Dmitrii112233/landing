"use client";

import React, {
  useState,
  useCallback,
  ChangeEvent,
  FormEvent,
} from "react";
import {
  FiMapPin,
  FiPhone,
  FiClock,
  FiCalendar,
} from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SubmitStatus {
  success: boolean;
  message: string;
}

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(
      null
  );

  const handleChange = useCallback(
      (
          e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      },
      []
  );

  const handleSubmit = useCallback(
      async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
          const resp = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });

          if (!resp.ok) {
            throw new Error(`HTTP ${resp.status}`);
          }

          const result: {
            success: boolean;
            message: string;
            data?: { name: string; email: string; message: string };
          } = await resp.json();

          alert(
              `${result.message}\n\n` +
              `Name: ${result.data?.name}\n` +
              `Email: ${result.data?.email}\n` +
              `Message: ${result.data?.message}`
          );

          setSubmitStatus({ success: true, message: result.message });
          setFormData({ name: "", email: "", message: "" });
        } catch (err) {
          console.error(err);
          setSubmitStatus({
            success: false,
            message: "An error occurred. Please try again.",
          });
        } finally {
          setIsSubmitting(false);
        }
      },
      [formData]
  );

  return (
      <section
          id="contact"
          className="py-16 bg-gray-50 w-full"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-[#DF5950]">
                Get in touch!
              </h2>

              {submitStatus && (
                  <div
                      className={`mb-6 p-4 rounded-md ${
                          submitStatus.success
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                      }`}
                  >
                    {submitStatus.message}
                  </div>
              )}

              <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
              >
                <div>
                  <label
                      htmlFor="name"
                      className="block text-gray-700 mb-2"
                  >
                    Enter your Name
                  </label>
                  <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C89AFC]"
                  />
                </div>

                <div>
                  <label
                      htmlFor="email"
                      className="block text-gray-700 mb-2"
                  >
                    Enter a valid email address
                  </label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C89AFC]"
                  />
                </div>

                <div>
                  <label
                      htmlFor="message"
                      className="block text-gray-700 mb-2"
                  >
                    Enter your message
                  </label>
                  <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C89AFC]"
                  />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-lg text-white font-bold transition-colors ${
                        isSubmitting
                            ? "bg-[#C89AFC] cursor-not-allowed"
                            : "bg-[#DF5950] hover:bg-[#C89AFC]"
                    }`}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#DF5950]">
                Contact Information
              </h3>
              <div className="space-y-8">
                {[
                  {
                    icon: <FiMapPin className="text-white text-xl" />,
                    title: "ADDRESS",
                    lines: ["Chişinău Arena", "Chişinău, Moldova"],
                  },
                  {
                    icon: <FiPhone className="text-white text-xl" />,
                    title: "CALL US",
                    lines: ["+373 123 456 789", "+373 987 654 321"],
                  },
                  {
                    icon: <FiClock className="text-white text-xl" />,
                    title: "OPENING HOURS",
                    lines: ["Mon–Fri: 9 AM – 6 PM", "Sat–Sun: Closed"],
                  },
                  {
                    icon: <FiCalendar className="text-white text-xl" />,
                    title: "CONFERENCE DATE",
                    lines: ["July 30, 2025", "9:00 AM – 3:15 PM"],
                  },
                ].map(({ icon, title, lines }) => (
                    <div
                        key={title}
                        className="flex items-start"
                    >
                      <div className="bg-[#C89AFC] bg-opacity-20 p-3 rounded-full mr-4">
                        {icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          {title}
                        </h4>
                        {lines.map((l) => (
                            <p
                                key={l}
                                className="text-gray-600"
                            >
                              {l}
                            </p>
                        ))}
                      </div>
                    </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6 text-[#DF5950]">
                Our Location
              </h3>
              <div className="w-full h-118 rounded-lg overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2717.361534178003!2d28.859190512632633!3d47.072373471025564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97df515c66daf%3A0x8d08ef5dfdddd4a0!2zQ2hpyJlpbsSDdSBBcmVuYQ!5e0!3m2!1sen!2sus!4v1746087785132!5m2!1sen!2sus"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ContactFormSection;
