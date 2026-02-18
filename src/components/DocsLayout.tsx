import { useState, useMemo } from "react";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Menu, X, FlaskConical, Dna, Baby,
  BookOpen, AlertTriangle,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import TableOfContents from "./TableOfContents";

const sections = [
  {
    label: "GETTING STARTED",
    items: [
      { title: "Introduction", path: "/", icon: BookOpen },
      { title: "Problem Statement", path: "/problem-statement", icon: AlertTriangle },
    ],
  },
  {
    label: "IVG — IN VITRO GAMETOGENESIS",
    items: [
      { title: "Biological Explanation", path: "/ivg/biological", icon: Dna },
      { title: "Technical Approach", path: "/ivg/technical", icon: Dna },
    ],
  },
  {
    label: "IVF — IN VITRO FERTILIZATION",
    items: [
      { title: "Biological Explanation", path: "/ivf/biological", icon: FlaskConical },
      { title: "Technical Approach", path: "/ivf/technical", icon: FlaskConical },
    ],
  },
  {
    label: "ARTIFICIAL WOMBS",
    items: [
      { title: "Biological Explanation", path: "/artificial-wombs/biological", icon: Baby },
      { title: "Technical Approach", path: "/artificial-wombs/technical", icon: Baby },
    ],
  },
];

const flatPages = sections.flatMap((s) =>
  s.items.map((item) => ({ path: item.path, title: item.title }))
);

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { prev, next } = useMemo(() => {
    const idx = flatPages.findIndex((p) => p.path === location.pathname);
    if (idx < 0) return { prev: null, next: null };
    return {
      prev: idx > 0 ? flatPages[idx - 1] : null,
      next: idx >= 0 && idx < flatPages.length - 1 ? flatPages[idx + 1] : null,
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-md bg-card border border-border"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-72 border-r border-border bg-[hsl(var(--sidebar-background))] flex flex-col transition-transform duration-200 md:translate-x-0 md:sticky md:top-0 md:h-screen",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div onClick={() => navigate("/")}  className="p-5 border-b border-border cursor-pointer">
          <div  className="flex items-center gap-2">
            <Baby className="h-5 w-5 text-primary" />
            <span className="font-mono font-bold text-base text-foreground tracking-tight">
              ARTIFICIAL BIRTH
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1 font-mono">Scientific Overview</p>
        </div>
        <nav className="flex-1 overflow-y-auto scrollbar-thin p-3 space-y-5">
          {sections.map((s) => (
            <div key={s.label}>
              <p className="text-[10px] font-mono font-semibold text-muted-foreground tracking-widest mb-2 px-2">
                {s.label}
              </p>
              <div className="space-y-0.5">
                {s.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-2 px-2 py-2 rounded-md text-sm transition-colors group",
                        isActive
                          ? "bg-sidebar-accent text-foreground"
                          : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-foreground"
                      )
                    }
                  >
                    <item.icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                    <span className="truncate text-xs">{item.title}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="p-4 border-t border-border flex items-center justify-between gap-4 text-sm">
        <p className="text-[10px] text-muted-foreground font-mono">
          © 2026 — Contribute to the project
        </p>
              
        <a 
          href="https://github.com/perejover/Artificial-birth-overview" 
          className="flex items-center gap-2 p-1 rounded-md transition-colors hover:bg-sidebar-accent group"
        >
          <Github className="h-5 w-5  text-muted-foreground group-hover:text-primary" />
        </a>
      </div>
      </aside>

      {/* Overlay */}
      {open && <div className="fixed inset-0 z-30 bg-black/60 md:hidden" onClick={() => setOpen(false)} />}

      {/* Main content */}
      <main className="flex-1 min-w-0 md:ml-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="flex gap-8">
            <div className="flex-1 min-w-0 max-w-4xl">
              {children}
            </div>
            <div className="hidden xl:flex w-64 flex-shrink-0 sticky top-24 self-start flex-col gap-4">
              {(prev || next) && (
                <nav
                  className="flex items-center justify-between gap-2 border-l border-border pl-6 py-2"
                  aria-label="Page navigation"
                >
                  {prev ? (
                    <Link
                      to={prev.path}
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <ChevronLeft className="h-4 w-4 shrink-0" />
                      <span className="truncate max-w-[7rem]" title={prev.title}>
                        {prev.title}
                      </span>
                    </Link>
                  ) : (
                    <span />
                  )}
                  {next ? (
                    <Link
                      to={next.path}
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors group ml-auto"
                    >
                      <span className="truncate max-w-[7rem] text-right" title={next.title}>
                        {next.title}
                      </span>
                      <ChevronRight className="h-4 w-4 shrink-0" />
                    </Link>
                  ) : (
                    <span />
                  )}
                </nav>
              )}
              <TableOfContents />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
