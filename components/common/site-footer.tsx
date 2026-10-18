import Link from "next/link";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t border-border/70 bg-muted/20", className)}>
      <div className="container flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold">Sualih Mohammed</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Full-stack developer building thoughtful digital products.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {SocialLinks.map((item) => (
            <CustomTooltip icon={item.icon} text={item.username} key={item.name}>
              <Link
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noreferrer" : undefined}
                aria-label={item.name}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "icon",
                  }),
                  "h-10 w-10 rounded-xl bg-background"
                )}
              >
                <item.icon className="h-4 w-4" />
              </Link>
            </CustomTooltip>
          ))}
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="container flex flex-col gap-2 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Sualih Mohammed. All rights reserved.
          </span>
          <Link
            href="/projects"
            className="w-fit transition-colors hover:text-foreground"
          >
            Browse selected projects
          </Link>
        </div>
      </div>
    </footer>
  );
}
