import { ArrowRight, ExternalLink, Github, X } from "lucide-react";
import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Latch: Automated Network Authentication",
    description: `Latch is a native Android app that automatically logs you into captive portal Wi-Fi networks, like those at universities and public hotspots. It securely saves your credentials and handles authentication in the background, providing a seamless internet connection without manual logins.

- Automated background authentication
- Clean, native UI with Jetpack Compose
- Secure on-device credential storage
- Efficient, battery-friendly processing
- Modern, testable app architecture`,
    image: "/projects/latch_logo.png",
    images: [
      "/projects/latch_logo.png",
      "/projects/latch_landing.jpg",
      "/projects/latch3.png",
      "/projects/latch4.png",
      "/projects/latch5.png"
    ],
    video: null,
    tags: ["Kotlin", "Jetpack Compose", "Material 3"],
    githubUrl: "https://github.com/SarthakMiglani/auto-net-connector",
  },
  {
    id: 2,
    title: "Vakeel.ai: Your AI Legal Assistant",
    description: `Vakeel.ai is a comprehensive legal tech application designed to simplify complex legal processes for individuals and small businesses. This native Android app leverages the power of AI to offer a suite of tools that provide instant legal insights, risk analysis, and document generation.

- AI-Powered Document Analysis & Risk Detection
- Instant, Customized Contract Generation
- Legal Conversation Analyzer with Summaries
- Mobile Document Scanner (OCR)
- Modern, Intuitive UI with Jetpack Compose`,
    image: "/projects/vakeel_logo.png", // Use your project's logo
    images: [
      "/projects/vakeel_logo.png", // Add your screenshots here
      "/projects/vakeel1.jpeg",
      "/projects/vakeel2.jpeg",
      "/projects/vakeel3.jpeg",
      "/projects/vakeel5.jpeg",
      "/projects/vakeel4.jpeg",
    ],
    video: null,
    tags: ["Kotlin", "Jetpack Compose", "Google ML kit"],
    githubUrl: "https://github.com/SarthakMiglani/vakeelapp",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: `Full-featured e-commerce platform with user authentication and payment processing. Highlights:

- Secure login and registration
- Product catalog and search
- Shopping cart and checkout
- Stripe payment integration
- Order history and management

A robust foundation for launching your own online store!`,
    image: "/projects/project3.png",
    images: [
      "/projects/project3.png",
      "/projects/project1.png",
      "/projects/project2.png",
      "/projects/project3.png",
      "/projects/project1.png"
    ],
    video: null,
    tags: ["React", "Node.js", "Stripe"],
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 px-4 relative">
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
          <div className="relative z-10 bg-card rounded-2xl shadow-2xl max-w-5xl w-full min-h-[60vh] mx-4 p-12 border border-border flex flex-col items-center animate-fade-in">
            <button
              className="absolute top-4 right-4 text-foreground/60 hover:text-primary transition-colors"
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <div className="w-full mb-6">
              <div className="flex gap-4 overflow-x-auto media-scrollbar py-2 px-1">
                {selectedProject.images && selectedProject.images.map((img, idx) => (
                  <div key={idx} className="flex-shrink-0 h-64 flex items-center justify-center bg-black/20 rounded-xl shadow-lg border border-border">
                    <img
                      src={img}
                      alt={selectedProject.title + ' screenshot ' + (idx + 1)}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                ))}
                {selectedProject.video && (
                  <div className="flex-shrink-0 h-64 flex items-center justify-center bg-black rounded-xl shadow-lg border border-border">
                    <video
                      controls
                      className="h-full w-auto"
                    >
                      <source src={selectedProject.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-2 text-primary text-center" style={{ fontFamily: 'Oswald' }}> {selectedProject.title} </h3>
            <div className="text-muted-foreground text-lg mb-4 text-center w-full max-w-3xl mx-auto" style={{ fontFamily: 'inherit' }}>
              {selectedProject.description.split('\n').map((line, idx) => {
                if (line.trim().startsWith('-')) {
                  return <div key={idx} className="text-left pl-8"><li>{line.replace(/^\s*-\s*/, '')}</li></div>;
                } else if (line.trim() === '') {
                  return <br key={idx} />;
                } else {
                  return <div key={idx} className="mb-2">{line}</div>;
                }
              })}
            </div>
            <div className="flex flex-wrap gap-3 mb-6 justify-center">
              {selectedProject.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 text-sm font-semibold rounded-full bg-background border border-primary text-primary">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-6 mt-2">
          
              <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="indigo-button flex items-center gap-2">
                GitHub <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"></p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* === MODIFICATION START === */}
              <div className="h-48 overflow-hidden flex items-center justify-center p-4 bg-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* === MODIFICATION END === */}

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 truncate">
                  {project.description.split('\n')[0]}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      onClick={e => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                  <button
                    className="indigo-button px-4 py-1 text-sm"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="indigo-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/SarthakMiglani"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};