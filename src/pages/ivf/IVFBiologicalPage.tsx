import EndpointHeader from "@/components/docs/EndpointHeader";
import SectionDivider from "@/components/docs/SectionDivider";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function IVFBiologicalPage() {
  return (
    <>
      <EndpointHeader
        title="Natural Fertilization & Implantation — Biological Explanation"
        description="Hyper-detailed visual overview of the natural processes of fertilization, early embryonic development, and implantation in humans, including causes and mechanisms that IVF seeks to replicate."
      />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">The Female Reproductive Anatomy</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Anatomical overview of the female reproductive system, showing the ovaries, fallopian tubes, uterus, and cervix — the organs central to natural conception and IVF.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Scheme_female_reproductive_system-en.svg/1200px-Scheme_female_reproductive_system-en.svg.png"
        alt="Diagram of female reproductive system anatomy"
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

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">The Menstrual Cycle & Ovulation</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Overview of the menstrual cycle phases — follicular, ovulatory, and luteal — and the hormonal cascade (FSH, LH, estrogen, progesterone) that drives egg maturation and release.
      </p>
      <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/20220926131155/MenstrualCycle.png"
        alt="Hormonal changes across the menstrual cycle diagram"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.geeksforgeeks.org/biology/oogenesis/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Oogenesis and Menstrual Cycle — GeeksforGeeks
      </a>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Follicle Development & Ovulation</h3>
      <p className="text-base text-muted-foreground mb-6">
        Primordial follicle recruitment, antral follicle growth, the LH surge, and final oocyte release — the process IVF replicates via controlled ovarian hyperstimulation.
      </p>
      <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/20240509125126/Diagram-of-Oogenesis-1.webp"
        alt="Follicle development and ovulation stages diagram"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.geeksforgeeks.org/biology/diagram-of-oogenesis/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Diagram of Oogenesis — GeeksforGeeks
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Natural Fertilization</h2>
      <p className="text-lg text-muted-foreground mb-6">
        How sperm travels through the female reproductive tract, capacitation, acrosome reaction, zona pellucida penetration, and fusion with the oocyte at the ampulla of the fallopian tube.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Fertilization.svg/1200px-Fertilization.svg.png"
        alt="Diagram of sperm fertilizing egg natural process"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://en.wikipedia.org/wiki/Fertilisation"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Fertilisation — Wikipedia
      </a>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Sperm Capacitation & the Acrosome Reaction</h3>
      <p className="text-base text-muted-foreground mb-6">
        The biochemical changes sperm undergo in the female reproductive tract that enable zona pellucida binding and membrane fusion — directly relevant to ICSI in IVF.
      </p>
      <img
        src="https://cdn.britannica.com/49/135449-050-D1730B7E/spermatogenesis-human-anatomy.jpg"
        alt="Diagram of sperm structure and capacitation process"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.britannica.com/science/spermatogenesis"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Spermatogenesis | Britannica
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Early Embryonic Development (Days 1–6)</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Zygote cleavage from 2-cell to morula to blastocyst — the developmental window that IVF laboratories monitor and select for transfer or cryopreservation.
      </p>
      <img
        src="https://microbenotes.com/wp-content/uploads/2020/06/Meiosis-definition-purpose-stages-applications-with-diagram.jpg"
        alt="Early embryo development stages from zygote to blastocyst"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://microbenotes.com/meiosis/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Cell Division Stages — Microbenotes
      </a>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Blastocyst Structure</h3>
      <p className="text-base text-muted-foreground mb-6">
        The inner cell mass (ICM), trophectoderm, and blastocoel — the key structures that determine implantation potential and embryo quality grading in IVF clinics.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Blastocyst_English.svg/1200px-Blastocyst_English.svg.png"
        alt="Blastocyst anatomy diagram with inner cell mass and trophectoderm"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://en.wikipedia.org/wiki/Blastocyst"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Blastocyst — Wikipedia
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Implantation & Endometrial Receptivity</h2>
      <p className="text-lg text-muted-foreground mb-6">
        How the blastocyst hatches from the zona pellucida, adheres to the endometrium, and invades the decidua — the final step that determines IVF success.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Blastocyst_Implantation.svg/1200px-Blastocyst_Implantation.svg.png"
        alt="Diagram of blastocyst implantation into endometrium"
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

      <div className="mt-12 flex justify-between">
        <Link to="/problem-statement" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-mono text-sm font-semibold hover:bg-muted transition-colors">
          <ArrowLeft className="h-4 w-4" /> Problem Statement
        </Link>
        <Link to="/ivf/technical" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold hover:bg-primary/90 transition-colors">
          IVF: Technical Approach <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}