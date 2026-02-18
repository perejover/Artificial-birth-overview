import { cn } from "@/lib/utils";

export interface EndpointHeaderProps {
  method?: string;
  path?: string;
  title: string;
  description: string;
  version?: string;
  status?: string;
}

const methodStyle: Record<string, string> = {
  GET: "bg-[hsl(var(--endpoint-get))] text-[hsl(var(--background))]",
  POST: "bg-[hsl(var(--endpoint-post))] text-white",
  PUT: "bg-[hsl(var(--endpoint-put))] text-[hsl(var(--background))]",
  PAPER: "bg-[hsl(var(--endpoint-get))] text-[hsl(var(--background))]",
};

export default function EndpointHeader({ method, path, title, description, version, status }: EndpointHeaderProps) {
  return (
    <div className="mb-10">
      {(method || path || version || status) && (
        <div className="flex items-center gap-3 mb-4">
          {method && (
            <span className={cn("text-xs font-mono font-bold px-2.5 py-1 rounded", methodStyle[method] || methodStyle.GET)}>
              {method}
            </span>
          )}
          {path && <code className="text-sm font-mono text-muted-foreground">{path}</code>}
          {version && (
            <span className="text-[10px] font-mono text-muted-foreground border border-border rounded px-1.5 py-0.5 ml-auto">
              {version}
            </span>
          )}
          {status && (
            <span className="text-[10px] font-mono text-primary border border-primary/30 rounded px-1.5 py-0.5">
              {status}
            </span>
          )}
        </div>
      )}
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h1>
      <p className="prose-body text-muted-foreground">{description}</p>
    </div>
  );
}
