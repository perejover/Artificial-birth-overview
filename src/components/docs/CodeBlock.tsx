import { cn } from "@/lib/utils";

interface CodeBlockProps {
  title?: string;
  language?: string;
  children: string;
  className?: string;
}

export default function CodeBlock({ title, language = "json", children, className }: CodeBlockProps) {
  return (
    <div className={cn("rounded-lg border border-border overflow-hidden my-6", className)}>
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border">
          <span className="text-xs font-mono text-muted-foreground">{title}</span>
          <span className="text-[10px] font-mono text-muted-foreground uppercase">{language}</span>
        </div>
      )}
      <pre className="p-4 bg-[hsl(var(--code-bg))] overflow-x-auto text-sm">
        <code className="text-muted-foreground font-mono whitespace-pre">{children}</code>
      </pre>
    </div>
  );
}
