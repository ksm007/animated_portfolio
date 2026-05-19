import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { HiCheckCircle, HiEnvelope, HiExclamationCircle } from "react-icons/hi2";
import { SiDevpost } from "react-icons/si";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/kartik-marathe", Icon: AiOutlineLinkedin },
  { label: "GitHub", href: "https://github.com/ksm007", Icon: AiOutlineGithub },
  { label: "Devpost", href: "https://devpost.com/ksm007", Icon: SiDevpost },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setResult("Missing Web3Forms key. Set VITE_WEB3FORMS_ACCESS_KEY.");
      return;
    }

    setStatus("sending");
    setResult("Sending...");

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);
      formData.append("subject", "Portfolio contact form submission");
      formData.append("from_name", "Kartik Marathe Portfolio");
      formData.append("botcheck", "");

      const response = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: formData });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Message sent.");
        setForm({ name: "", email: "", message: "" });
        return;
      }

      setStatus("error");
      setResult(data.message || "Submission failed.");
    } catch (error) {
      console.error("Web3Forms submission failed:", error);
      setStatus("error");
      setResult("Something went wrong. Email me directly instead.");
    }
  };

  return (
    <section id="contact" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-shell p-6 sm:p-8">
            <p className="section-kicker">Contact</p>
            <h2 className="mt-4 text-[clamp(2.4rem,4vw,4rem)] font-semibold leading-[0.98] tracking-[-0.05em]" style={{ color: "var(--text-color)" }}>
              Hiring for an engineering role or building a startup that needs someone to own the <em style={{ color: "var(--primary-color)", fontFamily: "var(--font-display)" }}>build</em> end to end?
            </h2>
            <p className="mt-5 text-base leading-8" style={{ color: "var(--muted-copy)" }}>
              I am actively looking for software engineering opportunities across backend, full-stack, and applied AI, and I am especially interested in startup teams that value speed, ownership, and product clarity.
            </p>

            <div className="mt-8 space-y-3">
              <a href="mailto:kartiksmarathe@gmail.com" className="contact-link-card">
                <span className="inline-flex items-center gap-3">
                  <HiEnvelope className="text-primary-color" />
                  kartiksmarathe@gmail.com
                </span>
              </a>
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="contact-link-card">
                  <span className="inline-flex items-center gap-3">
                    <Icon className="text-primary-color" />
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="section-shell p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <HiCheckCircle className="text-5xl text-primary-color" />
                  <h3 className="mt-4 text-2xl font-semibold" style={{ color: "var(--text-color)" }}>
                    Message sent.
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-7" style={{ color: "var(--muted-copy)" }}>
                    Thanks for reaching out. I will get back to you as soon as I can.
                  </p>
                  <button type="button" className="secondary-button mt-6" onClick={() => setStatus("idle")}>
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="form-label">Name</label>
                    <input id="name" name="name" value={form.name} onChange={handleChange} className="contact-input" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className="contact-input" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="7"
                      value={form.message}
                      onChange={handleChange}
                      className="contact-input resize-none"
                      placeholder="Tell me what role you are hiring for, what startup you are building, or what product you need help shipping."
                    />
                  </div>
                  <button type="submit" disabled={status === "sending"} className="primary-button">
                    {status === "sending" ? "Sending..." : "Send message"}
                  </button>
                  {result && (
                    <p className="inline-flex items-center gap-2 text-sm" style={{ color: status === "error" ? "#dc2626" : "var(--muted-copy)" }}>
                      {status === "error" ? <HiExclamationCircle /> : <HiCheckCircle />}
                      {result}
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
