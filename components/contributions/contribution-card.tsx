import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { contributionsInterface } from "@/config/contributions";

interface ContributionCardProps {
  contributions: contributionsInterface[];
}

export default function ContributionCard({
  contributions,
}: ContributionCardProps) {
  return (
    <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {contributions.map((contribution) => {
        const hasRepositoryLink = Boolean(contribution.link);

        return (
          <article
            key={`${contribution.repoOwner}/${contribution.repo}`}
            className="group flex h-full min-h-64 flex-col rounded-2xl border border-border/70 bg-background/75 p-5 shadow-[0_12px_36px_-28px_rgba(47,39,94,0.32)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_22px_48px_-30px_rgba(47,39,94,0.35)] sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icons.gitRepoIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="break-words font-semibold leading-snug text-foreground">
                  {contribution.repo}
                </h3>
              </div>
              <Icons.gitBranch
                className="mt-1 h-4 w-4 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
            </div>

            <p className="mt-4 line-clamp-4 flex-1 text-sm leading-6 text-muted-foreground">
              {contribution.contributionDescription}
            </p>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-border/70 pt-4">
              <span className="flex min-w-0 items-center gap-2 text-sm text-muted-foreground">
                <Icons.gitOrgBuilding
                  className="h-4 w-4 shrink-0"
                  aria-hidden="true"
                />
                <span className="truncate">{contribution.repoOwner}</span>
              </span>
              {hasRepositoryLink ? (
                <Link
                  href={contribution.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${contribution.repo} repository`}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                >
                  View repo
                  <Icons.externalLink className="h-4 w-4" />
                </Link>
              ) : (
                <span className="shrink-0 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  Project work
                </span>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
