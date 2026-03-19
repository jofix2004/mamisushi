import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
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
          <p className="text-[11px] uppercase tracking-[0.22em] text-ink-soft">
            {eyebrow}
          </p>
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
            <p className="max-w-[31ch] text-pretty text-base leading-8 text-ink-soft">
              {description}
            </p>
          ) : null}
          {action ? <div>{action}</div> : null}
        </div>
      ) : null}
    </div>
  );
}
