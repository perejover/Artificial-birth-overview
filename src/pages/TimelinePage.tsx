import EndpointHeader from "@/components/docs/EndpointHeader";
import InfoCard from "@/components/docs/InfoCard";
import SectionDivider from "@/components/docs/SectionDivider";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const phases = [
  {
    era: "2024-2030",
    version: "v0.1 — Foundation",
    color: "border-primary/50",
    items: [
      "IVG: First functional human oocytes generated from iPSCs in laboratory settings",
      "IVF: AI-assisted embryo selection becomes standard of care; success rates exceed 65%",
      "Artificial Wombs: FDA-approved BioBag systems deployed for extremely premature infants (22-24 weeks)",
      "Regulatory: International working group established for artificial reproduction governance",
      "Public: Growing awareness and debate; first opinion polls show 30-40% support in developed nations",
    ],
  },
  {
    era: "2030-2040",
    version: "v0.5 — Integration",
    color: "border-accent/50",
    items: [
      "IVG: Routine generation of quality-controlled human gametes from somatic cells; first IVG-IVF babies born",
      "IVF: Comprehensive polygenic risk scoring validated and integrated; embryo screening covers all known monogenic diseases",
      "Artificial Wombs: Gestation window extended to support from 18-20 weeks; NICU paradigm shifts from incubators to biobags",
      "Pipeline: First partial pipeline demonstrations (IVG + IVF, but natural gestation or surrogacy for final stage)",
      "Cost: IVG gamete generation cost falls below $10,000 per batch; IVF costs continue declining",
      "Public: Support rises to 50-60% as safety data accumulates; first insurance coverage mandates",
    ],
  },
  {
    era: "2040-2055",
    version: "v1.0 — Full Pipeline",
    color: "border-[hsl(var(--endpoint-put))]/50",
    items: [
      "IVG: Mature, reliable, affordable gamete generation available at fertility clinics worldwide",
      "IVF: Near-perfect embryo selection; genetic disease virtually eliminated from screened populations",
      "Artificial Wombs: Full-term ectogenesis demonstrated and approved for clinical use (embryo to birth)",
      "Pipeline: Complete end-to-end artificial birth pipeline operational",
      "First generation of children born entirely through artificial means; long-term outcome studies begin",
      "Cost: Total pipeline cost comparable to current hospital birth ($15,000-$30,000); insurance coverage widespread",
      "Public: Adoption rate reaches 10-20% in early-adopter nations; natural pregnancy remains the majority choice",
    ],
  },
  {
    era: "2055-2075",
    version: "v2.0 — Normalization",
    color: "border-primary",
    items: [
      "Safety data from 20+ years of artificial births demonstrates superior outcomes across all metrics",
      "Adoption rate reaches 40-60% in developed nations",
      "Developing nations gain access through international health initiatives and declining costs",
      "Natural pregnancy increasingly viewed as an unnecessary risk — similar to how home birth is viewed today",
      "Genetic disease prevalence drops dramatically in populations with high adoption rates",
      "Maternal mortality effectively eliminated in high-adoption regions",
      "Second generation of artificially-born individuals reaching adulthood — outcome data comprehensive and positive",
    ],
  },
  {
    era: "2075-2100",
    version: "v3.0 — Universal Adoption",
    color: "border-primary",
    items: [
      "Artificial birth becomes the default reproductive method globally (80-95% adoption)",
      "Natural pregnancy persists as a personal choice, fully supported but statistically rare",
      "Entire generations grow up without genetic disease; population health metrics transformed",
      "The concept of \"pregnancy risk\" becomes historical, like \"surgical infection before antiseptics\"",
      "Reproductive equality achieved: biology no longer determines who bears the physical cost of reproduction",
      "Humanity looks back on the era of natural pregnancy the way we now view pre-anesthetic surgery — with gratitude for the alternative",
    ],
  },
];

export default function TimelinePage() {
  return (
    <>
      <EndpointHeader
        title="Timeline & Roadmap"
        description="A projected timeline for the development, integration, and universal adoption of artificial birth technology. Based on current research trajectories, historical technology adoption curves, and projected regulatory timelines."
      />

      <InfoCard variant="info" title="Projection methodology">
        These timelines are based on conservative estimates drawn from current research progress, historical biomedical technology development cycles (IVF took ~20 years from first demonstration to widespread availability), and technology adoption S-curves. Actual timelines may be faster — breakthroughs in AI-assisted biology are accelerating discovery rates beyond historical norms.
      </InfoCard>

      <SectionDivider />

      <div className="space-y-8">
        {phases.map((phase) => (
          <div key={phase.era} className={`border-l-2 ${phase.color} pl-6 py-2`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xl font-mono font-bold text-foreground">{phase.era}</span>
              <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">{phase.version}</span>
            </div>
            <ul className="space-y-2">
              {phase.items.map((item, i) => (
                <li key={i} className="prose-body text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Conclusion</h2>
      <div className="prose-body text-muted-foreground space-y-4">
        <p>
          The transition to artificial birth is not a question of <em>if</em>, but <em>when</em>. The individual technologies are already in development. The scientific foundations are proven. The benefits are overwhelming and quantifiable. The ethical objections, while important to address, do not withstand rigorous analysis when weighed against the human cost of the status quo.
        </p>
        <p>
          Every year we delay, approximately 295,000 women die in childbirth, 15 million babies are born prematurely, and millions of children are born with preventable genetic diseases. These are not abstract statistics — they are mothers, children, and families whose suffering is preventable with technology that is within our reach.
        </p>
        <p>
          The development of artificial birth technology is perhaps the most important biomedical project of the 21st century. It promises to eliminate humanity's oldest source of gendered suffering, prevent millions of deaths, eradicate thousands of genetic diseases, and create true reproductive equality. The science is clear. The engineering is achievable. The moral imperative is undeniable.
        </p>
        <p className="text-foreground font-semibold">
          The future of human reproduction is artificial — and it will be better.
        </p>
      </div>

      <InfoCard variant="success" title="Thank you for reading">
        This scientific paper was formatted as API documentation for accessibility and interactive navigation. All statistics cited are from peer-reviewed sources and international health organizations (WHO, CDC, Nature, The Lancet). For questions, discussions, or contributions, this document is open for community engagement.
      </InfoCard>

      <div className="mt-12 flex">
        <Link to="/impact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-mono text-sm font-semibold hover:bg-muted transition-colors">
          <ArrowLeft className="h-4 w-4" /> Societal Impact
        </Link>
      </div>
    </>
  );
}
