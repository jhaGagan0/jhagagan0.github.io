export default function Skills() {
  const skills = [
    {
      title: "Languages",
      items: ["Python", "SQL"],
    },
    {
      title: "Technologies / Frameworks",
      items: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
      ],
    },
    {
      title: "Tools",
      items: [
        "Power BI",
        "Excel",
        "PowerPoint",
        "MySQL",
        "GitHub",
        "Tableau",
      ],
    },
    {
      title: "Platforms",
      items: [
        "Visual Studio Code",
        "Jupyter Notebook",
        "Google Colab",
      ],
    },
    {
      title: "Technical Skills",
      items: [
        "Data Structures and Algorithms",
        "Front-end Development",
        "Database Management Systems (DBMS)",
        "Software Engineering",
      ],
    },
    {
      title: "Soft Skills",
      items: [
        "Problem Solving",
        "Analytical Thinking",
        "Clear Communication",
        "Attention to Detail",
        "Curiosity",
        "Time Management",
        "Learning Mindset",
      ],
    },
  ];

  return (
    <section id="skills" className="container py-5">
      <h2 className="text-center mb-5">Skills</h2>

      <div className="row g-4">
        {skills.map((skill, index) => (
          <div key={index} className="col-md-6">
            <div className="skill-card p-4 h-100">
              <h5 className="mb-3">{skill.title}</h5>
              <ul className="skill-list">
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .skill-card {
          border-radius: 12px;
          background: #111;
          color: #fff;
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
          transition: transform 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-5px);
        }

        .skill-list {
          padding-left: 18px;
          margin: 0;
        }

        .skill-list li {
          margin-bottom: 6px;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}
