import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";



export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          src={project.companyLogoImg}
          alt={`${project.companyName} project preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              {project.companyName}
            </h2>
            <span className="shrink-0 rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground">
              {project.type}
            </span>
          </div>
          <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
            {project.shortDescription}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <ChipContainer textArr={project.category} />
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-2">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex w-fit items-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore project
            <Icons.chevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          {project.websiteLink && (
            <Link
              href={project.websiteLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Live demo
              <Icons.externalLink className="ml-2 h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
