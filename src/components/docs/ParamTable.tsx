interface Param {
  name: string;
  type: string;
  required?: boolean;
  description: string;
}

export default function ParamTable({ title = "Parameters", params }: { title?: string; params: Param[] }) {
  return (
    <div className="my-8">
      <h3 className="text-lg font-mono font-semibold text-foreground mb-3">{title}</h3>
      <div className="border border-border rounded-lg overflow-hidden">
        {params.map((p, i) => (
          <div key={p.name} className={`flex flex-col sm:flex-row gap-2 sm:gap-4 p-4 ${i !== params.length - 1 ? "border-b border-border" : ""}`}>
            <div className="flex items-center gap-2 sm:w-48 shrink-0">
              <code className="text-sm font-mono text-primary">{p.name}</code>
              {p.required && <span className="text-[9px] font-mono text-destructive bg-destructive/10 px-1 py-0.5 rounded">required</span>}
            </div>
            <span className="text-xs font-mono text-muted-foreground sm:w-24 shrink-0">{p.type}</span>
            <span className="prose-body text-sm text-muted-foreground flex-1">{p.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
