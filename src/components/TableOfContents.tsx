import { useEffect } from "react";
import { useTableOfContents, Heading } from "@/hooks/useTableOfContents";
import { cn } from "@/lib/utils";

export default function TableOfContents() {
  const { headings, activeId } = useTableOfContents();

  // Don't render if no headings
  if (headings.length === 0) {
    return null;
  }

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset from top
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const getIndentClass = (level: number) => {
    switch (level) {
      case 1:
        return "pl-0";
      case 2:
        return "pl-0";
      case 3:
        return "pl-4";
      case 4:
        return "pl-8";
      case 5:
        return "pl-12";
      case 6:
        return "pl-16";
      default:
        return "pl-0";
    }
  };

  return (
    <aside className="hidden xl:block w-64 flex-shrink-0 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin">
      <div className="border-l border-border pl-6 py-2">
        <h3 className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          On this page
        </h3>
        <nav className="space-y-0.5">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => scrollToHeading(heading.id)}
              className={cn(
                "block w-full text-left text-xs transition-colors rounded-md px-2 py-1.5",
                "hover:text-foreground hover:bg-muted/50",
                getIndentClass(heading.level),
                activeId === heading.id
                  ? "text-foreground font-semibold bg-muted border-l-2 border-primary"
                  : "text-muted-foreground"
              )}
            >
              <span className="truncate block">{heading.text}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
