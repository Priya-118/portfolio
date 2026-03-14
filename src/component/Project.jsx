import { ExternalLink ,Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SkillSwap",
    description: "Networking website",
    Image: "/Screenshot 2026-03-08 115816.png",
    tags: ["Node.js", "Express.js", "MongoDB", "Backend Project"],
    demoUrl: "https://skillswap-platform-5juc.onrender.com",
    GithubUrl: "https://github.com/Priya-118/Skillswap-Platform"
  },
   {
    id: 2,
    title: "Airbnb",
    description: "A platform where users can explore and discover different places to stay and view property listings.",
    Image: "/Screenshot 2026-03-14 154750.png",
    tags: ["Node.js", "Express.js", "MongoDB", "Backend Project"],
    demoUrl: "https://airbnb-bla9.onrender.com/",
    GithubUrl: "https://github.com/Priya-118/Airbnb"
  },
   
];

export const Project = () => {
  return (
    <section id="projects" className="py-24 px-6">

      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-purple-400">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-10">
          Here are some of my projects. Each project was carefully crafted with attention
          to detail, performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >

              <div className="h-48 overflow-hidden">
                <img
                  src={project.Image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* button */}
                <div className="flex gap-4">
                  <a href={project.demoUrl} className="text-sm px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition"><ExternalLink/></a>

                  <a
                    href={project.githubUrl}
                    className="text-sm px-4 py-2 border border-purple-400 text-purple-400 rounded-md hover:bg-purple-400 hover:text-white transition"
                  >
                    <Github/>
                  </a>
                  </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};