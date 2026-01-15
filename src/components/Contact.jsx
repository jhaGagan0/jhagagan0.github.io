import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [labelClass, setLabelClass] = useState("text-white");

  useEffect(() => {
    const updateLabelColor = () => {
      const isLightMode = document.body.classList.contains("light-mode");
      setLabelClass(isLightMode ? "text-dark" : "text-white");
    };

    updateLabelColor();
    const observer = new MutationObserver(updateLabelColor);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    emailjs
      .send("service_stpugjw", "template_68pytmo", templateParams, "LkxAc2y9P-671Jg_e")
      .then(
        () => {
          setSent(true);
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setSent(false), 3000);
        },
        (error) => {
          console.error("Email failed:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="container py-5">
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2 className={`mb-4 text-center ${labelClass}`}>Contact</h2>
        <p className="text-center">
          Feel free to mail me on <strong>gkjha1495@gmail.com</strong> to discuss collaborations or future opportunities 😊
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className={`form-label ${labelClass}`}>
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className={`form-label ${labelClass}`}>
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className={`form-label ${labelClass}`}>
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Hey Gagan! How are you? I wanna talk to you about..."
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>

          {sent && (
            <div className="mt-3 alert alert-success text-center">
              Message sent!
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
