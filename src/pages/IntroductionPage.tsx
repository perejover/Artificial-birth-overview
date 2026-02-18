import { Link } from "react-router-dom";
import { Dna, FlaskConical, Baby, ChevronDown } from "lucide-react";

export default function IntroductionPage() {
  const links = [
    {
      icon: Dna,
      label: "IVG",
      desc: "In vitro gametogenesis — deriving eggs and sperm from any cell",
      path: "/ivg/biological",
      color: "text-primary hover:border-primary/50",
    },
    {
      icon: FlaskConical,
      label: "IVF",
      desc: "In vitro fertilization — optimized conception outside the body",
      path: "/ivf/biological",
      color: "text-accent hover:border-accent/50",
    },
    {
      icon: Baby,
      label: "Artificial Wombs",
      desc: "Ectogenesis — complete gestation in an artificial uterus",
      path: "/artificial-wombs/biological",
      color: "text-[hsl(var(--endpoint-put))] hover:border-[hsl(var(--endpoint-put))]/50",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="text-center max-w-2xl mx-auto space-y-6">
        <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
          ARTIFICIAL HUMAN BIRTH FROM FIRST PRINCIPLES
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base font-mono tracking-wide">
          Current scientific overview · February 2026
        </p>

        <p className="text-foreground/85 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          This overview traces the science behind creating human life outside natural conception and pregnancy: from generating gametes in the lab (IVG), through fertilization and early embryos (IVF), to full-term development in artificial wombs. Each section explains the biology, current state of research, and the technologies and regulations that shape the field.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 pt-2">
          {links.map(({ icon: Icon, label, desc, path, color }) => (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center gap-1.5 px-4 py-3 rounded-md border border-border bg-card/50 transition-colors text-center min-w-[180px] ${color}`}
            >
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 shrink-0" />
                <span className="font-mono text-sm font-semibold">{label}</span>
              </div>
              <span className="text-xs opacity-90">{desc}</span>
            </Link>
          ))}
        </div>

        <Link
          to="/problem-statement"
          className="inline-flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors mt-6"
          aria-label="Start"
        >
          <span className="font-mono text-xs tracking-widest uppercase">Start</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </Link>
      </div>
    </div>
  );
}
