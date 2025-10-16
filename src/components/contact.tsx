"use client";

import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [failedMailClient, setfailedMailClient] = useState(false);

  const contact_input =
    "outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-300 placeholder-gray-500 transition-all focus:border-[#10b981]/70 focus:text-[#10b981] hover:border-[#10b981]/40";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email address";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const mailtoLink = `mailto:vikas.verma.work@outlook.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;
    window.open(mailtoLink);

    window.location.href = mailtoLink;

    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => {
      setfailedMailClient(true);
    }, 1500);
    setTimeout(() => {
      setfailedMailClient(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 w-full md:w-auto">
        <h4 className="text-4xl font-semibold text-center">
          I’ve got just what you need — Let’s Talk
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-between">
            <FaPhoneAlt className="text-[#10b981] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+91-8800271049</p>
          </div>

          <div className="flex items-center space-x-5 justify-between">
            <FaEnvelope className="text-[#10b981] h-7 w-7 animate-pulse" />
            <p className="text-2xl">vikas.verma.work@outlook.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-between">
            <FaMapMarkedAlt className="text-[#10b981] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Delhi, India</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-2 w-fit mx-auto mt-8"
        >
          <div className="flex space-x-2">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={contact_input}
              />
              {errors.name && (
                <span className="text-red-500 text-xs mt-1">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={contact_input}
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className={contact_input}
            />
            {errors.subject && (
              <span className="text-red-500 text-xs mt-1">
                {errors.subject}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <textarea
              placeholder="Message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className={contact_input}
            />
            {errors.message && (
              <span className="text-red-500 text-xs mt-1">
                {errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#10b981] py-4 px-10 rounded-md text-black font-bold text-lg hover:bg-[#14cc9e] transition"
          >
            Submit
          </button>

          {submitted && (
            <p className="text-[#10b981] text-center font-semibold mt-2">
              {!failedMailClient
                ? "Redirecting to your email app..."
                : "Mail client didn't open? Please try to send email directly."}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
