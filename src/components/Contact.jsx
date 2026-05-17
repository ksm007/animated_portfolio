import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { SiDevpost } from "react-icons/si";
import { HiArrowUpRight, HiCheckCircle } from "react-icons/hi2";
import { HiExclamationCircle } from "react-icons/hi";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "973916b1-b29f-4ab1-81bc-cbfa940480c8";

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/kartik-marathe",
    Icon: AiOutlineLinkedin,
  },
  { label: "GitHub", href: "https://github.com/ksm007", Icon: AiOutlineGithub },
  { label: "Devpost", href: "https://devpost.com/ksm007", Icon: SiDevpost },
];

const inputStyle = {
  backgroundColor:
    "color-mix(in srgb, var(--primary-color) 5%, var(--card-bg))",
  border: "1px solid var(--card-border)",
  color: "var(--text-color)",
  borderRadius: "0.75rem",
  padding: "0.75rem 1rem",
  width: "100%",
  fontSize: "0.9375rem",
  outline: "none",
  transition: "border-color 0.2s",
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [result, setResult] = useState("");
  const [focused, setFocused] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    setResult("Sending...");

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Form submitted successfully.");
        setForm({ name: "", email: "", message: "" });
        return;
      }

      setStatus("error");
      setResult(data.message || "Submission failed.");
    } catch (error) {
      console.error("Web3Forms submission failed:", error);
      setStatus("error");
      setResult("Something went wrong. You can email directly instead.");
    }
  };

  const getBorderColor = (field) =>
    focused === field
      ? "color-mix(in srgb, var(--primary-color) 60%, transparent)"
      : "var(--card-border)";

  return (
    <section id="contact" className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span
            className="font-mono text-sm lg:text-base"
            style={{ color: "var(--primary-color)" }}
          >
            05.
          </span>
          <h2
            className="text-2xl lg:text-3xl font-bold"
            style={{ color: "var(--text-color)" }}
          >
            Get In Touch
          </h2>
          <div
            className="flex-1 h-px max-w-xs"
            style={{ backgroundColor: "var(--card-border)" }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* ── Left: blurb + socials ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3
              className="text-2xl lg:text-3xl font-bold leading-snug"
              style={{ color: "var(--text-color)" }}
            >
              Open to internships, roles, and interesting collaborations
              <span style={{ color: "var(--primary-color)" }}>
                {" "}
                that care about clarity and execution.
              </span>
            </h3>

            <p
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: "var(--text-color)", opacity: 0.72 }}
            >
              Whether it&apos;s a backend system, a full-stack product, or an applied
              AI project, if it&apos;s ambitious and meaningful, I&apos;d love to hear
              about it. Send a message and I&apos;ll get back to you promptly.
            </p>

            {/* Interest tiles */}
            <div className="grid grid-cols-3 gap-3">
              {[
                ["Backend", "Platforms & APIs"],
                ["Frontend", "Product UI"],
                ["AI/ML", "Applied tools"],
              ].map(([title, sub]) => (
                <motion.div
                  key={title}
                  whileHover={{ scale: 1.04, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  className="rounded-xl p-4 text-center"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                  }}
                >
                  <p
                    className="text-base font-bold mb-0.5"
                    style={{ color: "var(--primary-color)" }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-color)", opacity: 0.55 }}
                  >
                    {sub}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="space-y-3 pt-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "color-mix(in srgb, var(--primary-color) 40%, transparent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--card-border)";
                  }}
                >
                  <span
                    className="flex items-center gap-3 font-medium text-sm"
                    style={{ color: "var(--text-color)" }}
                  >
                    <Icon
                      className="text-xl"
                      style={{ color: "var(--primary-color)" }}
                    />
                    {label}
                  </span>
                  <HiArrowUpRight
                    size={15}
                    style={{ color: "var(--text-color)", opacity: 0.35 }}
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: form ───────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                /* ── Success state ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center rounded-2xl p-12 gap-5"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border:
                      "1px solid color-mix(in srgb, var(--primary-color) 30%, transparent)",
                    minHeight: "380px",
                  }}
                >
                  <HiCheckCircle
                    size={52}
                    style={{ color: "var(--primary-color)" }}
                  />
                  <h4
                    className="text-xl font-bold"
                    style={{ color: "var(--text-color)" }}
                  >
                    Message sent!
                  </h4>
                  <p
                    className="text-sm leading-relaxed max-w-xs"
                    style={{ color: "var(--text-color)", opacity: 0.65 }}
                  >
                    Thanks for reaching out. I&apos;ll get back to you at your email
                    address as soon as I can.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="font-mono text-xs font-semibold border rounded px-4 py-2 mt-2 transition-all duration-200"
                    style={{
                      color: "var(--primary-color)",
                      borderColor: "var(--primary-color)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "color-mix(in srgb, var(--primary-color) 10%, transparent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                /* ── Form ── */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl p-6 sm:p-8 space-y-5"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                  }}
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-[0.14em] mb-2"
                      style={{ color: "var(--primary-color)" }}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused("")}
                      style={{
                        ...inputStyle,
                        borderColor: getBorderColor("name"),
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-[0.14em] mb-2"
                      style={{ color: "var(--primary-color)" }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused("")}
                      style={{
                        ...inputStyle,
                        borderColor: getBorderColor("email"),
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-[0.14em] mb-2"
                      style={{ color: "var(--primary-color)" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What's on your mind?"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused("")}
                      style={{
                        ...inputStyle,
                        borderColor: getBorderColor("message"),
                        resize: "vertical",
                        minHeight: "120px",
                      }}
                    />
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <div
                      className="flex items-center gap-2 text-sm rounded-lg px-4 py-3"
                      style={{
                        backgroundColor: "rgba(239,68,68,0.1)",
                        border: "1px solid rgba(239,68,68,0.3)",
                        color: "#f87171",
                      }}
                    >
                      <HiExclamationCircle size={18} />
                      {result || "Something went wrong. Try emailing me directly."}
                    </div>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={status !== "sending" ? { y: -2 } : {}}
                    whileTap={status !== "sending" ? { scale: 0.97 } : {}}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm lg:text-base transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: "var(--primary-color)",
                      color: "var(--bg-color)",
                    }}
                  >
                    {status === "sending" ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>

                  {status !== "error" && result ? (
                    <p
                      className="text-center text-sm"
                      style={{
                        color:
                          status === "success"
                            ? "var(--primary-color)"
                            : "var(--text-color)",
                        opacity: status === "success" ? 1 : 0.65,
                      }}
                    >
                      {result}
                    </p>
                  ) : null}

                  <p
                    className="text-center text-xs"
                    style={{ color: "var(--text-color)", opacity: 0.4 }}
                  >
                    Or email directly:{" "}
                    <a
                      href="mailto:kartiksmarathe@gmail.com"
                      className="transition-colors duration-200"
                      style={{ color: "var(--text-color)", opacity: 0.7 }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--primary-color)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-color)")
                      }
                    >
                      kartiksmarathe@gmail.com
                    </a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
