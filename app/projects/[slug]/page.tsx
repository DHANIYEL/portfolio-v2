"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import HoverButton from "@/app/components/HoverButton";

const projects = [
  {
    id: 1,
    title: "LIVING COLOR",
    description:
      "Consectetur nostrud adipibus eu eleifend ipsum lacinia luctus dis ac turpis sociosqu risus integer",
    image: "/assets/projects/carhub.png",
    slug: "living-color",
    fullDescription: "Full project description here...",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 2,
    title: "INSPIRED",
    description:
      "Conetur nostrud adipibus eu eleifend ipsum lacinia luctus dis ac turpis sociosqu risus integer",
    image: "/assets/projects/moms.png",
    slug: "inspired",
    fullDescription: "Full project description here...",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 3,
    title: "CREATIVE FLOW",
    description:
      "Eleifend ipsum lacinia luctus dis ac turpis sociosqu risus integer pellentesque",
    image: "/assets/projects/dcars.png",
    slug: "creative-flow",
    fullDescription: "Full project description here...",
    technologies: ["React", "TypeScript", "GSAP"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 4,
    title: "URBAN VIBES",
    description:
      "Eleifend ipsum lacinia luctus dis ac turpis sociosqu risus integer pellentesque",
    image: "/assets/projects/gta.png",
    slug: "urban-vibes",
    fullDescription: "Full project description here...",
    technologies: ["React", "Three.js", "WebGL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 5,
    title: "NEARWALA",
    description:
      "Eleifend ipsum lacinia luctus dis ac turpis sociosqu risus integer pellentesque",
    image: "/assets/projects/nearwala.png",
    slug: "nearwala",
    fullDescription: "Full project description here...",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
];

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <HoverButton onClick={() => router.push("/")}>Go Home</HoverButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-8 left-8 z-50">
        <HoverButton onClick={() => router.push("/")}>← Back</HoverButton>
      </div>

      <div className="container mx-auto px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-[60vh] mb-12 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-6xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-gray-400 mb-8">
            {project.fullDescription}
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Technologies</h2>
            <div className="flex gap-4 flex-wrap">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-[#be5cff] rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => window.open(project.liveUrl, "_blank")}
              className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-[#be5cff] hover:text-white transition-all duration-300"
            >
              View Live
            </button>
            <button
              onClick={() => window.open(project.githubUrl, "_blank")}
              className="px-8 py-3 border border-white rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
