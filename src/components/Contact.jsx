import React, { useRef } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const { name, email, message } = form.current;
    if (!name.value || !email.value || !message.value) {
      alert("Please fill all the fields");
      return;
    }
    emailjs
      .sendForm(
        "service_g394pyh",
        "template_8x0xdll",
        form.current,
        "zUjD-z4-6fXi_ZvpN"
      )
      .then(
        () => console.log("Email sent"),
        (error) => console.error(error.text)
      );
    e.target.reset();
  };

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center gap-8">
          {/* ✨ Cards use var(--card-bg) for their background */}
          <div  className="p-6 rounded-lg">
            <h3 className="text-4xl font-semibold mb-5">
              About <span>Me</span>
            </h3>
            <p className="text-justify leading-7">
              Graduate student in Computer science with 2 years of valuable
              experience in Information Technology. Proven ability to work on
              complex tasks, combined with a strong academic foundation,
              demonstrates dedication to personal and professional
              development. Eager to leverage my skills and knowledge in a
              rigorous academic environment to contribute effectively to the
              program and advance my career goals.
            </p>

            <div className="flex mt-10 items-center gap-7">
              {[["8+", "Projects"], ["2", "Years experience"], ["4.00", "GPA"]].map(
                ([value, label]) => (
                  <div
                    key={label}
                    style={{ backgroundColor: "var(--card-bg)" }}
                    className="p-4 rounded-lg"
                  >
                    <h3 className="md:text-4xl text-2xl font-semibold">
                      {value}
                    </h3>
                    <p className="text-xs md:text-base">
                      <span>{label}</span>
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* ✏️ Form inputs & borders use var(--primary-color), var(--input-bg), var(--input-text) */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="max-w-6xl p-5 md:p-12 space-y-4 rounded-lg"
            style={{ backgroundColor: "var(--card-bg)" }}
          >
            <p className="font-bold text-xl mb-2">Let’s connect!</p>

            {[
              { type: "text",   name: "name",    placeholder: "Your Name …" },
              { type: "email",  name: "email",   placeholder: "Your Email …" },
            ].map(({ type, name, placeholder }) => (
              <input
                key={name}
                type={type}
                name={name}
                placeholder={placeholder}
                className="w-full rounded-md py-2 pl-2 pr-4"
                required
                style={{
                  border: "1px solid var(--primary-color)",
                  backgroundColor: "var(--input-bg)",
                  color: "var(--input-text)",
                }}
              />
            ))}

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message …"
              className="w-full rounded-md py-2 pl-2 pr-4"
              required
              style={{
                border: "1px solid var(--primary-color)",
                backgroundColor: "var(--input-bg)",
                color: "var(--input-text)",
              }}
            />

            <button
              type="submit"
              className="w-full py-3 rounded-md font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
