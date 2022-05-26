import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-white flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/60157c1b-7832-4304-9276-405d8086cffd"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="flex text-center justify-center text-7xl underline decoration-4 underline-offset-1 decoration-indigo-600 font-bold">
            Contact
          </p>
          <p className="hidden md:flex md:text-center md:justify-center md:py-5">
            // Preencha o form ou contact por email
          </p>
        </div>

        <input
          className="my-4 p-2 bg-white text-black drop-shadow-lg"
          type="text"
          placeholder="name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-white text-black drop-shadow-lg"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-white my-4 p-2
           text-black drop-shadow-lg"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="drop-shadow-lg hover:text-[#252525] border-2 hover:bg-indigo-600 hover:bg-indigo-600 hover:text-white px-4 py-3 mt-8 mx-auto flex items-center">
          Contactar!
        </button>
      </form>
    </div>
  );
};

export default Contact;
