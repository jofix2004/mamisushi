import { landingData } from "@/lib/landing-data";

import { BrandPillars } from "./brand-pillars";
import { BrandPillarsCtaVariant } from "./brand-pillars-cta-variant";
import { ComboSection } from "./combo-section";
import { FeaturedMenuSection } from "./featured-menu-section";
import { FloatingReserveCTA } from "./floating-reserve-cta.client";
import { HeroBrandVariantSection } from "./hero-brand-variant-section";
import { HeroSection } from "./hero-section";
import { MenuExplorerSection } from "./menu-explorer-section";
import { SpotlightProvider } from "./primitives/spotlight-context.client";
import { ReservationSection } from "./reservation-section";
import { SiteFooter } from "./site-footer";

export function LandingShell() {
  return (
    <SpotlightProvider>
      <main className="relative overflow-hidden bg-canvas text-ink">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10rem] top-[10rem] h-80 w-80 rounded-full bg-accent-soft/40 blur-[110px]" />
        <div className="absolute right-[-8rem] top-[26rem] h-80 w-80 rounded-full bg-accent-soft/30 blur-[110px]" />
        <div className="absolute bottom-[-10rem] left-[12%] h-72 w-72 rounded-full bg-white/40 blur-[100px]" />
      </div>

      {/* <HeroSection brandName={landingData.brandName} content={landingData.hero} /> */}
      <HeroBrandVariantSection
        brandName={landingData.brandName}
        content={landingData.hero}
      />
      
      {/* <BrandPillars pillars={landingData.pillars} /> */}
      <BrandPillarsCtaVariant
        brandName={landingData.brandName}
        pillars={landingData.pillars}
        cta={landingData.hero.primaryCta}
      />
      <FeaturedMenuSection
        items={landingData.featuredItems}
        promos={landingData.promos}
      />
      <ComboSection combos={landingData.combos} />
      <MenuExplorerSection groups={landingData.menuGroups} />
      <ReservationSection
        branches={landingData.branches}
        quickActions={landingData.quickActions}
      />
      <SiteFooter
        brandName={landingData.brandName}
        line={landingData.footer.line}
        note={landingData.footer.note}
      />
        <FloatingReserveCTA brandName={landingData.brandName} />
      </main>
    </SpotlightProvider>
  );
}
