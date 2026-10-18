import Link from "next/link";

import { RouteItem } from "@/config/routes";

interface MobileNavProps {
  items: RouteItem[];
  onNavigate: () => void;
}

export function MobileNav({ items, onNavigate }: MobileNavProps) {
  return (
    <div className="absolute inset-x-0 top-full z-50 mt-2 rounded-2xl border border-border/70 bg-background/95 px-4 pb-5 pt-3 shadow-xl backdrop-blur-xl md:hidden">
      <nav aria-label="Mobile navigation" className="grid gap-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {item.title}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={onNavigate}
          className="mt-2 rounded-lg bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
        >
          Let&apos;s talk
        </Link>
      </nav>
    </div>
  );
}
