import type { ReactNode } from "react";

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block text-accent">
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-[0.15em] left-[-2%] -z-10 h-[0.25em] w-[104%] -rotate-1 rounded-sm bg-accent/20" />
    </span>
  );
}

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  emphasisSide?: "left" | "right";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  emphasisSide = "left",
}: SectionHeadingProps) {
  const headingAlignment =
    emphasisSide === "right" ? "lg:order-2 lg:ml-auto lg:text-right" : "";
  const headingTitleAlignment = emphasisSide === "right" ? "lg:ml-auto" : "";
  const bodyAlignment =
    emphasisSide === "right" ? "lg:order-1 lg:justify-self-start" : "";

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-8">
      <div className={`space-y-3 ${headingAlignment}`}>
        {eyebrow ? (
          <div className="text-[11px] uppercase tracking-[0.22em] text-ink-soft">
            {eyebrow}
          </div>
        ) : null}
        <h2
          className={`max-w-[16ch] text-balance text-[2.55rem] font-semibold tracking-[-0.05em] text-ink md:max-w-[18ch] md:text-[4.35rem] md:leading-[0.95] ${headingTitleAlignment}`}
        >
          {title}
        </h2>
      </div>

      {description || action ? (
        <div className={`space-y-3 lg:pb-1 ${bodyAlignment}`}>
          {description ? (
            <div className="max-w-[31ch] text-pretty text-base leading-8 text-ink-soft">
              {description}
            </div>
          ) : null}
          {action ? <div>{action}</div> : null}
        </div>
      ) : null}
    </div>
  );
}
