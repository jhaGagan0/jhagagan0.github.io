import { useEffect, useState } from "react";

const titles = ["Data Analyst", "Frontend Developer", "Problem Solver"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[index % titles.length];
    const typeSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentTitle.substring(0, prev.length - 1)
          : currentTitle.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <section
      id="hero"
      className="d-flex flex-column align-items-center justify-content-start vh-100 px-3 text-center pt-3"
      style={{ overflow: "hidden" }}
    >
      <h1 className="display-3 mb-3">Hi, I'm Gagan</h1>
      <div className="mb-3" style={{ marginTop: "0.01px" }}>
        <img
          src="https://i.postimg.cc/4dLv6p72/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313136323037372f73637265656e73686f7473.gif"
          alt="Girl coding"
          style={{ maxHeight: "300px", maxWidth: "100%", borderRadius: "10px" }}
        />
      </div>

      <p className="lead mb-2">
        I'm a{" "}
        <span style={{ fontSize: "1.8rem", color: "#fbd1a2", fontWeight: "bold" }}>
          {displayText}
        </span>
      </p>
      <p className="mb-2">
        Passionate about Data analysis and Data science and solving challenging problems through code.
      </p>
      <div>
        <a href="#about" className="btn btn-primary me-3">
          About Me
        </a>
        <a
          href="https://drive.google.com/file/d/1jZoVb_jvsuY2UQgii2agQ0TiSEYTWRl6/view?usp=sharing"
          className="btn btn-outline-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <div style={{ marginBottom: "2rem" }}></div>
      </div>
      <div style={{ marginBottom: "12rem" }}></div>
    </section>
  );
}
