import EndpointHeader from "@/components/docs/EndpointHeader";
import InfoCard from "@/components/docs/InfoCard";
import SectionDivider from "@/components/docs/SectionDivider";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function SafetyPage() {
  return (
    <>
      <EndpointHeader
        title="Safety, Ethics & Regulatory Framework"
        description="Comprehensive analysis of the ethical considerations, safety requirements, and regulatory frameworks necessary for the responsible development and deployment of artificial birth technologies. This section addresses the most common objections and proposes governance structures."
      />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Addressing Ethical Objections</h2>

      <div className="space-y-6">
        {[
          {
            objection: "\"It's unnatural\"",
            response: "So is surgery, vaccination, antibiotics, and every other medical intervention that has extended human lifespan from 35 to 80 years. \"Natural\" is not synonymous with \"optimal\" or \"safe.\" Natural childbirth killed millions of women before modern obstetrics. The appeal to nature is a logical fallacy when applied to medicine.",
          },
          {
            objection: "\"It will weaken the mother-child bond\"",
            response: "Bonding is not contingent on physical gestation. Adoptive parents, fathers, and surrogacy-arrangement parents all form deep bonds with their children. Research on kangaroo care shows that post-birth skin-to-skin contact is the critical bonding mechanism — and this is fully preserved in artificial birth. Moreover, artificial womb technology enables both parents to bond equally throughout the gestational period via voice interaction, haptic feedback, and visual monitoring.",
          },
          {
            objection: "\"This is eugenics\"",
            response: "Screening embryos for Huntington's disease or Tay-Sachs is not eugenics any more than newborn screening for PKU is eugenics. Eugenics was a coercive, state-directed program aimed at eliminating \"undesirable\" populations. Preimplantation genetic testing is a voluntary, individual, medical decision aimed at preventing suffering from known diseases. The ethical framework explicitly excludes selection for non-medical traits.",
          },
          {
            objection: "\"It will only be available to the rich\"",
            response: "This is an access problem, not a technology problem — and it's the same objection raised against every new medical technology. IVF started at $50,000+ per cycle and is now ~$12,000-$15,000, with insurance coverage expanding yearly. Smartphones, computers, and vaccines all followed the same trajectory: expensive → affordable → universal. The solution is public funding and insurance mandates, not technology suppression.",
          },
          {
            objection: "\"Playing God\"",
            response: "We already \"play God\" with pacemakers, organ transplants, CRISPR gene therapy, and neonatal intensive care that saves 22-week premature infants. The question is not whether we should intervene in biology — we already do. The question is whether this particular intervention reduces suffering and improves outcomes. The answer is overwhelmingly yes.",
          },
          {
            objection: "\"What about the experience of pregnancy?\"",
            response: "For women who desire the experience of pregnancy, natural pregnancy would remain available. No one is proposing forced artificial birth. The argument is that when given the choice between a process that carries meaningful risk of death, disability, and suffering, versus one that achieves the same outcome with near-zero risk — most people will eventually choose safety. Just as most people choose hospital births over home births, and anesthesia over unmedicated surgery.",
          },
        ].map((item) => (
          <div key={item.objection} className="p-5 rounded-lg border border-border bg-card">
            <p className="font-mono text-sm font-bold text-destructive mb-2">{item.objection}</p>
            <p className="prose-body text-sm text-muted-foreground">{item.response}</p>
          </div>
        ))}
      </div>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Proposed Regulatory Framework</h2>
      <div className="prose-body text-muted-foreground space-y-4">
        <p>
          The responsible deployment of artificial birth technology requires a robust regulatory framework. We propose a multi-tiered approach:
        </p>
      </div>

      <div className="space-y-3 my-6">
        {[
          { tier: "Tier 1 — Technology Certification", desc: "Each component (IVG, IVF screening panel, artificial womb system) must independently pass rigorous clinical trials demonstrating safety and efficacy equivalent to or exceeding natural reproduction. Standards set by international body (proposed: WHO Artificial Reproduction Safety Authority)." },
          { tier: "Tier 2 — Genetic Screening Boundaries", desc: "Clear legal definitions of permissible screening criteria. Proposed framework: screening permitted for all conditions listed in OMIM (Online Mendelian Inheritance in Man) disease database. Screening for non-medical traits (eye color, height, etc.) prohibited. Polygenic risk scoring permitted only for diseases with validated, peer-reviewed risk models." },
          { tier: "Tier 3 — Access & Equity", desc: "Mandatory public funding and insurance coverage once technology is certified. Sliding-scale pricing to ensure universal access. International cooperation to prevent \"reproductive tourism\" creating access disparities. Technology transfer agreements with developing nations." },
          { tier: "Tier 4 — Oversight & Monitoring", desc: "Long-term outcome tracking of all artificially born children (with consent and privacy protections). Annual safety audits of all artificial womb facilities. Mandatory reporting of adverse events. Independent ethics committees at every facility." },
          { tier: "Tier 5 — Individual Rights", desc: "Natural pregnancy remains legal and supported. No coercion toward artificial birth. Right to refuse genetic screening results. Right to choose embryo without scoring (random selection). Full parental rights regardless of method of conception." },
        ].map((t) => (
          <div key={t.tier} className="p-4 rounded-lg border border-border bg-card">
            <p className="font-mono text-sm font-semibold text-primary mb-1">{t.tier}</p>
            <p className="prose-body text-sm text-muted-foreground">{t.desc}</p>
          </div>
        ))}
      </div>

      <InfoCard variant="warning" title="The ethics of inaction">
        While we debate the ethics of artificial birth, ~800 women die every day from preventable pregnancy-related causes (WHO). The ethical burden is not solely on those proposing a safer alternative — it is equally on those who would delay or prevent access to technology that could save hundreds of thousands of lives annually.
      </InfoCard>

      <div className="mt-12 flex justify-between">
        <Link to="/pipeline" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-mono text-sm font-semibold hover:bg-muted transition-colors">
          <ArrowLeft className="h-4 w-4" /> Pipeline
        </Link>
        <Link to="/impact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold hover:bg-primary/90 transition-colors">
          Societal Impact <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}
