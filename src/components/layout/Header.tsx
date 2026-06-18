import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Plus,
  Minus,
  MapPin,
  // category + link icons referenced by name from the nav config
  Fence,
  TreePine,
  Grid3x3,
  Grid2x2,
  PanelsTopLeft,
  Crown,
  CircleDashed,
  RectangleHorizontal,
  Trees,
  Wheat,
  ShieldCheck,
  Sparkles,
  Hammer,
  Wrench,
  RefreshCw,
  Home,
  Building2,
  Tractor,
  Lock,
  PenTool,
  DoorOpen,
  Construction,
  CloudLightning,
  Trash2,
  Dog,
  Waves,
  Sprout,
  Package,
  Calculator,
  CreditCard,
  HelpCircle,
  Star,
  Images,
  type LucideIcon,
} from "lucide-react";
import { businessConfig } from "@/config/business";
import { mainNav } from "@/config/navigation";
import type { NavItem } from "@/types";
import { cn } from "@/lib/utils";

// Explicit map (named imports only — no namespace import, so the island bundle
// ships just these icons rather than all of lucide-react).
const NAV_ICONS: Record<string, LucideIcon> = {
  Fence,
  TreePine,
  Grid3x3,
  Grid2x2,
  PanelsTopLeft,
  Crown,
  CircleDashed,
  RectangleHorizontal,
  Trees,
  Wheat,
  ShieldCheck,
  Sparkles,
  Hammer,
  Wrench,
  RefreshCw,
  Home,
  Building2,
  Tractor,
  Lock,
  PenTool,
  DoorOpen,
  Construction,
  CloudLightning,
  Trash2,
  Dog,
  Waves,
  Sprout,
  Package,
  MapPin,
  Calculator,
  CreditCard,
  HelpCircle,
  Star,
  Images,
};

function NavIcon({ name, className }: { name?: string; className?: string }) {
  const Icon = (name && NAV_ICONS[name]) || Fence;
  return <Icon className={className} />;
}

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

function QuoteButton({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href="/contact"
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-bold text-black shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-black",
        className,
      )}
    >
      Get a Free Quote
    </a>
  );
}

/** Small charcoal tile with a lime glyph — mirrors IconTile.astro. */
function CategoryBadge({ icon }: { icon?: string }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-foreground text-primary-400">
      <NavIcon name={icon} className="h-4 w-4" />
    </span>
  );
}

