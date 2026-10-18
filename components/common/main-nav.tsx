"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { RouteItem } from "@/config/routes";

interface MainNavProps {
  items: RouteItem[];
}

export function MainNav({ items }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  return (
    <>
      <Link
        href="/"
        className="group flex items-center gap-3"
        aria-label="Sualih Mohammed, home"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-sm transition-transform group-hover:-rotate-3">
          SM
        </span>
        <span className="hidden sm:block">
          <span className="block text-sm font-semibold leading-tight">
            Sualih Mohammed
          </span>
          <span className="mt-0.5 block text-xs text-muted-foreground">
            Full-stack developer
          </span>
        </span>
      </Link>
      <nav
        aria-label="Main navigation"
        className="hidden items-center gap-1 md:flex"
      >
        {items.map((item) => {
          const isPageLink = !item.href.includes("#");
          const isActive =
            isPageLink &&
            (pathname === item.href || pathname.startsWith(`${item.href}/`));

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
      <div className="flex items-center gap-2">
        <Link
          href="/contact"
          className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
        >
          Let&apos;s talk
        </Link>
        <button
          type="button"
          className="inline-flex h-10 items-center gap-2 rounded-lg border border-border px-3 text-sm font-medium transition-colors hover:bg-muted md:hidden"
          onClick={() => setShowMobileMenu((show) => !show)}
          aria-expanded={showMobileMenu}
          aria-label={
            showMobileMenu ? "Close navigation menu" : "Open navigation menu"
          }
        >
          {showMobileMenu ? (
            <Icons.close className="h-4 w-4" />
          ) : (
            <Icons.menu className="h-4 w-4" />
          )}
          <span>Menu</span>
        </button>
      </div>
      {showMobileMenu && (
        <MobileNav items={items} onNavigate={() => setShowMobileMenu(false)} />
      )}
    </>
  );
}
