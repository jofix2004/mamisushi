import { FacebookIcon, InstagramIcon } from "./primitives/icons";

type SiteFooterProps = {
  brandName: string;
  line: string;
  note: string;
};

export function SiteFooter({ brandName, line, note }: SiteFooterProps) {
  return (
    <footer className="px-[1.9rem] pb-8 pt-4 md:px-[3.8rem] xl:px-[6.2rem]">
      <div className="mx-auto max-w-[1320px] border-t border-line px-0 py-6 md:px-0">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ink">
              {brandName}
            </p>
            <h2 className="max-w-[20ch] text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              {line}
            </h2>
            <p className="max-w-[58ch] text-sm leading-7 text-ink-soft">
              {note}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                Quick links
              </p>
              <div className="grid gap-2 text-sm text-ink">
                <a href="#combos" className="hover:text-accent">
                  Combo
                </a>
                <a href="#menu" className="hover:text-accent">
                  Menu
                </a>
                <a href="#reserve" className="hover:text-accent">
                  Đặt bàn
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                Liên hệ
              </p>
              <div className="grid gap-3 text-sm text-ink">
                <a href="#" className="inline-flex items-center gap-2 hover:text-accent">
                  <InstagramIcon className="size-[18px]" />
                  Instagram
                </a>
                <a href="#" className="inline-flex items-center gap-2 hover:text-accent">
                  <FacebookIcon className="size-[18px]" />
                  Facebook
                </a>
                <a href="#" className="hover:text-accent">
                  Zalo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
