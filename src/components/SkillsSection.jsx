import { useState } from "react";
import { cn } from "@/lib/utils";

const skillLogos = {
  // Programming Languages
  "Kotlin": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  
  // Frontend Development
  "Jetpack Compose": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  "XML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
  
  // Backend Development
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
  
  // Development Tools
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg",
  "Android Studio": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  "IntelliJ IDEA": "https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
  "Vercel": "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
};

const skills = [
  // Programming Languages
  { name: "Kotlin", level: 90, category: "programming" },
  { name: "Java", level: 85, category: "programming" },
  { name: "C++", level: 80, category: "programming" },
  { name: "Python", level: 75, category: "programming" },
  { name: "SQL", level: 80, category: "programming" },
  
  // Frontend Development
  { name: "Jetpack Compose", level: 90, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "XML", level: 85, category: "frontend" },
  { name: "HTML", level: 95, category: "frontend" },
  { name: "CSS", level: 90, category: "frontend" },
  
  // Backend Development
  { name: "Spring Boot", level: 85, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "Firebase", level: 80, category: "backend" },
  
  // Development Tools
  { name: "Git", level: 90, category: "tools" },
  { name: "GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Android Studio", level: 90, category: "tools" },
  { name: "IntelliJ IDEA", level: 85, category: "tools" },
  { name: "Postman", level: 80, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "Vercel", level: 75, category: "tools" },
];

const categories = ["all", "programming", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => {
            const categoryLabels = {
              "all": "All",
              "programming": "Programming Languages",
              "frontend": "Frontend Development",
              "backend": "Backend Development",
              "tools": "Development Tools"
            };
            
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                )}
              >
                {categoryLabels[category]}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center shadow-lg mb-2">
                <img
                  src={skillLogos[skill.name]}
                  alt={skill.name + ' logo'}
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-sm font-semibold text-center text-foreground mt-1" style={{fontFamily: 'Oswald'}}> {skill.name} </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
