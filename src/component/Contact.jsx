import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wd9n6nc",      // your service ID
        "template_ciy94yo",     // your template ID
        form.current,
        "pT2oo9Uq_1x0in1uw"     // your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4  relative">

      <div className="max-w-md mx-auto bg-[#0f172a]/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10">

        <h2 className="text-2xl font-semibold text-center text-white mb-8">
          Send a Message
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          <div>
            <label className="text-sm text-gray-300">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="xyz..."
              required
              className="w-full mt-2 p-3 rounded-lg bg-[#020617] border border-gray-700 text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="xyz@gmail.com"
              required
              className="w-full mt-2 p-3 rounded-lg bg-[#020617] border border-gray-700 text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Your Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Hello, I'd like to talk about..."
              required
              className="w-full mt-2 p-3 rounded-lg bg-[#020617] border border-gray-700 text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:opacity-90 transition"
          >
            Send Message ✈
          </button>

        </form>
      </div>

    </section>
  );
};