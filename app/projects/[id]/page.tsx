import Section from "@/components/Section";
import Button from "@/components/Button";
import { projects, getProjectById } from "@/data/projects";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProjectContent from "./ProjectContent";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} – Nick Wyrwas`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}
