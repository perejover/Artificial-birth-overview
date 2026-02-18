import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export function useTableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    // Reset activeId when route changes
    setActiveId("");
    setHeadings([]);

    let observer: IntersectionObserver | null = null;

    // Wait for content to render
    const timeoutId = setTimeout(() => {
      // Find all headings in the main content area
      const mainContent = document.querySelector("main");
      if (!mainContent) return;

      const headingElements = mainContent.querySelectorAll("h1, h2, h3, h4, h5, h6");
      
      const headingData: Heading[] = Array.from(headingElements).map((heading) => {
        // Generate ID if not present
        let id = heading.id;
        if (!id) {
          id = heading.textContent
            ?.toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "") || "";
          heading.id = id;
        }

        return {
          id,
          text: heading.textContent || "",
          level: parseInt(heading.tagName.charAt(1)),
        };
      });

      setHeadings(headingData);

      // Intersection Observer for scroll spy
      const observerOptions = {
        rootMargin: "-100px 0px -80% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        // Find the entry that is most visible and closest to top
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        
        if (visibleEntries.length === 0) return;

        // Sort by intersection ratio and position
        visibleEntries.sort((a, b) => {
          const aTop = a.boundingClientRect.top;
          const bTop = b.boundingClientRect.top;
          
          // Prefer entries closer to the top of the viewport
          if (Math.abs(aTop - 100) < Math.abs(bTop - 100)) return -1;
          if (Math.abs(aTop - 100) > Math.abs(bTop - 100)) return 1;
          
          // If same distance, prefer higher intersection ratio
          return b.intersectionRatio - a.intersectionRatio;
        });

        setActiveId(visibleEntries[0].target.id);
      };

      observer = new IntersectionObserver(observerCallback, observerOptions);

      headingElements.forEach((heading) => {
        observer?.observe(heading);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [location.pathname]);

  return { headings, activeId };
}
