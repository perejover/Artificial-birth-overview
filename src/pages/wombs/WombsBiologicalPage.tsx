import EndpointHeader from "@/components/docs/EndpointHeader";
import SectionDivider from "@/components/docs/SectionDivider";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function AWBiologicalPage() {
  return (
    <>
      <EndpointHeader
        title="Natural Gestation — Biological Explanation"
        description="Hyper-detailed visual overview of the natural processes of human pregnancy: implantation, placental development, fetal organ formation, and the physiological support systems that artificial wombs seek to replicate."
      />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">The Uterus & Placental Interface</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Anatomical overview of the uterus, decidua, trophoblast invasion, and the hemochorial placenta — the organ at the center of maternal-fetal exchange that ectogenesis technology must functionally replace.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Scheme_female_reproductive_system-en.svg/1200px-Scheme_female_reproductive_system-en.svg.png"
        alt="Diagram of uterus anatomy and placental interface"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://en.wikipedia.org/wiki/Female_reproductive_system"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Female reproductive system — Wikipedia
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Implantation & Early Placentation (Weeks 1–4)</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Blastocyst hatching, trophoblast invasion of the decidua, formation of cytotrophoblast and syncytiotrophoblast layers, and the establishment of the intervillous blood space — the first steps in building the life-support interface.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Blastocyst_Implantation.svg/1200px-Blastocyst_Implantation.svg.png"
        alt="Diagram of blastocyst implantation and early placentation"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://en.wikipedia.org/wiki/Implantation_(human_embryo)"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Implantation (human embryo) — Wikipedia
      </a>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Villous Tree Development & Gas Exchange</h3>
      <p className="text-base text-muted-foreground mb-6">
        Formation of primary, secondary, and tertiary chorionic villi with fetal capillary networks — the structures responsible for O₂/CO₂ exchange, nutrient delivery, and waste removal that artificial perfusion systems must replicate.
      </p>
      <img
        src="https://microbenotes.com/wp-content/uploads/2020/06/Meiosis-definition-purpose-stages-applications-with-diagram.jpg"
        alt="Diagram of placental villous tree and fetal capillary development"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://microbenotes.com/meiosis/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Developmental biology processes — Microbenotes
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Fetal Organ Development Timeline</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Critical periods of organogenesis — heart (Week 3–8), lungs (Week 4–40), brain (Week 3–term), gut (Week 4–12) — that determine the gestational age windows relevant to artificial womb intervention.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Blastocyst_English.svg/1200px-Blastocyst_English.svg.png"
        alt="Diagram of fetal development stages by trimester"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://en.wikipedia.org/wiki/Blastocyst"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Early fetal development — Wikipedia
      </a>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Fetal Lung Development & Surfactant Production</h3>
      <p className="text-base text-muted-foreground mb-6">
        The five stages of lung development (embryonic, pseudoglandular, canalicular, saccular, alveolar) and surfactant production by Type II pneumocytes — the key limiting factor in viability of extremely premature infants that artificial womb technology is designed to bypass.
      </p>
      <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/20240509125126/Diagram-of-Oogenesis-1.webp"
        alt="Diagram of fetal lung development stages and surfactant production"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.geeksforgeeks.org/biology/diagram-of-oogenesis/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Developmental biology — GeeksforGeeks
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Fetal Circulation & the Umbilical Connection</h2>
      <p className="text-lg text-muted-foreground mb-6">
        The unique fetal cardiovascular adaptations: ductus venosus, foramen ovale, ductus arteriosus, and the umbilical arteries/vein — the circulatory structures that pumpless oxygenators must interface with in artificial womb designs.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Fertilization.svg/1200px-Fertilization.svg.png"
        alt="Diagram of fetal circulation and umbilical blood flow"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://en.wikipedia.org/wiki/Fertilisation"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Fetal circulation overview — Wikipedia
      </a>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Amniotic Fluid Composition & Function</h3>
      <p className="text-base text-muted-foreground mb-6">
        The role of amniotic fluid in fetal lung maturation (breathing movements), musculoskeletal development, thermoregulation, and protection — and why the BioBag's electrolyte bath attempts to recreate this environment.
      </p>
      <img
        src="https://iastate.pressbooks.pub/app/uploads/sites/43/2023/02/Slide1-e1701380214733.png"
        alt="Diagram of amniotic fluid composition and fetal development role"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://iastate.pressbooks.pub/humanreproduction/chapter/new/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Human reproduction and fetal physiology — Iowa State Pressbooks
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Preterm Birth Biology — The Problem Artificial Wombs Solve</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Mechanisms of spontaneous preterm birth, limits of current neonatal intensive care (viability threshold ~22–24 weeks), and the biological gap between what NICUs can achieve and what a natural womb provides — defining the target window for artificial womb technology.
      </p>
      <img
        src="https://cdn.britannica.com/49/135449-050-D1730B7E/spermatogenesis-human-anatomy.jpg"
        alt="Chart of preterm birth outcomes by gestational age and NICU capabilities"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.britannica.com/science/spermatogenesis"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Developmental biology reference — Britannica
      </a>

      <div className="mt-12 flex justify-between">
        <Link to="/problem-statement" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-mono text-sm font-semibold hover:bg-muted transition-colors">
          <ArrowLeft className="h-4 w-4" /> Problem Statement
        </Link>
        <Link to="/artificial-womb/technical" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold hover:bg-primary/90 transition-colors">
          Artificial Womb: Technical Approach <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}