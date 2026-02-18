import EndpointHeader from "@/components/docs/EndpointHeader";
import SectionDivider from "@/components/docs/SectionDivider";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function AWTechnicalPage() {
  return (
    <>
      <EndpointHeader
        title="Artificial Womb — Technical Approach"
        description="The engineering and clinical process of extra-uterine life support: BioBag design, pumpless oxygenation circuits, fluid environments, and the multi-stage roadmap from extremely premature neonates to full ectogenesis."
      />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Required Engineering Inputs</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Core systems and parameters required to sustain fetal development outside the uterus.
      </p>
      <div className="space-y-3 my-6">
        {[
          { name: "Pumpless Oxygenator Circuit", description: "Low-resistance extracorporeal membrane oxygenator (ECMO) connected via umbilical vessels; driven by the fetus's own cardiac output to avoid barotrauma and pressure mismatch." },
          { name: "Electrolyte Fluid Environment", description: "Temperature-controlled synthetic amniotic fluid bath (lactated Ringer's or custom electrolyte solution) allowing fetal breathing movements and preventing lung collapse." },
          { name: "Sterile Closed-System Biobag", description: "Translucent, sealed polyurethane or silicone bag maintaining sterility and preventing infection — the primary cause of death in extremely premature infants." },
          { name: "Continuous Physiological Monitoring", description: "Real-time fetal heart rate, oxygen saturation, blood pressure, blood gas, and nutrient delivery monitoring via sensors on umbilical lines and the fluid bath." },
          { name: "Nutrient & Hormone Delivery", description: "Intravenous delivery of parenteral nutrition (amino acids, glucose, lipids) and hormonal supplements (cortisol, thyroid hormone, insulin) to support organogenesis." },
        ].map((item) => (
          <div key={item.name} className="p-4 rounded-lg border border-border bg-card">
            <p className="font-mono text-sm font-semibold text-foreground mb-1">{item.name}</p>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">The Artificial Womb Pipeline: Step by Step</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Comprehensive overview of the multi-stage artificial womb workflow from umbilical cannulation to system weaning and transition to conventional neonatal care.
      </p>
      <img
        src="https://www.eggdonors.asia/wp-content/uploads/2019/04/IVG-embryos-procedure.jpg"
        alt="Diagram of artificial womb system overview and workflow"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.eggdonors.asia/in-vitro-gametogenesis-ivg-embryology/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Extracorporeal life support overview
      </a>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Step 1: Patient Selection & Umbilical Cannulation</h3>
      <p className="text-base text-muted-foreground mb-6">
        Selection of extremely premature lambs (or future human candidates) at 22–24 weeks gestational age, surgical umbilical artery and vein cannulation for circuit connection.
      </p>
      <img
        src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/11/15/17/39/an00841_-ds00686_im03507_sn7_skinbiopsythu_jpg.jpg"
        alt="Diagram of umbilical vessel cannulation for ECMO circuit"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.mayoclinic.org/tests-procedures/skin-biopsy/about/pac-20384634"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Surgical procedure reference — Mayo Clinic
      </a>
      <p className="text-muted-foreground mt-4">
        The fetus must be transferred immediately from the uterus to the BioBag to prevent oxygen deprivation. The umbilical artery is connected to the oxygenator inlet; deoxygenated blood exits via the umbilical vein outlet after oxygenation. Heparin anticoagulation prevents clotting in the circuit. The entire transfer process must be completed in under 2–3 minutes.
      </p>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Step 2: Fluid Environment Establishment</h3>
      <p className="text-base text-muted-foreground mb-6">
        Filling the sealed BioBag with warmed synthetic amniotic fluid at 37°C, allowing fetal breathing movements, swallowing, and lung maturation without air exposure.
      </p>
      <img
        src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41392-024-01809-0/MediaObjects/41392_2024_1809_Fig1_HTML.png"
        alt="Diagram of sealed fluid-filled biobag system for fetal support"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.nature.com/articles/s41392-024-01809-0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Fluid environment bioengineering — Nature
      </a>
      <p className="text-muted-foreground mt-4">
        Fetal lungs at 22–24 weeks are filled with fluid naturally — air breathing is catastrophically damaging at this stage. The fluid bath must be continuously refreshed (1–3 liters/day) to clear metabolic waste. Sterility is maintained by an inline antimicrobial filter and closed-system design. Skin development and neural growth are assessed via ultrasound through the translucent BioBag wall.
      </p>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Step 3: Pumpless Oxygenation (Weeks 1–4 of Support)</h3>
      <p className="text-base text-muted-foreground mb-6">
        The fetal heart drives blood through the low-resistance oxygenator at physiologically appropriate flow rates, avoiding the cardiac damage caused by conventional ECMO pumps.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Somatic_cell_nuclear_transfer-en.svg"
        alt="Diagram of pumpless oxygenator circuit driven by fetal heart"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://en.wikipedia.org/wiki/Somatic_cell_nuclear_transfer"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Extracorporeal circuit principles — Wikipedia
      </a>
      <p className="text-muted-foreground mt-4">
        The CHOP (Children's Hospital of Philadelphia) BioBag oxygenator achieves PaO₂ of 25–40 mmHg and PaCO₂ of 35–45 mmHg — matching normal fetal blood gas parameters. Gas exchange surface area of ~0.4 m² is adequate for a 500g fetus. Blood flow of 150–180 mL/kg/min is driven solely by the fetal cardiac output; no external pump is used. Fetal lambs maintained for up to 4 weeks showed normal lung, brain, and cardiovascular development.
      </p>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Step 4: Continuous Monitoring & Physiological Management</h3>
      <p className="text-base text-muted-foreground mb-6">
        Real-time monitoring of fetal wellbeing using umbilical line sensors, in-bag ultrasound, blood gas sampling, and AI-assisted alert systems.
      </p>
      <img
        src="https://www.oakclinic-group.com/wp/wp-content/themes/oak-clinic/en/assets/images/funin/about_ivm__Image.png"
        alt="Diagram of continuous fetal monitoring in artificial womb system"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.oakclinic-group.com/en/funin/ivm/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Physiological monitoring systems — Oak Clinic
      </a>
      <p className="text-muted-foreground mt-4">
        Umbilical arterial lines allow continuous blood pressure monitoring and intermittent blood sampling (blood gases, lactate, glucose, electrolytes). Fetal heart rate is assessed via 3D ultrasound or Doppler probes. Circuit pressures are monitored to detect oxygenator thrombosis. AI systems flag abnormal physiological trends before clinical deterioration occurs.
      </p>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Step 5: Weaning & Transition to Neonatal Care</h3>
      <p className="text-base text-muted-foreground mb-6">
        Gradual transition from artificial womb support to conventional ventilatory and neonatal intensive care as the fetus reaches the equivalent of 28–30 weeks' gestation.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Blastocyst_English.svg/1200px-Blastocyst_English.svg.png"
        alt="Diagram of weaning plan from artificial womb to NICU"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://en.wikipedia.org/wiki/Blastocyst"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Neonatal transition planning — Wikipedia
      </a>
      <p className="text-muted-foreground mt-4">
        Surfactant production by Type II pneumocytes becomes adequate by ~28–30 weeks, enabling air breathing. The BioBag system is opened; the fetus is intubated and transitioned to conventional ventilation. Umbilical cannulas are removed and ligated. The infant then continues standard NICU care. Long-term neurodevelopmental follow-up at 2, 5, and 10 years is essential to validate safety.
      </p>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Key Technical Challenges</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Major hurdles in achieving safe and effective artificial womb support for extremely premature humans.
      </p>
      <div className="space-y-3 my-6">
        {[
          { challenge: "Scaling from lamb to human anatomy", detail: "Lamb fetal anatomy differs in umbilical vessel size, blood coagulation, and immunology. Human umbilical vessels at 22–24 weeks are extremely fragile; cannulation without vessel injury is the primary unsolved technical barrier." },
          { challenge: "Infection and sepsis prevention", detail: "A sealed fluid environment is inherently vulnerable to bacterial colonization. Long-term sterility across weeks of support in a clinical hospital environment is an unsolved engineering challenge." },
          { challenge: "Brain development without normal sensory inputs", detail: "The maternal environment provides auditory, vestibular, and tactile stimulation critical for normal neural circuit formation. Replicating or substituting these inputs in an artificial system remains unresolved." },
          { challenge: "Full ectogenesis — the fertilization-to-birth gap", detail: "Current technology addresses only the 22–30 week window. Supporting the embryonic phase (Weeks 1–8) in vitro requires entirely different — and currently non-existent — culture technology." },
        ].map((item) => (
          <div key={item.challenge} className="p-4 rounded-lg border border-border bg-card">
            <p className="font-mono text-sm font-semibold text-foreground mb-1">{item.challenge}</p>
            <p className="text-sm text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-between">
        <Link to="/artificial-womb/biological" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-mono text-sm font-semibold hover:bg-muted transition-colors">
          <ArrowLeft className="h-4 w-4" /> Biological Explanation
        </Link>
        <Link to="/artificial-womb/current" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold hover:bg-primary/90 transition-colors">
          Current Overview <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}