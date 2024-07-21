import { AtSign, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="container p-6 flex justify-center">
      <div className="flex flex-wrap gap-4">
        <a
          href="https://www.linkedin.com/in/miyurugunarathna"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="https://github.com/miyurugunarathna"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="mailto:miyurupriyawadan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AtSign className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
}
