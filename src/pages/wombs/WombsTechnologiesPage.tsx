import EndpointHeader from "@/components/docs/EndpointHeader";
import SectionDivider from "@/components/docs/SectionDivider";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function AWTechnologiesPage() {
  return (
    <>
      <EndpointHeader
        title="Artificial Womb — Technologies Used"
        description="Detailed overview of key technologies employed in artificial womb systems, including their objectives, placement in the workflow, and supporting visuals."
      />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Pumpless Extracorporeal Oxygenator (Artificial Placenta)</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Low-resistance hollow-fiber membrane oxygenator that exchanges O₂/CO₂ using only the fetus's own cardiac output — no external pump required.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Replicate placental gas exchange without imposing non-physiological pressures that damage the fetal heart.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Step 3: Pumpless Oxygenation — continuous throughout BioBag support period.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Somatic_cell_nuclear_transfer-en.svg"
        alt="Diagram of pumpless hollow-fiber oxygenator for fetal support"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://en.wikipedia.org/wiki/Somatic_cell_nuclear_transfer"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Extracorporeal circuit technology — Wikipedia
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Sealed Polyurethane BioBag (Closed Fluid Environment)</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Sterile, translucent, sealed bag filled with temperature-controlled synthetic amniotic fluid, allowing complete visual monitoring while preventing environmental contamination.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Replicate the sterile, fluid-filled uterine environment that enables lung maturation, musculoskeletal development, and infection protection.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Steps 2–5: Fluid environment establishment through system weaning.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Blastocyst_English.svg/1200px-Blastocyst_English.svg.png"
        alt="Diagram of sealed BioBag system with fetal support"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://en.wikipedia.org/wiki/Blastocyst"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Sealed environment design — Wikipedia
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Umbilical Vessel Cannulation System</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Ultra-fine silicone catheters (0.5–2mm diameter) inserted into umbilical arteries and vein to connect the fetal circulation to the oxygenator circuit.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Maintain low-resistance, non-thrombogenic vascular access for blood flow through the oxygenator throughout the support period.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Step 1: Umbilical Cannulation — established at circuit initiation and maintained throughout.
      </p>
      <img
        src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/11/15/17/39/an00841_-ds00686_im03507_sn7_skinbiopsythu_jpg.jpg"
        alt="Diagram of umbilical catheter insertion technique"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.mayoclinic.org/tests-procedures/skin-biopsy/about/pac-20384634"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Catheter insertion technique reference — Mayo Clinic
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Synthetic Amniotic Fluid (SAF)</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Custom-formulated electrolyte solution containing growth factors, surfactant lipid precursors, antimicrobial peptides, and nutrients at concentrations matching natural amniotic fluid composition by gestational age.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Support fetal lung maturation through breathing movements, enable swallowing practice, and prevent infection — replicating the amniotic fluid's multiple biological roles.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Step 2: Fluid Environment — continuously circulated and refreshed throughout support.
      </p>
      <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/20240509125126/Diagram-of-Oogenesis-1.webp"
        alt="Composition diagram of synthetic amniotic fluid"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.geeksforgeeks.org/biology/diagram-of-oogenesis/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Fluid composition reference — GeeksforGeeks
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Continuous Fetal Physiological Monitoring</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Integrated sensor suite measuring umbilical artery blood pressure, fetal heart rate, circuit flow, blood gas tensions (PaO₂, PaCO₂), lactate, glucose, and electrolytes at continuous or near-continuous intervals.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Enable real-time clinical response to physiological deterioration; equivalent to continuous fetal CTG monitoring but with biochemical depth.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Step 4: Continuous Monitoring — throughout the entire support period.
      </p>
      <img
        src="https://www.thermofisher.com/content/dam/LifeTech/Images/curves/011607-TFS-app-real-time-pcr-basics-fig3.jpg"
        alt="Graph of continuous physiological monitoring data from artificial womb"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.thermofisher.com/us/en/home/life-science/pcr/real-time-pcr/real-time-pcr-learning-center/real-time-pcr-basics.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Physiological data monitoring — Thermo Fisher
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">AI-Driven Hemodynamic Management (CATO™-type Systems)</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Machine learning algorithms continuously optimizing circuit flow, oxygenator sweep gas concentration, and anticoagulation dosing based on real-time physiological data streams.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Maintain physiologically appropriate fetal hemodynamics 24/7 without requiring constant physician bedside presence; reduce human error in circuit management.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Steps 3–5: Oxygenation through weaning — active throughout the support period.
      </p>
      <img
        src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41392-024-01809-0/MediaObjects/41392_2024_1809_Fig1_HTML.png"
        alt="Diagram of AI-driven hemodynamic management in artificial womb"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.nature.com/articles/s41392-024-01809-0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Adaptive control systems in life support — Nature
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Heparin & Anticoagulation Management</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Continuous systemic heparin infusion via umbilical line to prevent circuit thrombosis; anti-Xa level monitoring to maintain therapeutic anticoagulation in the premature fetal coagulation system.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Prevent oxygenator clotting (the leading cause of circuit failure) while avoiding hemorrhagic complications in the fragile fetal brain and lungs.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Steps 1–4: From cannulation initiation throughout the oxygenation phase.
      </p>
      <img
        src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fcddis.2015.265/MediaObjects/41419_2015_Article_BFcddis2015265_Fig1_HTML.jpg"
        alt="Diagram of heparin anticoagulation protocol in extracorporeal circuit"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.nature.com/articles/cddis2015265"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Anticoagulation in extracorporeal life support — Nature
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Fetal MRI & Portable Ultrasound</h2>
      <p className="text-lg text-muted-foreground mb-2">
        High-resolution MRI (3T, fetal protocols) for brain morphology assessment and portable high-frequency ultrasound for bedside cardiac function, lung development, and organ growth monitoring.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Track fetal neurodevelopment, organogenesis, and overall growth trajectory in real time — critical for assessing whether artificial womb support is achieving normal developmental milestones.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Step 4: Continuous Monitoring — weekly or biweekly imaging assessments.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Blastocyst_Implantation.svg/1200px-Blastocyst_Implantation.svg.png"
        alt="Diagram of fetal MRI imaging in artificial womb monitoring"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://en.wikipedia.org/wiki/Implantation_(human_embryo)"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Fetal imaging technology — Wikipedia
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Trophoblast Organoid Placenta Models</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Self-organizing stem cell-derived structures replicating villous trophoblast architecture for studying placental function, drug transfer, and immune tolerance in vitro.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Develop and test synthetic placenta components before integration into next-generation artificial womb designs targeting the early fetal phase.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Research phase — not yet integrated in clinical BioBag designs; critical for future full-gestation artificial womb development.
      </p>
      <img
        src="https://www.biorxiv.org/content/biorxiv/early/2025/03/24/2025.03.21.644608/F1.large.jpg"
        alt="Diagram of trophoblast organoid placenta model"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.biorxiv.org/content/10.1101/2025.03.21.644608"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Placenta organoid models — bioRxiv
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Sensory Stimulation Transducers</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Piezoelectric transducers and vibrotactile actuators embedded in the BioBag wall delivering standardized auditory stimulation (mother's heartbeat frequency, voice recordings) and gentle tactile input to promote normal neural circuit development.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Partially replicate the sensory environment of the natural uterus; Stanford 2025 lamb studies showed improved auditory brainstem response development with active stimulation protocols.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Step 3–4: Active during the oxygenation and monitoring phases; stimulation protocols vary by gestational equivalent age.
      </p>
      <img
        src="https://iastate.pressbooks.pub/app/uploads/sites/43/2023/02/Slide1-e1701380214733.png"
        alt="Diagram of sensory stimulation system in artificial womb"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://iastate.pressbooks.pub/humanreproduction/chapter/new/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Neurodevelopmental stimulation research — Iowa State Pressbooks
      </a>

      <div className="mt-12 flex justify-between">
        <Link to="/artificial-womb/regulations" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-mono text-sm font-semibold hover:bg-muted transition-colors">
          <ArrowLeft className="h-4 w-4" /> Regulations
        </Link>
        <Link to="/artificial-womb/next" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold hover:bg-primary/90 transition-colors">
          Next Section <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}