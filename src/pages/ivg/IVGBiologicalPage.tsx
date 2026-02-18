import EndpointHeader from "@/components/docs/EndpointHeader";
import SectionDivider from "@/components/docs/SectionDivider";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";

export default function IVGBiologicalPage() {
  return (
    <>
      <EndpointHeader
        title="Natural Gametogenesis — Biological Explanation"
        description="Hyper-detailed visual overview of the natural processes of egg (oogenesis) and sperm (spermatogenesis) formation in humans, including causes and mechanisms."
      />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Gametes Structure</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Basic anatomical comparison of mature human egg (ovum) and sperm (spermatozoon), highlighting structural differences.
      </p>
      <img
        src="https://as1.ftcdn.net/jpg/12/85/49/28/1000_F_1285492845_k8pmfPbHyRroAm32ebjMvwfg9JmZ4yu7.jpg"
        alt="Human gamete structure egg and sperm diagram"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://stock.adobe.com/images/structure-of-human-gametes-egg-and-sperm-structure-anatomy-human-egg-or-ovum-structure-and-human-sperm-or-spermatozoa-for-health-education-infographic-illustration/1285492845"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Structure of human gametes
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Meiosis: The Key Process</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Overview of meiosis — the specialized cell division that reduces chromosome number by half and enables genetic diversity in gametes.
      </p>
      <img
        src="https://microbenotes.com/wp-content/uploads/2020/06/Meiosis-definition-purpose-stages-applications-with-diagram.jpg"
        alt="Detailed diagram of meiosis stages in human gametogenesis"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://microbenotes.com/meiosis/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Meiosis: Definition, purpose, stages, applications with diagram
      </a>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Genetic Recombination During Meiosis</h3>
      <p className="text-base text-muted-foreground mb-6">
        Crossing-over and chiasmata formation — the mechanism responsible for genetic shuffling and new allele combinations.
      </p>
      <img
        src="https://mediasvc.eurekalert.org/Api/v1/Multimedia/ed1ab043-7b41-4abf-a3b5-fe973af592eb/Rendition/low-res/Content/Public"
        alt="Genetic recombination during meiosis illustration"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.eurekalert.org/multimedia/717320"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Equal and Unequal Crossovers During Meiosis
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Natural Oogenesis (Egg Formation)</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Step-by-step development of female gametes from oogonia to mature ovum, occurring mostly before birth and completing at fertilization.
      </p>
      <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/20240509125126/Diagram-of-Oogenesis-1.webp"
        alt="Stages of human oogenesis diagram with labels"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.geeksforgeeks.org/biology/diagram-of-oogenesis/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Diagram of Oogenesis
      </a>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Hormonal Regulation of Oogenesis</h3>
      <p className="text-base text-muted-foreground mb-6">
        Interplay of FSH, LH, estrogen, and progesterone across the menstrual cycle that controls follicle development and ovulation.
      </p>
      <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/20220926131155/MenstrualCycle.png"
        alt="Hormonal regulation of oogenesis in females chart"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.geeksforgeeks.org/biology/oogenesis/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: What is Oogenesis?
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Natural Spermatogenesis (Sperm Formation)</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Continuous production of spermatozoa in the seminiferous tubules from puberty onward, resulting in millions of sperm daily.
      </p>
      <img
        src="https://cdn.britannica.com/49/135449-050-D1730B7E/spermatogenesis-human-anatomy.jpg"
        alt="Stages of human spermatogenesis diagram with labels"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.britannica.com/science/spermatogenesis"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Spermatogenesis | Description & Process
      </a>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Hormonal Regulation of Spermatogenesis</h3>
      <p className="text-base text-muted-foreground mb-6">
        Negative feedback loop involving GnRH, FSH, LH, and testosterone that maintains continuous sperm production via Sertoli and Leydig cells.
      </p>
      <img
        src="https://iastate.pressbooks.pub/app/uploads/sites/43/2023/02/Slide1-e1701380214733.png"
        alt="Hormonal regulation of spermatogenesis in males chart"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://iastate.pressbooks.pub/humanreproduction/chapter/new/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Hormonal Regulation in the Male Reproduction
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Comparison of Oogenesis and Spermatogenesis</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Key biological differences between male and female gamete formation — number of gametes, timing, cytoplasmic distribution, and outcome.
      </p>
      <img
        src="https://www.vedantu.com/seo/content-images/a2523eeb-f508-4243-b1dc-8039db5bb707_1..png"
        alt="Comparison of oogenesis and spermatogenesis processes"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.vedantu.com/biology/differences-between-spermatogenesis-and-oogenesis"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Differences Between Spermatogenesis and Oogenesis
      </a>


      <div className="mt-12 flex justify-between">
        <Link to="/problem-statement" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-mono text-sm font-semibold hover:bg-muted transition-colors">
          <ArrowLeft className="h-4 w-4" /> Problem Statement
        </Link>
        <Link to="/ivg/technical" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold hover:bg-primary/90 transition-colors">
          IVG: Technical Approach <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}