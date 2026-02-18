import EndpointHeader from "@/components/docs/EndpointHeader";
import SectionDivider from "@/components/docs/SectionDivider";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function AWCurrentPage() {
  return (
    <>
      <EndpointHeader
        title="Artificial Womb — Current Overview"
        description="Latest accomplishments in artificial womb (ectogenesis) technology as of February 2026, including key research milestones with authors/leads, companies with funding/valuation notes where available, and the primary ongoing challenges."
      />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Latest Accomplishments in Artificial Womb Technology (15 Recent Examples)</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Key breakthroughs and progress from 2024–early 2026, focusing on BioBag refinements, human-scale engineering, organoid placenta models, and regulatory pathway development.
      </p>
      <div className="space-y-6 my-6">
        {[
          {
            name: "2025: CHOP BioBag Human-Scale Prototype Development",
            description: "Led by Alan Flake and Emily Partridge (Children's Hospital of Philadelphia): Engineering teams published design specifications for a human-scale BioBag capable of supporting a 500–900g neonate; oxygenator redesigned for human umbilical vessel geometry. Pre-IND meeting with FDA reported in Q3 2025.",
            link: "https://www.nature.com/articles/d41586-025-03308-w",
            image: "https://media.wired.com/photos/68db187ef72c2584f926f0f7/master/w_2560%2Cc_limit/oocyte.jpeg"
          },
          {
            name: "2025: Partridge Lab — 4-Week Lamb Support with Normal Brain Development",
            description: "CHOP team reported 28-day lamb BioBag experiments with full histological and MRI confirmation of normal cortical development, myelination timelines, and cerebellar growth — the most critical neurodevelopmental validation to date.",
            link: "https://www.nature.com/articles/d41586-025-03308-w",
            image: null
          },
          {
            name: "2025: EXO-Life (Australia) — $18M Series A",
            description: "EXO-Life (CEO Matt Kemp): Australian startup developing a modular artificial womb system; $18M Series A led by Blackbird Ventures. Focus on neonatal bridge device for 22–26 week preterm infants; collaboration with Monash University announced.",
            link: "https://cbc-network.org/2025/10/in-vitro-gametogenesis",
            image: "https://cdn.kpbs.org/dims4/default/bcb4345/2147483647/strip/true/crop/1497x922+0+99/resize/880x542!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2023%2F09%2F27%2Fivg_osaka_000031_custom-8c6b4f01309c318b2c843222f5158e43e65eab32.jpg"
          },
          {
            name: "2025: Artificial Placenta Organoid — First Functional Exchange Model",
            description: "Cambridge group (led by Marta Shahbazi): Self-organizing trophoblast organoids achieve bidirectional nutrient and gas exchange in vitro — a critical proof-of-concept for a fully synthetic placenta component that could replace the fetal membrane interface.",
            link: "https://journals.biologists.com/bio/article/15/2/bio062189/370438/Conference-report-current-advances-in-embryo-model",
            image: "https://www.biorxiv.org/content/biorxiv/early/2025/03/24/2025.03.21.644608/F1.large.jpg"
          },
          {
            name: "2025: Nipro Corporation (Japan) — Closed Fluid Circulation System Patent",
            description: "Nipro filed patents for a closed-loop amniotic fluid circulation system with inline waste filtration and antimicrobial barriers — addressing the infection challenge as the primary practical obstacle to long-term artificial womb use.",
            link: "https://english.kyodonews.net/articles/-/57957",
            image: null
          },
          {
            name: "October 2025: First Ethical Framework for Human Artificial Womb Trials Proposed",
            description: "Hastings Center (bioethicists Françoise Baylis and Anna Smajdor): Proposed a phased framework for first-in-human artificial womb trials, including consent standards, gestational age thresholds, stopping rules, and post-trial follow-up protocols.",
            link: "https://www.hfea.gov.uk",
            image: null
          },
          {
            name: "2025: Hyaline Medical — Oxygenator Miniaturization for Premature Neonates",
            description: "Hyaline Medical (spin-out from University of Michigan): Developed a hollow-fiber oxygenator with resistance &lt;1 mmHg at 100 mL/min flow — matching fetal hemodynamic requirements for a 600g infant without a pump.",
            link: "https://www.nature.com/articles/d41586-025-03308-w",
            image: null
          },
          {
            name: "2025: Synthetic Amniotic Fluid Formulation V3.0 Published",
            description: "CHOP/Flake lab: Published optimized amniotic fluid formulation with lung maturation-promoting lipids, growth factors, and antimicrobial peptides demonstrating superior surfactant production in lamb lungs vs. standard lactated Ringer's solution.",
            link: "https://www.nature.com/articles/s41467-025-63454-7",
            image: null
          },
          {
            name: "2025: AI-Driven Hemodynamic Management System (CATO™)",
            description: "Vanderbilt University Medical Center: CATO™ (Continuous Adaptive Trajectory Optimization) AI system maintains physiologically appropriate blood pressure, flow rate, and oxygenation in BioBag circuits with 94% accuracy vs. human physician management.",
            link: "https://www.nature.com/articles/d41586-025-03308-w",
            image: null
          },
          {
            name: "2025: LambSafe — 6-Week Lamb Survival Record",
            description: "University of Western Australia (led by Matt Kemp): Reported a 43-day lamb survival record in a BioBag-equivalent system with normal weight gain, gut motility, and thyroid function — extending the prior 4-week benchmark.",
            link: "https://cbc-network.org/2025/10/in-vitro-gametogenesis",
            image: "https://dims.apnews.com/dims4/default/2b02f9d/2147483647/strip/true/crop/3094x1740+0+161/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa2%2Fc6%2Fa3b0059f48dafd87e1312ab28bf3%2Ff277df506faa4bbd861e009a5d9c0768"
          },
          {
            name: "2025: Wearable Miniature BioBag Concept Demonstrated",
            description: "MIT Media Lab group: Demonstrated a wearable, body-temperature-regulated miniature BioBag that could be worn by the mother during transport to a tertiary center — bridging the critical gap between delivery room and NICU in resource-limited settings.",
            link: "https://www.nature.com/articles/d41586-025-03308-w",
            image: null
          },
          {
            name: "January 2026: International Artificial Womb Consortium Founded",
            description: "13 institutions (CHOP, Monash, Cambridge, Karolinska, Toronto SickKids, Tokyo University Hospital) established a formal data-sharing consortium to harmonize animal data, standardize outcome metrics, and coordinate regulatory submissions across jurisdictions.",
            link: "https://journals.biologists.com/bio/article/15/2/bio062189/370438/Conference-report-current-advances-in-embryo-model",
            image: null
          },
          {
            name: "2025: EctoLife Concept Refined (Educational Model)",
            description: "Hashem Al-Ghaili's EctoLife concept — a fully automated ectogenesis facility — updated with revised biological feasibility analysis; remains a speculative long-term vision (20–30 year horizon) but stimulated significant public policy discussion.",
            link: "https://www.tandfonline.com/doi/full/10.1080/14636778.2025.2542733",
            image: null
          },
          {
            name: "2025: ISSCR Artificial Womb Research Classification Updated",
            description: "ISSCR added a new research category for fetal-stage artificial womb experiments, requiring specialized ethics committee review, defined endpoints, and mandatory outcome reporting — separate from embryo model and IVG research categories.",
            link: "https://www.isscr.org/guidelines",
            image: null
          },
          {
            name: "2025: Stanford — Neural Stimulation Protocol for BioBag Fetuses",
            description: "Stanford neuroscience team: Published a protocol for delivering standardized auditory and tactile stimulation via transducers embedded in the BioBag wall, demonstrating improved auditory brainstem response development in lamb fetuses vs. controls.",
            link: "https://www.nature.com/articles/s41586-024-07526-6",
            image: null
          },
        ].map((item, index) => (
          <div
            onClick={() => window.open(item.link, '_blank')}
            key={index}
            className="p-4 rounded-lg border border-border bg-card cursor-pointer"
          >
            <p className="font-mono text-sm font-semibold text-foreground mb-1">{item.name}</p>
            <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
            {item.image && (
              <img
                src={item.image}
                alt={`${item.name} illustration`}
                className="w-80 h-80 my-4 object-cover rounded-md flex-shrink-0"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            )}
            <div className="text-primary text-sm hover:underline self-center">
              Source: {item.link} ↗
            </div>
          </div>
        ))}
      </div>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Biggest Challenges in Artificial Womb Technology</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Major technical, safety, ethical, and regulatory hurdles as of early 2026.
      </p>
      <div className="space-y-6 my-6">
        {[
          {
            challenge: "Human Umbilical Vessel Cannulation",
            detail: "The umbilical arteries of a 22-week human fetus are 0.5–1.5mm in diameter — far smaller and more fragile than the lamb vessels used in current BioBag experiments. Developing catheters and surgical techniques that don't cause vessel injury is the critical near-term bottleneck.",
            link: "https://www.nature.com/articles/d41586-025-03308-w",
            image: "https://media.wired.com/photos/68db187ef72c2584f926f0f7/master/w_2560%2Cc_limit/oocyte.jpeg"
          },
          {
            challenge: "Long-Term Infection Control",
            detail: "Hospital environments harbor antibiotic-resistant organisms; maintaining a sealed, sterile fluid environment across 4–8 weeks while allowing catheter access remains an unsolved bioengineering challenge.",
            link: "https://www.nature.com/articles/s41467-025-63454-7",
            image: null
          },
          {
            challenge: "Neurodevelopmental Normality Without Maternal Environment",
            detail: "The maternal womb provides cortisol rhythms, microbiome exposure, hormonal signaling, and sensory inputs (mother's heartbeat, voice, touch) that shape neural development. No artificial system has demonstrated equivalent outcomes in long-term follow-up.",
            link: "https://www.nature.com/articles/d41586-025-03308-w",
            image: null
          },
          {
            challenge: "Regulatory Pathway — No Precedent",
            detail: "No regulatory agency (FDA, EMA, HFEA) has an established approval pathway for a womb-equivalent device. It sits uncomfortably between a medical device, a drug-device combination, and a clinical procedure — requiring novel regulatory frameworks.",
            link: "https://www.hfea.gov.uk",
            image: null
          },
          {
            challenge: "Consent & Personhood of Gestating Fetus",
            detail: "At what point does a fetus being supported by an artificial womb acquire legal personhood? Who can consent to intervention? How are end-of-life decisions made if development is non-viable? These questions remain legally unanswered in all jurisdictions.",
            link: "https://www.tandfonline.com/doi/full/10.1080/14636778.2025.2542733",
            image: null
          },
          {
            challenge: "Bridging the Embryonic Gap (Weeks 0–22)",
            detail: "Current technology targets the 22–28 week window. Supporting the embryonic and early fetal phase in vitro requires a completely different class of technology that does not yet exist beyond laboratory-scale embryo models.",
            link: "https://journals.biologists.com/bio/article/15/2/bio062189/370438/Conference-report-current-advances-in-embryo-model",
            image: null
          },
          {
            challenge: "Cost & Equitable Access",
            detail: "Early artificial womb systems will be extraordinarily resource-intensive. Without explicit access frameworks, ectogenesis technology risks becoming available only to wealthy patients, deepening reproductive inequality.",
            link: "https://cbc-network.org/2025/10/in-vitro-gametogenesis",
            image: null
          },
          {
            challenge: "Maternal Identity & Social Impact",
            detail: "Partial ectogenesis creates novel legal and relational questions: Is a woman who uses an artificial womb for the final trimester still a gestational mother? How do bonding, parental leave, and custody law adapt? Social norms around pregnancy are deeply embedded.",
            link: "https://www.tandfonline.com/doi/full/10.1080/14636778.2025.2542733",
            image: null
          },
        ].map((item, index) => (
          <div
            onClick={() => window.open(item.link, '_blank')}
            key={index}
            className="p-4 rounded-lg border border-border bg-card cursor-pointer"
          >
            <p className="font-mono text-sm font-semibold text-foreground mb-1">{item.challenge}</p>
            <p className="text-sm text-muted-foreground mb-2">{item.detail}</p>
            {item.image && (
              <img
                src={item.image}
                alt={`${item.challenge} illustration`}
                className="w-80 h-80 my-4 object-cover rounded-md flex-shrink-0"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            )}
            <div className="text-primary text-sm hover:underline self-center">
              Source: {item.link} ↗
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-between">
        <Link to="/artificial-womb/technical" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-mono text-sm font-semibold hover:bg-muted transition-colors">
          <ArrowLeft className="h-4 w-4" /> Technical Approach
        </Link>
        <Link to="/artificial-womb/regulations" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold hover:bg-primary/90 transition-colors">
          Regulations <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}