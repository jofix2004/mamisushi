import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

function BaseIcon({
  className,
  children,
  viewBox = "0 0 24 24",
}: IconProps & {
  children: ReactNode;
  viewBox?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      className={className}
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </BaseIcon>
  );
}

export function ArrowDownIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </BaseIcon>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M3 10h18" />
    </BaseIcon>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </BaseIcon>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M6 4h4l1.2 4.2-2.1 1.9a14.8 14.8 0 0 0 4.8 4.8l1.9-2.1L20 14v4a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2Z" />
    </BaseIcon>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M5 6.5A3.5 3.5 0 0 1 8.5 3h7A3.5 3.5 0 0 1 19 6.5v6A3.5 3.5 0 0 1 15.5 16H11l-4 4v-4H8.5A3.5 3.5 0 0 1 5 12.5Z" />
      <path d="M9 9.5h6" />
      <path d="M9 12.5h4" />
    </BaseIcon>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M17 7h.01" />
    </BaseIcon>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v5h4v-5h3l1-4h-4V8a1 1 0 0 1 1-1Z" />
    </BaseIcon>
  );
}
