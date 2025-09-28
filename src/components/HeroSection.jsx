import { ArrowDown, Twitter, Linkedin, Download, Github } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
        {/* Left Side - Text Content */}
        <div className="space-y-8 text-left mt-16 lg:mt-24 -ml-4 lg:-ml-8">
          {/* Greeting */}
          <p className="text-2xl md:text-3xl text-foreground/80 opacity-0 animate-fade-in">
            Hello, It's Me
          </p>
          
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold text-foreground opacity-0 animate-fade-in-delay-1">
            Sarthak
          </h1>
          
          {/* Profession */}
          <p className="text-3xl md:text-4xl text-foreground opacity-0 animate-fade-in-delay-2">
            And I'm an <span className="text-primary">Android & Backend Developer</span>
          </p>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl opacity-0 animate-fade-in-delay-3">
            I build impactful applications using modern technologies. Specializing in Kotlin, Spring Boot, and React, I create solutions that address real-world problems with clean, efficient, and scalable designs.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-6 opacity-0 animate-fade-in-delay-4">
            <a href="https://www.linkedin.com/in/sarthak--miglani/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
              <Linkedin className="w-7 h-7 text-foreground" />
            </a>
            <a href="https://github.com/sarthakmiglani" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
              <Github className="w-7 h-7 text-foreground" />
            </a>
            <a href="https://leetcode.com/sarthakmiglani" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
              <span className="text-foreground text-lg font-bold">LC</span>
            </a>
            <a href="https://twitter.com/oiisarthak" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
              <Twitter className="w-7 h-7 text-foreground" />
            </a>
          </div>
          
          {/* Download CV Button */}
          <div className="pt-6 opacity-0 animate-fade-in-delay-5">
            <a 
              href="/resume_final.pdf" 
              download
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/80 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download className="w-6 h-6 mr-3" />
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center lg:justify-end -mt-24 lg:-mt-32">
          <div className="relative">
            {/* Hexagonal Glowing Frame */}
            <div className="relative w-96 h-96">
              {/* === MODIFICATION === */}
              {/* Outer glow effect - removed 'animate-pulse' */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-75"></div>
              
              {/* Hexagonal border with gradient */}
              <div className="relative w-full h-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 rounded-3xl">
                {/* Inner hexagonal container */}
                <div className="w-full h-full bg-gray-900 rounded-3xl overflow-hidden relative">
                  <div className="absolute inset-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full overflow-hidden flex items-center justify-center border-4 border-gray-500">
                    <img
                      src="/projects/profile.png"
                      alt="Sarthak Miglani"
                      className="w-full h-full object-cover scale-150"
                    />
                  </div>
                  
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-cyan-500/10 rounded-3xl"></div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};