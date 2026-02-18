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
        Basic anatomical comparison of mature human egg (ovum) and sperm (spermatozoon), highlighting structural differences. The human egg cell is one of the largest cells in the body, approximately 100-130 micrometers in diameter, about 20 times larger than a sperm cell. It consists of four main layers: the nucleus containing 23 chromosomes, the cytoplasm (yolk) providing nutrients, the zona pellucida as a protective membrane, and the corona radiata as the outermost nourishing layer. The sperm, in contrast, is much smaller (about 5 micrometers in head diameter) and divided into head (with haploid nucleus, acrosome cap containing enzymes for egg penetration, and centrioles), mid-piece (with mitochondria for energy), and tail (flagellum for propulsion). Most sperm cytoplasm is eliminated during maturation, leaving a streamlined structure optimized for mobility and fertilization.
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
      <img
        src="https://old-ib.bioninja.com.au/_Media/sperm-and-egg_med.jpeg"
        alt="Detailed structure of sperm and egg"
        className="max-w-full h-auto rounded-lg mb-2 mt-4"
      />
      <a
        href="https://old-ib.bioninja.com.au/higher-level/topic-11-animal-physiology/114-sexual-reproduction/egg-and-sperm.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Egg and Sperm | BioNinja
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Meiosis: The Key Process</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Overview of meiosis — the specialized cell division that reduces chromosome number by half and enables genetic diversity in gametes. Meiosis is essential in gametogenesis to produce haploid gametes from diploid germ cells, maintaining constant chromosome numbers across generations and introducing variation through crossing over and independent assortment. It consists of two divisions: Meiosis I (reductional, halving chromosomes) and Meiosis II (equational, similar to mitosis).
      </p>
      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Stages of Meiosis I</h3>
      <p className="text-base text-muted-foreground mb-6">
        Interphase: Cell prepares, DNA replicates (from 2C to 4C). Prophase I: Chromosomes condense, homologous pair (synapsis via synaptonemal complex), crossing over in pachytene substage exchanges genetic material. Metaphase I: Homologs align at equator. Anaphase I: Homologs separate to poles. Telophase I: Nuclei reform, cytokinesis yields two haploid cells.
      </p>
      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Stages of Meiosis II</h3>
      <p className="text-base text-muted-foreground mb-6">
        Prophase II: Chromosomes condense again. Metaphase II: Align at equator. Anaphase II: Sister chromatids separate. Telophase II: Nuclei reform, cytokinesis yields four haploid gametes.
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
      <img
        src="https://www.sciencefacts.net/wp-content/uploads/2020/09/Meiosis-Stages-Diagram.jpg"
        alt="Additional detailed diagram of meiosis stages"
        className="max-w-full h-auto rounded-lg mb-2 mt-4"
      />
      <a
        href="https://www.sciencefacts.net/meiosis.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Meiosis: Definition, Stages, & Purpose with Diagram
      </a>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Genetic Recombination During Meiosis</h3>
      <p className="text-base text-muted-foreground mb-6">
        Crossing-over and chiasmata formation — the mechanism responsible for genetic shuffling and new allele combinations. During prophase I, homologous chromosomes align and exchange segments via crossing over, facilitated by enzymes breaking and rejoining chromatids. Chiasmata are the visible points of exchange. This can be equal (typical, promoting diversity) or unequal (due to transposons, leading to duplications/deletions).
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
        Step-by-step development of female gametes from oogonia to mature ovum, occurring mostly before birth and completing at fertilization. Oogenesis involves multiplication, growth, and maturation phases, producing one functional ovum per cycle with three polar bodies.
      </p>
      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Step 1: Multiplication Phase (Fetal Development)</h3>
      <p className="text-base text-muted-foreground mb-6">
        Oogonia (diploid) multiply via mitosis in the fetal ovary, forming primary oocytes arrested in prophase I. Most degenerate, leaving 60,000-80,000 primary follicles at birth.
      </p>
      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Step 2: Growth Phase (Puberty Onward)</h3>
      <p className="text-base text-muted-foreground mb-6">
        Primary oocytes resume development in menstrual cycles, growing within follicles stimulated by FSH, forming antral follicles and secondary oocytes arrested in metaphase II.
      </p>
      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Step 3: Maturation Phase (Ovulation and Fertilization)</h3>
      <p className="text-base text-muted-foreground mb-6">
        LH surge triggers ovulation of secondary oocyte; fertilization completes meiosis II, forming ovum and second polar body.
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
      <img
        src="https://i.ytimg.com/vi/y6vhaHjDr6I/maxresdefault.jpg"
        alt="Additional detailed steps of oogenesis"
        className="max-w-full h-auto rounded-lg mb-2 mt-4"
      />
      <a
        href="https://www.youtube.com/watch?v=y6vhaHjDr6I"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Genetics | Process of Oogenesis
      </a>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Hormonal Regulation of Oogenesis</h3>
      <p className="text-base text-muted-foreground mb-6">
        Interplay of FSH, LH, estrogen, and progesterone across the menstrual cycle that controls follicle development and ovulation. GnRH from hypothalamus stimulates FSH/LH; FSH promotes follicle growth and estrogen; estrogen feedback triggers LH surge for ovulation; corpus luteum produces progesterone to maintain cycle.
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
      <img
        src="https://ivi-fertility.com/wp-content/uploads/sites/12/2023/06/hormones.jpeg"
        alt="Additional hormonal regulation menstrual cycle diagram"
        className="max-w-full h-auto rounded-lg mb-2 mt-4"
      />
      <a
        href="https://ivi-fertility.com/blog/how-do-hormones-control-the-menstrual-cycle/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: How do hormones control the menstrual cycle: phases, levels
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Natural Spermatogenesis (Sperm Formation)</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Continuous production of spermatozoa in the seminiferous tubules from puberty onward, resulting in millions of sperm daily. Involves spermatocytogenesis (mitosis), meiosis, and spermiogenesis (differentiation).
      </p>
      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Step 1: Spermatocytogenesis</h3>
      <p className="text-base text-muted-foreground mb-6">
        Spermatogonia (stem cells) divide mitotically; some remain as stem cells, others become primary spermatocytes.
      </p>
      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Step 2: Meiosis</h3>
      <p className="text-base text-muted-foreground mb-6">
        Primary spermatocytes undergo Meiosis I to form secondary spermatocytes, then Meiosis II to produce four haploid spermatids.
      </p>
      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Step 3: Spermiogenesis</h3>
      <p className="text-base text-muted-foreground mb-6">
        Spermatids differentiate into mature sperm: nucleus condenses, acrosome forms, tail develops, excess cytoplasm discarded. Sertoli cells provide support.
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
      <img
        src="https://cdn.prod.website-files.com/66ee2fbb803ca97841036c9f/6724440b82de17a60bde8bed_6724416a3a2179d6e806579c_spermatogenisis-iStock-1264913191%2520(1).jpeg"
        alt="Additional detailed steps of spermatogenesis"
        className="max-w-full h-auto rounded-lg mb-2 mt-4"
      />
      <a
        href="https://www.fertilitywise.com/research/understanding-sperm-production"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: The Sperm Production Cycle | Fertilitywise
      </a>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Hormonal Regulation of Spermatogenesis</h3>
      <p className="text-base text-muted-foreground mb-6">
        Negative feedback loop involving GnRH, FSH, LH, and testosterone that maintains continuous sperm production via Sertoli and Leydig cells. GnRH stimulates FSH/LH; LH acts on Leydig cells for testosterone; FSH on Sertoli cells for ABP and spermatogenesis support. Testosterone and inhibin provide feedback to inhibit excess production.
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
        Key biological differences between male and female gamete formation — number of gametes, timing, cytoplasmic distribution, and outcome. Spermatogenesis is continuous from puberty, produces four motile sperm per cell, equal cytokinesis; oogenesis starts in fetus, discontinuous, produces one ovum with polar bodies, unequal cytokinesis.
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
      <img
        src="https://images.wondershare.com/edrawmax/articles2025/spermatogenesis-diagram/spermatogenesis-vs-oogenesis.jpg"
        alt="Additional comparison diagram"
        className="max-w-full h-auto rounded-lg mb-2 mt-4"
      />
      <a
        href="https://edrawmax.wondershare.com/biology/spermatogenesis-diagram.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Process of Spermatogenesis: Sperm Formation, Stages & Diagram Guide
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