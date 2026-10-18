import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredContributions } from "@/config/contributions";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

export const metadata: Metadata = {
  title: pagesConfig.home.metadata.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
        <h2 className="font-heading text-3xl tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
      </div>
      <Link
        href={href}
        className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
      >
        {linkLabel}
        <Icons.arrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export default function IndexPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    jobTitle: "Full-stack software developer",
    sameAs: [siteConfig.links.github, siteConfig.links.twitter],
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section className="relative isolate overflow-hidden border-b border-border/70">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.12),transparent_55%)]"
        />
        <div className="container grid min-h-[620px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-sm text-muted-foreground shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Full-stack developer · Web &amp; mobile
            </div>
            <h1 className="font-heading text-4xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              I build digital products that{" "}
              <span className="text-primary">work beautifully.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              I&apos;m Sualih Mohammed, a full-stack developer creating
              thoughtful web and mobile experiences, from polished interfaces
              to dependable back-end systems.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className={cn(buttonVariants({ size: "lg" }), "rounded-xl")}
              >
                Explore my work
                <Icons.arrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-xl bg-background/60"
                )}
              >
                Get in touch
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border/70 pt-6 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Specializing in</span>
              <span>Full-stack development</span>
              <span aria-hidden="true" className="text-border">
                /
              </span>
              <span>AI-powered products</span>
              <span aria-hidden="true" className="text-border">
                /
              </span>
              <span>Mobile apps</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-card p-3 shadow-2xl shadow-primary/10">
              <Image
                src={profileImg}
                alt="Sualih Mohammed, full-stack software developer"
                width={600}
                height={720}
                sizes="(max-width: 1024px) 80vw, 400px"
                className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-center"
                priority
              />
              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-background/90 p-4 shadow-lg backdrop-blur-md">
                <p className="font-semibold">{siteConfig.authorName}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Building for the web, with care.
                </p>
              </div>
            </div>
            <div className="absolute -right-3 top-8 hidden items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium shadow-lg sm:flex">
              <Icons.check className="h-4 w-4 text-emerald-500" />
              End-to-end delivery
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16 sm:py-20" id="skills">
        <SectionHeading
          eyebrow="What I do"
          title="A versatile toolkit"
          description="I bring product thinking and hands-on engineering together to take ideas from first sketch to reliable release."
          href="/skills"
          linkLabel="All skills"
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featuredSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-start gap-4 rounded-2xl border border-border/80 bg-card p-5 transition-colors hover:bg-muted/50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <skill.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold">{skill.name}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-muted/30 py-16 sm:py-20" id="projects">
        <div className="container">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects built to make a difference"
            description="A selection of products and experiments spanning AI, commerce, and practical business tools."
            href="/projects"
            linkLabel="All projects"
          />
          <div className="grid justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 sm:py-20" id="experience">
        <SectionHeading
          eyebrow="Experience"
          title="Learning by building"
          description="The roles and collaborations that have shaped how I design, build, and ship software."
          href="/experience"
          linkLabel="Full experience"
        />
        <div className="grid justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.slice(0, 3).map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>

      <section
        className="border-y border-border/70 bg-muted/30 py-16 sm:py-20"
        id="contributions"
      >
        <div className="container">
          <SectionHeading
            eyebrow="Community"
            title="Giving back to open source"
            description="A few of the projects and communities I have been glad to support."
            href="/contributions"
            linkLabel="All contributions"
          />
          <ContributionCard contributions={featuredContributions} />
        </div>
      </section>

      <section className="container py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-10 shadow-sm sm:px-10 sm:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.12),transparent_55%)]"
          />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Have a project in mind?
              </p>
              <h2 className="font-heading text-3xl tracking-tight sm:text-4xl">
                Let&apos;s build something useful.
              </h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Tell me what you&apos;re working on and where you need a hand.
              </p>
            </div>
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "rounded-xl")}
            >
              Start a conversation
              <Icons.arrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </ClientPageWrapper>
  );
}
