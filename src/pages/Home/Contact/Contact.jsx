
import emailjs from "@emailjs/browser";
import  { useRef } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          import.meta.env.VITE_F_KEY,
          import.meta.env.VITE_S_KEY,
          form.current,
          import.meta.env.VITE_T_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Email sent successfully");
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

  return (
    <div className="container mx-auto my-10 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
           
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Subject"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
          
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black text-white p-2 w-full rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Contact;
