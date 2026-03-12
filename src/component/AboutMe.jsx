import { Code, User, Briefcase } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          About <span className="text-purple-500">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate web developer & tech creator
            </h3>

            <p className="text-muted-foreground">
              I am a MERN stack developer who enjoys building responsive and scalable
              web applications. I focus on writing clean backend logic and creating
              smooth user interfaces.
            </p>

            <p className="text-muted-foreground">
              I work with technologies like React, Node.js, Express, MongoDB, and
              MySQL to develop full-stack applications and RESTful APIs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button bg-purple-500">
                Get In Touch
              </a>

              <a href="/resume.pdf" className="cosmic-button bg-purple-500">
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 gap-6">

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack Web Development
                  </h4>
                  <p>
                    Building responsive web apps using React, Node.js, Express,
                    and MongoDB.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Backend Development
                  </h4>
                  <p>
                    Creating secure REST APIs, authentication, and scalable
                    server logic.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Database Management
                  </h4>
                  <p className="text-muted-foreground">
                    Working with MongoDB and MySQL to design optimized schemas
                    and manage application data efficiently.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};