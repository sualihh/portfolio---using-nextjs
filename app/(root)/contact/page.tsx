import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="glass-panel grid gap-8 rounded-[2rem] p-5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:p-12">
        <div className="flex flex-col justify-center">
          <p className="section-kicker mb-3">Let&apos;s connect</p>
          <h2 className="font-heading text-3xl tracking-tight">
            Tell me what you&apos;re building.
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Have a project, an idea, or just want to say hello? Send me a
            message and I&apos;ll get back to you.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            You can also reach me at{" "}
            <a
              href="mailto:sualihmohammed53@gmail.com"
              className="font-medium text-primary hover:underline"
            >
              sualihmohammed53@gmail.com
            </a>
            .
          </p>
        </div>
        <div className="rounded-2xl border border-border/70 bg-background/75 p-5 sm:p-7">
          <ContactForm />
        </div>
      </div>
    </PageContainer>
  );
}
