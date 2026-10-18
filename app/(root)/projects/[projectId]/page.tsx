import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Icons } from "@/components/common/icons";
import ProjectDescription from "@/components/projects/project-description";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { cn, formatDateFromObj } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { projectId } = await params;
  const project = Projects.find((item) => item.id === projectId);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.companyName,
    description: project.shortDescription,
    openGraph: {
      title: project.companyName,
      description: project.shortDescription,
      images: [project.companyLogoImg],
    },
  };
}

export default async function Project({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const project = Projects.find((val) => val.id === projectId);
  if (!project) {
    redirect("/projects");
  }

  return (
    <article className="container relative max-w-6xl py-6 lg:py-10">
      <Link
        href="/projects"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        All Projects
      </Link>
      <div>
        <time
          dateTime={project.startDate.toISOString()}
          className="block text-sm text-muted-foreground"
        >
          {formatDateFromObj(project.startDate)}
        </time>
        <h1 className="flex items-center justify-between mt-2 font-heading text-4xl leading-tight lg:text-5xl">
          {project.companyName}
          <div className="flex items-center">
            {project.githubLink && (
              <CustomTooltip text="Link to the source code.">
                <Link href={project.githubLink} target="_blank">
                  <Icons.gitHub className="w-6 ml-4 text-muted-foreground hover:text-foreground" />
                </Link>
              </CustomTooltip>
            )}
            {project.websiteLink && (
              <CustomTooltip text="Please note that some project links may be temporarily unavailable.">
                <Link href={project.websiteLink} target="_blank">
                  <Icons.externalLink className="w-6 ml-4 text-muted-foreground hover:text-foreground " />
                </Link>
              </CustomTooltip>
            )}
          </div>
        </h1>
        <ChipContainer textArr={project.category} />
        <div className="mt-4 flex space-x-4">
          <Link
            href={siteConfig.links.github}
            className="flex items-center space-x-2 text-sm"
          >
            <Image
              src={profileImg}
              alt={"naman"}
              width={42}
              height={42}
              className="rounded-full bg-background"
            />

            <div className="flex-1 text-left leading-tight">
              <p className="font-medium">{"Sualih Mohammed"}</p>
              <p className="text-[12px] text-muted-foreground">
                @{siteConfig.username}
              </p>
            </div>
          </Link>
        </div>
      </div>

      <Image
        src={project.companyLogoImg}
        alt={`${project.companyName} project preview`}
        width={1280}
        height={720}
        className="my-8 h-auto w-full rounded-2xl border bg-muted shadow-sm"
        priority
      />

      {project.techStack.length > 0 && (
        <div className="mb-10 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-4 font-heading text-2xl leading-tight">
            Built with
          </h2>
          <ChipContainer textArr={project.techStack} />
        </div>
      )}

      <section className="mb-10">
        <h2 className="mb-4 font-heading text-3xl leading-tight">
          About this project
        </h2>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <ProjectDescription
            paragraphs={project.descriptionDetails.paragraphs}
            bullets={project.descriptionDetails.bullets}
          />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-6 font-heading text-3xl leading-tight">
          Project highlights
        </h2>
        <div className="space-y-8">
          {project.pagesInfoArr.map((page, pageIndex) => (
            <section
              key={page.title}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="p-6 pb-2">
                <h3 className="flex items-center font-heading text-xl leading-tight">
                  <Icons.star className="mr-2 h-5 w-5 text-primary" />
                  {page.title}
                </h3>
                {page.description && (
                  <p className="mt-2 max-w-3xl leading-7 text-muted-foreground">
                    {page.description}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 gap-4 p-4 pt-3 md:grid-cols-2">
                {page.imgArr.map((img, imageIndex) => (
                  <figure
                    key={img}
                    className="overflow-hidden rounded-xl border border-border bg-muted/50"
                  >
                    <Image
                      src={img}
                      alt={`${project.companyName} ${page.title} screenshot ${imageIndex + 1}`}
                      width={1280}
                      height={720}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="h-auto w-full"
                      loading={
                        pageIndex === 0 && imageIndex === 0 ? "eager" : "lazy"
                      }
                    />
                    <figcaption className="border-t border-border px-4 py-2 text-xs text-muted-foreground">
                      {page.title} · {imageIndex + 1} of {page.imgArr.length}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          All Projects
        </Link>
      </div>
    </article>
  );
}
