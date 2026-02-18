import { cn } from "@/lib/utils";
import { Info, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";

const variants = {
  info: { icon: Info, border: "border-primary/30", bg: "bg-primary/5", text: "text-primary" },
  warning: { icon: AlertTriangle, border: "border-[hsl(var(--endpoint-put))]/30", bg: "bg-[hsl(var(--endpoint-put))]/5", text: "text-[hsl(var(--endpoint-put))]" },
  success: { icon: CheckCircle, border: "border-[hsl(var(--endpoint-get))]/30", bg: "bg-[hsl(var(--endpoint-get))]/5", text: "text-[hsl(var(--endpoint-get))]" },
  tip: { icon: Lightbulb, border: "border-[hsl(var(--accent))]/30", bg: "bg-[hsl(var(--accent))]/5", text: "text-accent" },
};

export default function InfoCard({ variant = "info", title, children }: { variant?: keyof typeof variants; title?: string; children: React.ReactNode }) {
  const v = variants[variant];
  const Icon = v.icon;
  return (
    <div className={cn("rounded-lg border p-4 my-6", v.border, v.bg)}>
      <div className="flex items-start gap-3">
        <Icon className={cn("h-5 w-5 mt-0.5 shrink-0", v.text)} />
        <div>
          {title && <p className={cn("font-mono font-semibold text-sm mb-1", v.text)}>{title}</p>}
          <div className="prose-body text-sm text-muted-foreground">{children}</div>
        </div>
      </div>
    </div>
  );
}
