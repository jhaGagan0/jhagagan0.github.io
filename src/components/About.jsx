export default function About() {
  return (
    <section id="about" className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 text-center mb-4">
          <h2 className="mb-0" style={{ fontSize: "2.5rem" }}>About Me</h2>
        </div>

        <div className="col-md-5 order-1 order-md-0 mb-4 mb-md-0 d-flex justify-content-center">
          <img
            src="https://i.postimg.cc/jqcm11NB/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-styl.avif"
            alt="Gagan"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-7 order-2 order-md-1">
          <p style={{ fontSize: "1rem", lineHeight: "1.8" }}>
      <p>
  I'm a <strong>Data Analyst & Data Science/AI-ML Enthusiast</strong> and <strong>Front-End Developer</strong> focused on clean, accessible, and modern UI/UX with a strong data-driven mindset.
  I work primarily with <strong>Python</strong> and <strong>Power BI</strong>, transforming data into actionable insights, interactive dashboards, and lightweight ML prototypes.
  <br /><br />
  I build user-friendly web interfaces and tools—from analytics dashboards and reporting views to interactive apps—balancing usability, performance, and clarity to solve real-world problems.
  <br /><br />
  I'm also an active <strong>problem solver</strong>, with 600+ problems solved across LeetCode and GeeksforGeeks. I regularly participate in coding contests and have recently started competing on Codeforces.
  <br /><br />
  My goal is to grow into a <strong>Data Scientist</strong>, applying statistical thinking, machine learning, and thoughtful design to deliver measurable impact.
  <br /><br />
  Feel free to check out my GitHub 😊
</p>
          </p>
        </div>
      </div>
    </section>
  );
}
