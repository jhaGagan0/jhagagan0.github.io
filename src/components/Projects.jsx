import React from "react";
import { FaGithub } from "react-icons/fa";

const PROJECTS = [
  {
    title: "Netflix Data Analysis",
    description: "Combining my passion for cinema with my growing interest in data analytics, this project explores and visualizes insights from a Netflix movies dataset using Python and Power BI.",
    live: "https://github.com/jhaGagan0/NETFLIX-DATA-ANALYSIS",
    repo: "https://github.com/jhaGagan0/NETFLIX-DATA-ANALYSIS",
    image: "https://i.postimg.cc/CKgDycpf/Project.jpg",
    tech: ["Python", "PowerBi", "Jupyter Notebook"],
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h2 className="mb-5 text-center">Projects</h2>
      <div className="row gx-4 gy-5">
        {PROJECTS.map((p, i) => (
          <div key={i} className="col-sm-6 col-lg-4">
            <div className="card h-100 project-card">
              {p.image && (
                <img src={p.image} className="card-img-top" alt={p.title} />
              )}
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="card-title mb-0">{p.title}</h5>
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                </div>
                <p className="card-text mt-2 flex-grow-1">{p.description}</p>
                {p.tech && (
                  <div className="mb-3">
                    {p.tech.map((t) => (
                      <span key={t} className="badge bg-secondary me-1">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    className="btn btn-primary mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .project-card {
          background-color: #1e1e1e;
          color: #fff;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
        }
        .card-img-top {
          max-height: 180px;
          object-fit: cover;
        }
      `}</style>
    </section>
  );
}
