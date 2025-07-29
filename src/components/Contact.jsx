import React, { useRef, useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    const { name, email, message } = form.current;
    if (!name.value || !email.value || !message.value) {
      setSubmitStatus({
        success: false,
        message: "Please fill all the fields",
      });
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        "service_g394pyh",
        "template_8x0xdll",
        form.current,
        "zUjD-z4-6fXi_ZvpN"
      )
      .then(
        () => {
          setSubmitStatus({
            success: true,
            message: "Message sent successfully!",
          });
          e.target.reset();
        },
        (error) => {
          setSubmitStatus({
            success: false,
            message: "Failed to send message. Please try again.",
          });
          console.error(error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="px-6 py-16 md:py-24 max-w-[1000px] mx-auto" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-3xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h3>
            <p className="text-lg leading-relaxed mb-8 text-main">
              Graduate student in Computer science with 2 years of valuable
              experience in Information Technology. Proven ability to work on
              complex tasks, combined with a strong academic foundation,
              demonstrates dedication to personal and professional development.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                ["8+", "Projects"],
                ["2", "Years"],
                ["4.00", "GPA"],
              ].map(([value, label]) => (
                <motion.div
                  key={label}
                  className="card text-center p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h4 className="text-2xl md:text-3xl font-bold text-primary">
                    {value}
                  </h4>
                  <p className="text-sm md:text-base text-main">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="card space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Let's <span className="text-primary">Connect!</span>
            </h3>

            {[
              { type: "text", name: "name", placeholder: "Your Name" },
              { type: "email", name: "email", placeholder: "Your Email" },
            ].map(({ type, name, placeholder }) => (
              <div key={name} className="relative">
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-primary/30 focus:border-primary focus:outline-none transition-colors duration-200 text-main"
                  required
                />
              </div>
            ))}

            <div className="relative">
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-primary/30 focus:border-primary focus:outline-none transition-colors duration-200 resize-none text-main"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:bg-hover-color transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {submitStatus && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center ${
                  submitStatus.success ? "text-success" : "text-destructive"
                }`}
              >
                {submitStatus.message}
              </motion.p>
            )}
          </motion.form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
