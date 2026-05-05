import type { NavItem } from "./nav-config";

type HeaderNavProps = {
  items: NavItem[];
  className?: string;
  onNavigate?: () => void;
};

export function HeaderNav({ items, className = "", onNavigate }: HeaderNavProps) {
  return (
    <nav className={className} aria-label="Principal">
      <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-1">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={onNavigate}
              className="block rounded-full px-4 py-2 font-body text-sm font-medium text-muted/95 transition hover:bg-surface-container/90 hover:text-foreground md:py-2"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
