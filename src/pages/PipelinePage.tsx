import EndpointHeader from "@/components/docs/EndpointHeader";
import CodeBlock from "@/components/docs/CodeBlock";
import InfoCard from "@/components/docs/InfoCard";
import SectionDivider from "@/components/docs/SectionDivider";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function PipelinePage() {
  return (
    <>
      <EndpointHeader
        title="The Complete Artificial Birth Pipeline"
        description="This section integrates all three core technologies — IVG, IVF, and Artificial Wombs — into a single end-to-end reproductive pipeline. From a simple cell sample to a healthy newborn, with zero physical risk to any person and maximum health outcomes for the child."
      />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">End-to-End Process</h2>
      <div className="prose-body text-muted-foreground space-y-4">
        <p>
          The complete pipeline, from initial consultation to birth, operates as follows. Total timeline: approximately 12-14 months from decision to delivery, with <strong className="text-foreground">zero days of physical burden on any parent</strong>.
        </p>
      </div>

      <CodeBlock title="Full pipeline execution" language="pseudocode">{`async function artificialBirth(parents: Parent[]): Promise<Neonate> {
  // ═══════════════════════════════════════════════
  // PHASE 1: CONSULTATION & CONSENT (Week 0)
  // ═══════════════════════════════════════════════
  const consultation = await geneticCounseling(parents, {
    carrier_screening: true,
    family_history_analysis: true,
    reproductive_goals_discussion: true,
    informed_consent: true
  });

  // ═══════════════════════════════════════════════
  // PHASE 2: GAMETE GENERATION via IVG (Weeks 1-16)
  // ═══════════════════════════════════════════════
  const cells = await collectSomaticCells(parents);  // Simple blood draw
  
  const gametes = await Promise.all(
    parents.map(parent => IVG.generateGametes({
      source: parent.somaticCells,
      target_type: parent.desiredGameteType,
      quantity: 500,  // Generate hundreds for maximum selection power
      quality_control: "comprehensive"
    }))
  );
  // Total eggs available: ~500 (vs ~12 in natural IVF)

  // ═══════════════════════════════════════════════
  // PHASE 3: FERTILIZATION & SCREENING via IVF (Weeks 16-20)
  // ═══════════════════════════════════════════════
  const embryos = await IVF.fertilize({
    oocytes: gametes.oocytes,
    sperm: gametes.spermatocytes,
    method: "ICSI",
    culture_duration: "5_days_to_blastocyst"
  });
  // ~300-400 viable blastocysts

  const screenedEmbryos = await IVF.geneticScreening({
    embryos: embryos,
    panel: {
      monogenic_diseases: "all_10000_known",
      chromosomal: "full_karyotype_plus_microarray",
      polygenic_risk: ["cardiovascular", "cancer", "diabetes", "neurological"],
      mitochondrial: "full_panel",
      de_novo_mutations: "whole_genome_sequencing"
    }
  });

  const selectedEmbryo = await IVF.selectOptimal(screenedEmbryos, {
    primary_criteria: "absence_of_disease",
    secondary_criteria: "lowest_polygenic_risk_composite",
    excluded_criteria: ["cosmetic_traits", "intelligence_scores"],
    ai_assessment: true,
    human_review: true
  });

  // ═══════════════════════════════════════════════
  // PHASE 4: GESTATION via ARTIFICIAL WOMB (Weeks 20-58)
  // ═══════════════════════════════════════════════
  const womb = await ArtificialWomb.initialize({
    embryo: selectedEmbryo,
    gestational_target: 266,  // days (~38 weeks)
    monitoring: "continuous",
    environment: {
      temperature: 37.0,
      amniotic_fluid: "synthetic_matched",
      acoustic: ["heartbeat_simulation", "parent_voice_recordings"],
      circadian: "natural_light_cycle_simulation"
    }
  });

  // Parents can visit, talk to, and bond with developing fetus
  // through the transparent biobag at any time
  await womb.enableParentBonding({
    voice_channel: true,
    visual_access: true,
    haptic_feedback: true,  // Feel fetal movements
    remote_monitoring_app: true
  });

  // Continuous 38-week gestation with 24/7 monitoring
  const neonate = await womb.gestate({
    progress_reports: "weekly",
    parent_updates: "daily",
    developmental_milestones: "tracked_automatically",
    emergency_protocol: "neonatology_team_on_standby"
  });

  // ═══════════════════════════════════════════════
  // PHASE 5: DELIVERY & BONDING (Week 58)
  // ═══════════════════════════════════════════════
  return await delivery(neonate, {
    method: "controlled_extraction",
    immediate_skin_to_skin: true,
    cord_clamping: "delayed_optimal",
    newborn_screening: "comprehensive",
    parent_bonding_protocol: "immediate_and_continuous"
  });
}

// RESULT: A healthy, genetically screened, optimally developed
// infant — delivered with zero maternal physical risk.`}</CodeBlock>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">What the Parents Experience</h2>
      <div className="prose-body text-muted-foreground space-y-4">
        <p>
          It's important to understand that artificial birth doesn't mean a cold, clinical, emotionally distant process. The parental experience is designed to be deeply personal and bonding:
        </p>

        <h3 className="font-mono text-lg font-semibold text-foreground mt-6">During Gamete Generation (Weeks 1-16)</h3>
        <p>
          Parents provide a blood sample and wait. They receive regular updates on iPSC development and gamete maturation. This phase is invisible to the parents — like waiting for lab results.
        </p>

        <h3 className="font-mono text-lg font-semibold text-foreground mt-6">During Embryo Selection (Weeks 16-20)</h3>
        <p>
          Parents meet with genetic counselors to review screening results. They participate in the selection process — choosing an embryo free of disease, with full understanding of what was screened and why. This is informed, empowered decision-making about their child's health.
        </p>

        <h3 className="font-mono text-lg font-semibold text-foreground mt-6">During Gestation (Weeks 20-58)</h3>
        <p>
          This is where the experience becomes rich and emotional. Parents can:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong className="text-foreground">Visit the facility</strong> and see their developing baby through the transparent biobag</li>
          <li><strong className="text-foreground">Talk and sing</strong> to the fetus through audio channels — research shows fetuses recognize voices</li>
          <li><strong className="text-foreground">Feel movements</strong> via haptic feedback devices that translate fetal kicks and turns into tactile sensations</li>
          <li><strong className="text-foreground">Monitor remotely</strong> via a smartphone app showing real-time vital signs, growth charts, and even live camera feeds</li>
          <li><strong className="text-foreground">Attend milestones</strong> — first heartbeat visible, first movements detected, first response to parent's voice</li>
          <li><strong className="text-foreground">Prepare at their own pace</strong> — without the physical exhaustion and health risks of pregnancy</li>
        </ul>

        <h3 className="font-mono text-lg font-semibold text-foreground mt-6">Delivery and Beyond</h3>
        <p>
          When the AI system determines the fetus has reached full developmental maturity, parents are notified and delivery is scheduled at their convenience. The infant is extracted in a controlled, calm environment. Immediate skin-to-skin contact is initiated. Both parents — regardless of sex — can bond equally from moment one.
        </p>
      </div>

      <InfoCard variant="info" title="Equal parenthood from day one">
        One of the most profound social implications: both parents begin their relationship with the child on exactly equal footing. Neither has endured physical trauma. Neither has had their career interrupted. Neither has a "biological advantage" in bonding. Parenthood truly begins as a shared, equal experience.
      </InfoCard>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Comparison: Natural vs. Artificial Birth — The Full Picture</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-muted/50">
              <th className="text-left p-3 font-mono text-foreground">Dimension</th>
              <th className="text-left p-3 font-mono text-foreground">Natural Birth</th>
              <th className="text-left p-3 font-mono text-foreground">Artificial Birth</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground text-xs">
            {[
              ["Physical risk to mother", "Significant (death, injury, chronic conditions)", "Zero"],
              ["Genetic disease risk", "Dependent on parental genetics (carrier screening limited)", "Near-zero (comprehensive screening of hundreds of embryos)"],
              ["Preterm birth", "10% of births", "0% (controlled delivery timing)"],
              ["Fetal toxin exposure", "Unavoidable (pollution, medication, diet)", "Zero (controlled environment)"],
              ["Monitoring quality", "Periodic, limited parameters", "Continuous, comprehensive, AI-analyzed"],
              ["Nutritional optimization", "Maternal diet dependent", "Precisely calibrated to developmental needs"],
              ["Parental career impact", "Significant (especially for mother)", "Minimal (no physical recovery needed)"],
              ["Reproductive age limit", "35-45 for most women", "None (IVG generates fresh gametes at any age)"],
              ["Access equality", "Requires functioning female reproductive system", "Any person with somatic cells"],
              ["Bonding opportunity", "Mother-centric during pregnancy", "Equal for all parents throughout"],
              ["Delivery experience", "Unpredictable, often traumatic", "Planned, calm, controlled"],
              ["Postpartum recovery", "6-12 weeks minimum, often longer", "None required (no physical pregnancy)"],
            ].map(([dim, nat, art]) => (
              <tr key={dim} className="border-t border-border">
                <td className="p-3 font-mono text-foreground">{dim}</td>
                <td className="p-3">{nat}</td>
                <td className="p-3 text-primary">{art}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 flex justify-between">
        <Link to="/artificial-wombs/current" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-mono text-sm font-semibold hover:bg-muted transition-colors">
          <ArrowLeft className="h-4 w-4" /> Artificial Wombs
        </Link>
        <Link to="/safety" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold hover:bg-primary/90 transition-colors">
          Safety & Ethics <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}
