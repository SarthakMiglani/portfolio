import { Star, Type, Code, Users, Trophy } from "lucide-react";

const experiences = [
  {
    company: "VinnovateIT",
    role: "Technical Committee member",
    date: "April 2025 – Present",
    description: [
      "Developed and deployed mobile applications to automate internal college processes, improving accessibility and efficiency for students.",
      "Maintained and regularly updated the club's official website to showcase ongoing projects, events, and initiatives.",
      "Led technical initiatives to streamline student services, contributing to increased engagement and reduced manual workload."
    ],
    icon: <Star className="h-8 w-8 text-primary" />,
  },
  {
    company: "Smart India Hackathon",
    role: "Finalist",
    date: "September 2025",
    description: [
      "Selected as a finalist in a nationwide hackathon focused on solving real-world problems.",
      "Developed a scalable solution addressing a key challenge statement.",
      "Collaborated with a diverse team to deliver a functional prototype under tight deadlines."
    ],
    icon: <Trophy className="h-8 w-8 text-primary" />,
  },
  {
    company: "VinHack",
    role: "Organizer & Mentor",
    date: "September 2025",
    description: [
      "Organized and mentored participants in a national-level hackathon.",
      "Guided teams in ideation, development, and presentation of innovative tech solutions.",
      "Fostered a collaborative environment for learning and networking."
    ],
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    company: "Google-DSC WomenTechies'25",
    role: "Finalist out of 200+ teams",
    date: "April 2025",
    description: [
      "Built a project under the AI/ML track with real-world applications.",
      "Worked with React, Kotlin, and Python to create a scalable solution.",
      "Developed a cloud-integrated system for real-time data processing.",
      "Focused on user-centric design and efficient backend architecture."
    ],
    icon: <Code className="h-8 w-8 text-primary" />,
  },
  {
    company: "Tredence-InfinityAI",
    role: "Finalist out of 1000+ teams",
    date: "March 2025",
    description: [
      "Built a project under the AI/ML track with real-world applications.",
      "Worked with React, Kotlin, and Python to create a scalable solution.",
      "Developed a platform to analyze legal documents.",
      "Focused on user-centric design and efficient backend architecture."
    ],
    icon: <Type className="h-8 w-8 text-primary" />,
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Experience</span>
        </h2>
        <div className="relative border-l-2 border-primary/30 ml-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-12 flex items-start group">
              <div className="absolute -left-6 flex items-center justify-center bg-background border-4 border-primary/60 rounded-full shadow-lg w-12 h-12">
                {exp.icon}
              </div>
              <div className="ml-12 bg-card/80 rounded-xl shadow-lg p-6 w-full border border-border backdrop-blur-md transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <span className="text-primary font-semibold text-lg" style={{fontFamily: 'Oswald'}}>{exp.company}</span>
                  <span className="text-muted-foreground text-sm md:text-base mt-1 md:mt-0">{exp.date}</span>
                </div>
                <div className="text-xl font-bold mb-2" style={{fontFamily: 'Oswald'}}>{exp.role}</div>
                <ul className="list-disc pl-5 text-muted-foreground text-base space-y-1">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};