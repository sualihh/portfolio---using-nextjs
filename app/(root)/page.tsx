import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import ExperienceCard from "@/components/experience/experience-card";
import { ContactForm } from "@/components/forms/contact-form";
import ProjectCard from "@/components/projects/project-card";
import { buttonVariants } from "@/components/ui/button";
import { featuredContributions } from "@/config/contributions";
import { experiences } from "@/config/experience";
import { featuredProjects } from "@/config/projects";
import { pagesConfig } from "@/config/pages";
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

const services = [
  {
    icon: Icons.code,
    title: "Full-stack development",
    description:
      "Web applications built from clear, responsive interfaces through to dependable APIs and data.",
  },
  {
    icon: Icons.mobile,
    title: "Mobile experiences",
    description:
      "Practical cross-platform applications designed around real user needs and everyday workflows.",
  },
  {
    icon: Icons.ai,
    title: "AI-powered features",
    description:
      "Useful AI integrations that fit naturally into a product instead of adding complexity for its own sake.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "Clarify the goals, audience, and constraints before settling on an approach.",
  },
  {
    number: "02",
    title: "Shape the experience",
    description:
      "Map the key flows and design a simple, coherent experience around them.",
  },
  {
    number: "03",
    title: "Build with care",
    description:
      "Develop the interface and supporting systems in clear, maintainable pieces.",
  },
  {
    number: "04",
    title: "Refine and deliver",
    description:
      "Test the important paths, polish the details, and prepare the work to ship.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 max-w-2xl sm:mb-10">
      <p className="section-kicker mb-3">{eyebrow}</p>
      <h2 className="font-heading text-3xl tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
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

      <section className="relative py-8 sm:py-12 lg:py-16">
        <div className="glass-panel relative isolate overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full bg-primary/15 blur-3xl"
          />
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-sm font-medium text-secondary-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Full-stack developer · Web &amp; mobile
              </div>
              <h1 className="font-heading text-4xl leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.25rem]">
                Thoughtful software,{" "}
                <span className="text-primary">built to be useful.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                I&apos;m Sualih Mohammed. I build web and mobile products with
                considered interfaces, reliable back ends, and a focus on the
                people using them.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/#projects"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-xl shadow-lg shadow-primary/15"
                  )}
                >
                  Explore my work
                  <Icons.arrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/#contact"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-xl bg-background/70"
                  )}
                >
                  Get in touch
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span>Full-stack applications</span>
                <span aria-hidden="true" className="text-primary/60">/</span>
                <span>Mobile products</span>
                <span aria-hidden="true" className="text-primary/60">/</span>
                <span>AI integrations</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-primary/15 blur-2xl"
              />
              <div className="relative rounded-[1.75rem] border border-white/80 bg-white/60 p-3 shadow-2xl shadow-primary/10 dark:border-white/10 dark:bg-card/60">
                <Image
                  src={profileImg}
                  alt="Sualih Mohammed"
                  width={600}
                  height={720}
                  sizes="(max-width: 1024px) 75vw, 360px"
                  className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-center"
                  priority
                />
                <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/60 bg-background/90 p-4 shadow-lg backdrop-blur-xl">
                  <p className="font-semibold">{siteConfig.authorName}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Full-stack developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-24 py-12 sm:py-16" id="about">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="soft-card p-6 sm:p-8">
            <p className="section-kicker mb-3">A little about me</p>
            <h2 className="font-heading text-3xl tracking-tight">
              From an idea to a product people can use.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              I enjoy bringing the pieces of software together: understanding
              what matters, shaping a clear experience, and building the
              systems that make it work. My projects span commerce,
              healthcare, inventory, and community products.
            </p>
            <Link
              href="/experience"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Explore my experience
              <Icons.arrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div id="services" className="scroll-mt-24 grid gap-4 sm:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="soft-card p-5 sm:p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" id="tools">
        <div className="glass-panel rounded-[2rem] p-6 sm:p-9">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker mb-3">Tools I work with</p>
              <h2 className="font-heading text-3xl tracking-tight">
                A practical, modern toolkit.
              </h2>
            </div>
            <Link
              href="/skills"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Browse all skills
              <Icons.arrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {featuredSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex min-h-20 items-center gap-3 rounded-2xl border border-border/70 bg-background/70 px-3 py-4"
              >
                <skill.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-24 py-12 sm:py-16" id="projects">
        <SectionHeading
          eyebrow="Selected work"
          title="A few things I've built."
          description="A closer look at projects across online retail, healthcare, and business operations."
        />
        <div className="grid justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-xl bg-background/70"
            )}
          >
            View all projects
            <Icons.arrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <section
        className="scroll-mt-24 py-12 sm:py-16"
        id="experience"
      >
        <SectionHeading
          eyebrow="Experience"
          title="Experience shaped by building."
          description="Selected roles and projects that show how I’ve grown across web, mobile, and full-stack development."
        />
        <div className="grid justify-items-stretch gap-4 md:grid-cols-2">
          {experiences.slice(0, 4).map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
        <div className="mt-7 text-center">
          <Link
            href="/experience"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-xl bg-background/70"
            )}
          >
            View all experience
            <Icons.arrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <section
        className="scroll-mt-24 py-12 sm:py-16"
        id="contributions"
      >
        <div className="glass-panel rounded-[2rem] p-6 sm:p-9">
          <SectionHeading
            eyebrow="Open source & contributions"
            title="Projects I’ve contributed to."
            description="A selection of repositories and project work, with links to explore the code where available."
          />
          <ContributionCard contributions={featuredContributions} />
          <div className="mt-7 text-center">
            <Link
              href="/contributions"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-xl bg-background/70"
              )}
            >
              View all contributions
              <Icons.arrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-24 py-12 sm:py-16"
        id="process"
      >
        <SectionHeading
          eyebrow="How I work"
          title="A thoughtful process, from start to finish."
          description="Every project is different, but a clear, collaborative process helps keep the work focused and useful."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article key={step.number} className="soft-card p-5 sm:p-6">
              <span className="font-heading text-3xl text-primary/70">
                {step.number}
              </span>
              <h3 className="mt-4 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="scroll-mt-24 py-12 sm:py-16" id="contact">
        <div className="glass-panel grid gap-8 rounded-[2rem] p-6 sm:p-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:p-12">
          <div className="flex flex-col justify-center">
            <p className="section-kicker mb-3">Let&apos;s connect</p>
            <h2 className="font-heading text-3xl tracking-tight sm:text-4xl">
              Have something in mind?
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Share a little about what you&apos;re working on. I&apos;d be glad
              to hear from you.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Visit the contact page
              <Icons.arrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl border border-border/70 bg-background/75 p-5 sm:p-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </ClientPageWrapper>
  );
}
