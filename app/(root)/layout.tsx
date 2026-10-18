import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50">
        <div className="container py-3">
          <div className="glass-panel relative flex h-14 items-center justify-between gap-3 rounded-2xl px-3 sm:px-5">
            <MainNav items={routesConfig.mainNav} />
            <div className="flex items-center gap-2">
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>
      <main className="container flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
