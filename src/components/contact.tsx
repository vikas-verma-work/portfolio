import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { handleContactForm } from "@/actions/contactAction";

function Contact() {
  const contact_input =
    "outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#10b981]/40 focus:text-[#10b981]/40 hover:border-[#10b981]/40";

  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need. Lets Talk
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
          action={handleContactForm}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className={contact_input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className={contact_input}
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className={contact_input}
          />
          <textarea
            placeholder="Message"
            name="message"
            className={contact_input}
          />
          <button
            type="submit"
            className="bg-[#10b981] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