/** Services menu — four icon columns. */
function ServicesContent({ item }: { item: NavItem }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-7 md:grid-cols-4">
      {item.columns!.map((col) => (
        <div key={col.title}>
          <div className="mb-3 flex items-center gap-2.5 border-b border-border pb-3">
            <CategoryBadge icon={col.icon} />
            <p className="text-xs font-bold uppercase tracking-wider text-primary-700">
              {col.title}
            </p>
          </div>
          <ul className="space-y-0.5">
            {col.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm text-foreground-light transition-colors hover:bg-surface hover:text-primary-700"
                >
                  <NavIcon
                    name={link.icon}
                    className="h-4 w-4 shrink-0 text-primary-600 transition-colors group-hover:text-primary-700"
                  />
                  <span className="leading-tight">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** Service Areas menu — dense city grid + CTA strip. */
function AreasContent({ item }: { item: NavItem }) {
  return (
    <div>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
        {item.columns!.map((col) => (
          <div key={col.title}>
            <div className="mb-3 flex items-center gap-2.5 border-b border-border pb-3">
              <CategoryBadge icon={col.icon} />
              <p className="text-xs font-bold uppercase tracking-wider text-primary-700">
                {col.title}
              </p>
              <span className="ml-auto text-xs font-medium text-muted">
                {col.links.length} towns
              </span>
            </div>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-0.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-foreground-light transition-colors hover:bg-surface hover:text-primary-700"
                  >
                    <NavIcon
                      name={link.icon}
                      className="h-3.5 w-3.5 shrink-0 text-primary-600"
                    />
                    <span className="truncate leading-tight">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-xl bg-surface p-4 sm:flex-row sm:items-center">
        <p className="text-sm text-foreground-light">
          <span className="font-semibold text-foreground">
            Serving all of Reno County &amp; Central Kansas.
          </span>{" "}
          Don&apos;t see your town? We probably cover it.
        </p>
        <div className="flex shrink-0 items-center gap-4">
          <a
            href="/service-areas"
            className="text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800"
          >
            All service areas →
          </a>
          <a
            href="/contact"
            className="inline-flex items-center rounded-lg bg-primary-500 px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-primary-400"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </div>
  );
}

function MegaPanel({
  item,
  open,
  onEnter,
  onLeave,
}: {
  item: NavItem;
  open: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  if (!item.columns) return null;
  const isAreas = item.megaVariant === "areas";
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={cn(
        "fixed left-1/2 top-[80px] z-[9998] -translate-x-1/2 rounded-2xl border border-border bg-white p-6 shadow-card-hover transition-all duration-200",
        "max-h-[calc(100vh-100px)] overflow-y-auto",
        isAreas ? "w-[min(94vw,900px)]" : "w-[min(94vw,1000px)]",
        open
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-2 opacity-0",
      )}
    >
      {isAreas ? <AreasContent item={item} /> : <ServicesContent item={item} />}
    </div>
  );
}

function MobileMenu({
  isOpen,
  onClose,
  openDropdown,
  setOpenDropdown,
}: {
  isOpen: boolean;
  onClose: () => void;
  openDropdown: string | null;
  setOpenDropdown: (v: string | null) => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <div
      id="mobile-menu"
      className={cn(
        "fixed inset-0 top-20 z-[9999] overflow-y-auto bg-black text-white transition-opacity duration-300 lg:hidden",
        isOpen
          ? "visible opacity-100"
          : "invisible opacity-0 pointer-events-none",
      )}
    >
      <div className="flex flex-col gap-1 p-6 pb-24">
        {mainNav.map((item) => {
          const groups = item.columns
            ? item.columns
            : item.children
              ? [
                  {
                    title: "",
                    links: item.children.map((c) => ({
                      label: c.label,
                      href: c.href,
                      icon: c.icon,
                    })),
                  },
                ]
              : null;
          const isOpen = openDropdown === item.label;
          return (
            <div key={item.label} className="border-b border-white/10">
              {groups ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(isOpen ? null : item.label)
                    }
                    className="flex w-full items-center justify-between py-3 text-lg font-semibold"
                  >
                    {item.label}
                    {isOpen ? (
                      <Minus className="h-5 w-5 text-primary-400" />
                    ) : (
                      <Plus className="h-5 w-5 text-primary-400" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="pb-3">
                      {groups.map((col) => (
                        <div key={col.title} className="mb-3">
                          {col.title && (
                            <p className="mb-1 mt-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-400">
                              {col.icon && (
                                <NavIcon
                                  name={col.icon}
                                  className="h-3.5 w-3.5"
                                />
                              )}
                              {col.title}
                            </p>
                          )}
                          <div className="flex flex-col">
                            {col.links.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                onClick={onClose}
                                className="flex items-center gap-2.5 py-2 pl-3 text-sm text-white/75 transition-colors hover:text-primary-400"
                              >
                                <NavIcon
                                  name={link.icon}
                                  className="h-4 w-4 shrink-0 text-primary-400"
                                />
                                {link.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block py-3 text-lg font-semibold transition-colors hover:text-primary-400"
                >
                  {item.label}
                </a>
              )}
            </div>
          );
        })}

        <a
          href={`tel:${businessConfig.phoneRaw}`}
          className="mt-4 flex items-center gap-2 py-3 text-lg font-semibold"
        >
          <Phone className="h-5 w-5 text-primary-400" />
          {businessConfig.phone}
        </a>

        <QuoteButton className="mt-2 w-full" onClick={onClose} />
      </div>
    </div>,
    document.body,
  );
}

export function Header({ solidNav = false }: { solidNav?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkClass =
    "px-3 py-2 text-sm font-semibold text-white/90 transition-colors hover:text-primary-400";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[9999] transition-all duration-300",
          scrolled || mobileOpen || solidNav
            ? "bg-black shadow-lg"
            : "bg-gradient-to-b from-black/70 to-transparent",
        )}
      >
        <Container>
          <nav className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center" aria-label="River Creek Fence — home">
              <img
                src="/images/logo-transparent.png"
                alt="River Creek Fence"
                width={500}
                height={393}
                className="h-14 w-auto md:h-16"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-0.5 lg:flex">
              {mainNav.map((item) => {
                const hasMenu = !!(item.columns || item.children);
                if (!hasMenu) {
                  return (
                    <a key={item.label} href={item.href} className={linkClass}>
                      {item.label}
                    </a>
                  );
                }
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <a
                      href={item.href}
                      className={cn(linkClass, "flex items-center gap-1")}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </a>
                    {item.columns ? (
                      <MegaPanel
                        item={item}
                        open={openDropdown === item.label}
                        onEnter={() => setOpenDropdown(item.label)}
                        onLeave={() => setOpenDropdown(null)}
                      />
                    ) : (
                      <div
                        className={cn(
                          "absolute left-0 top-full min-w-[260px] rounded-xl border border-border bg-white py-2 shadow-card-hover transition-all duration-200",
                          openDropdown === item.label
                            ? "visible translate-y-0 opacity-100"
                            : "invisible -translate-y-2 opacity-0",
                        )}
                      >
                        {item.children!.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            className="group flex items-center gap-3 px-4 py-2.5 text-sm text-foreground-light transition-colors hover:bg-surface hover:text-primary-700"
                          >
                            <NavIcon
                              name={child.icon}
                              className="h-4 w-4 shrink-0 text-primary-600 transition-colors group-hover:text-primary-700"
                            />
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden items-center gap-4 lg:flex">
              <a
                href={`tel:${businessConfig.phoneRaw}`}
                className="flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary-400"
              >
                <Phone className="h-4 w-4 text-primary-400" />
                {businessConfig.phone}
              </a>
              <QuoteButton />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-white transition-colors hover:text-primary-400 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>
        </Container>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
    </>
  );
}
