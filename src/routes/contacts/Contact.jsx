import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import NavBar1 from "../Components/NavBar2";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Section, Form, BgCover, FontPrimary } from "./contact.styles.jsx";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !message || !name) {
      toast.error("All fields are required", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_cdms8wh";
    const templateId = "template_6c38mvr";
    const publicKey = "z7nl6Dwp7iQLzl-qv";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Web Wizard",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)

      .then((response) => {
        console.log("Email sent successfully!", response);
        toast.success("Successful Summited", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <BgCover>
      <Section className="bg-white font-primary">
        <div className="max-w-screen-md mx-auto p-8 space-y-8">
          <h1 className="text-4xl text-center font-extrabold text-gray-900">
            Contact Us
          </h1>
          <p className="text-2xl text-center  text-ligher-gray font-semibold">
            For more information about this project
          </p>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <div className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  required
                  className="block w-full rounded-lg shadow-sm bg-gray-50 border border-gray-300 focus-ring-primary-500 focus:border-primary-500"
                onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  required
                  className="block w-full rounded-lg shadow-sm bg-gray-50 border border-gray-300 focus-ring-primary-500 focus:border-primary-500"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  rows="4"
                  required
                  className="block w-full rounded-lg shadow-sm bg-gray-50 border border-gray-300 focus-ring-primary-500 focus:border-primary-500"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`block w-full rounded-lg shadow-sm bg-primaryColor text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor ${
                  isSending ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </Form>
        </div>
      </Section>
      <ToastContainer />
    </BgCover>
  );
};

export default Contact;
