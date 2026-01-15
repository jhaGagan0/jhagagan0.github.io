import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">© {new Date().getFullYear()} Made by Gagan Jha </p>

        <div className="d-flex justify-content-center gap-3 mt-3 fs-4">
          <a
            href="https://github.com/jhaGagan0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gaganjha18/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/TechSage/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/gkjhawakn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <SiGeeksforgeeks />
          </a>
          <a
            href="https://instagram.com/gagan.jha19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
