import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Menu, X, FlaskConical, Dna, Baby,
  BookOpen, AlertTriangle,
  Home,
  Github
} from "lucide-react";

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
      { title: "Current Overview", path: "/ivg/current", icon: Dna },
      { title: "Technologies used", path: "/ivg/technologies", icon: Dna },
      { title: "Limiting regulations", path: "/ivg/regulations", icon: Dna },
    ],
  },
  {
    label: "IVF — IN VITRO FERTILIZATION",
    items: [
      { title: "Biological Explanation", path: "/ivf/biological", icon: FlaskConical },
      { title: "Technical Approach", path: "/ivf/technical", icon: FlaskConical },
      { title: "Current Overview", path: "/ivf/current", icon: FlaskConical },
      { title: "Technologies used", path: "/ivf/technologies", icon: FlaskConical },
      { title: "Limiting regulations", path: "/ivf/regulations", icon: FlaskConical },
    ],
  },
  {
    label: "ARTIFICIAL WOMBS",
    items: [
      { title: "Biological Explanation", path: "/artificial-wombs/biological", icon: Baby },
      { title: "Technical Approach", path: "/artificial-wombs/technical", icon: Baby },
      { title: "Current Overview", path: "/artificial-wombs/current", icon: Baby },
      { title: "Technologies used", path: "/artificial-wombs/technologies", icon: Baby },
      { title: "Limiting regulations", path: "/artificial-wombs/regulations", icon: Baby },
    ],
  },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
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
          href="https://github.com/perejover/artificial-birth" 
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
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16">
          {children}
        </div>
      </main>
    </div>
  );
}
