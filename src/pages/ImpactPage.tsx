import EndpointHeader from "@/components/docs/EndpointHeader";
import InfoCard from "@/components/docs/InfoCard";
import SectionDivider from "@/components/docs/SectionDivider";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function ImpactPage() {
  return (
    <>
      <EndpointHeader
        title="Societal Impact — A World Transformed"
        description="When artificial birth reaches universal availability, its effects will ripple through every aspect of human society. This section analyzes the projected impacts across healthcare, economics, gender equality, demographics, and human development."
      />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Impact Areas</h2>

      <div className="space-y-8">
        <div>
          <h3 className="font-mono text-lg font-semibold text-foreground mb-3">1. Healthcare Revolution</h3>
          <div className="prose-body text-muted-foreground space-y-3">
            <p>
              <strong className="text-foreground">Maternal mortality: eliminated.</strong> The ~295,000 annual maternal deaths worldwide drop to near-zero. Obstetric emergencies — eclampsia, hemorrhage, obstructed labor, sepsis — become historical footnotes.
            </p>
            <p>
              <strong className="text-foreground">Birth defects: reduced by 95%+.</strong> Comprehensive genetic screening eliminates virtually all monogenic diseases. Controlled gestational environments eliminate teratogenic exposures (alcohol, drugs, pollutants, infections like Zika or rubella).
            </p>
            <p>
              <strong className="text-foreground">Preterm birth: eliminated.</strong> The leading cause of death in children under 5 ceases to exist. Every child is born at optimal gestational maturity.
            </p>
            <p>
              <strong className="text-foreground">Healthcare cost reduction:</strong> The elimination of pregnancy complications, NICU stays for premature infants, and lifelong care for preventable genetic conditions represents trillions of dollars in healthcare savings globally.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-lg font-semibold text-foreground mb-3">2. Gender Equality Acceleration</h3>
          <div className="prose-body text-muted-foreground space-y-3">
            <p>
              <strong className="text-foreground">The pregnancy penalty: abolished.</strong> Women currently face documented career setbacks, wage gaps, and discrimination specifically linked to pregnancy and the perception of future pregnancy. When reproduction no longer requires a woman's body, this entire category of discrimination evaporates.
            </p>
            <p>
              <strong className="text-foreground">Parental leave equity:</strong> Both parents start from the same physical state post-birth. Neither needs recovery time. Parental leave becomes truly equal — a social bonding period rather than a medical recovery period.
            </p>
            <p>
              <strong className="text-foreground">Reproductive autonomy:</strong> Women's bodies are no longer the contested terrain of reproductive politics. The deeply personal decision of when and whether to have children is fully decoupled from physical consequences.
            </p>
            <p>
              <strong className="text-foreground">Military & dangerous occupations:</strong> Women in physically demanding careers no longer face the impossible choice between career and pregnancy. A female soldier, firefighter, astronaut, or deep-sea diver can have children without interrupting service or risking fetal harm.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-lg font-semibold text-foreground mb-3">3. Economic Impact</h3>
          <div className="prose-body text-muted-foreground space-y-3">
            <p>
              <strong className="text-foreground">GDP growth from full female participation:</strong> McKinsey estimates that full gender parity in labor force participation could add $12 trillion to global GDP by 2025. Eliminating the pregnancy penalty is a major component of achieving this parity.
            </p>
            <p>
              <strong className="text-foreground">Reduced disability costs:</strong> Preventing thousands of genetic diseases eliminates billions in lifetime care costs. A single case of severe genetic disability can cost $2-5 million in lifetime care.
            </p>
            <p>
              <strong className="text-foreground">New industries:</strong> Artificial reproduction creates entirely new industries — bioreactor manufacturing, synthetic amniotic fluid production, gestational monitoring AI, prenatal bonding technology, and specialized facility construction.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-lg font-semibold text-foreground mb-3">4. Demographic Implications</h3>
          <div className="prose-body text-muted-foreground space-y-3">
            <p>
              <strong className="text-foreground">Addressing declining birth rates:</strong> Many developed nations face demographic crises as birth rates fall below replacement levels. A primary reason: the physical, career, and financial costs of pregnancy deter potential parents. Removing the physical cost alone may significantly increase willingness to have children.
            </p>
            <p>
              <strong className="text-foreground">Aging population support:</strong> By enabling later reproduction without genetic risk, individuals can have children at ages that better align with financial stability and career establishment.
            </p>
            <p>
              <strong className="text-foreground">Population genetics:</strong> Over generations, the elimination of recessive disease alleles from the active gene pool will reduce the carrier frequency of devastating genetic diseases, creating a positive feedback loop.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-lg font-semibold text-foreground mb-3">5. Psychological & Social Dimensions</h3>
          <div className="prose-body text-muted-foreground space-y-3">
            <p>
              <strong className="text-foreground">Elimination of tokophobia:</strong> Fear of pregnancy and childbirth (tokophobia) affects 6-10% of women and is a significant barrier to reproduction. Artificial birth eliminates the source of this fear.
            </p>
            <p>
              <strong className="text-foreground">Reduced postpartum depression:</strong> While PPD has hormonal components, physical recovery stress and birth trauma are major contributing factors. Eliminating these factors may significantly reduce PPD incidence.
            </p>
            <p>
              <strong className="text-foreground">Equalized early bonding:</strong> When neither parent has undergone the physical ordeal of pregnancy, the early parenting experience begins on truly equal terms, potentially leading to more balanced parenting partnerships.
            </p>
          </div>
        </div>
      </div>

      <SectionDivider />

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        {[
          { stat: "~295K → 0", label: "Annual maternal deaths prevented" },
          { stat: "~15M → near 0", label: "Preterm births prevented annually" },
          { stat: "$12T+", label: "Projected GDP gain from gender parity" },
          { stat: "~10,000", label: "Genetic diseases eliminable" },
        ].map((s) => (
          <div key={s.label} className="p-5 rounded-lg border border-border bg-card text-center">
            <p className="text-3xl font-mono font-bold text-primary">{s.stat}</p>
            <p className="text-xs text-muted-foreground mt-2">{s.label}</p>
          </div>
        ))}
      </div>

      <InfoCard variant="tip" title="The big picture">
        Artificial birth is not merely a medical technology — it is a civilizational upgrade. It addresses some of humanity's oldest and most persistent sources of suffering, inequality, and lost potential. The question for our generation is not whether this future will arrive, but whether we will have the wisdom to guide its development responsibly.
      </InfoCard>

      <div className="mt-12 flex justify-between">
        <Link to="/safety" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-mono text-sm font-semibold hover:bg-muted transition-colors">
          <ArrowLeft className="h-4 w-4" /> Safety & Ethics
        </Link>
        <Link to="/timeline" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold hover:bg-primary/90 transition-colors">
          Timeline <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}
