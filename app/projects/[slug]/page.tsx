"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Projects } from "@/app/constants/index";
import HoverButton from "@/app/components/HoverButton";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();

  const project = Projects.find((p) => p.slug === params.slug);

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
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <HoverButton onClick={() => router.back()}>← Back</HoverButton>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Hero Image */}
          <div className="relative w-full h-[60vh] mb-16 rounded-2xl overflow-hidden">
            <Image
              src={project.images.main}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {project.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-400 mb-10">{project.subtitle}</p>

          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-300 mb-12 max-w-3xl">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex gap-4 flex-wrap">
              {project.technologies?.map((tech: any) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
