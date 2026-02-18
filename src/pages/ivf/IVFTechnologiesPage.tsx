import EndpointHeader from "@/components/docs/EndpointHeader";
import SectionDivider from "@/components/docs/SectionDivider";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function IVFTechnologiesPage() {
  return (
    <>
      <EndpointHeader
        title="IVF — Technologies Used"
        description="Detailed overview of key technologies employed throughout the IVF process, including their objectives, placement in the clinical workflow, and supporting visuals."
      />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Transvaginal Ultrasound (TVUS)</h2>
      <p className="text-lg text-muted-foreground mb-2">
        High-frequency endovaginal probe for real-time imaging of ovaries, follicles, and endometrium.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Monitor follicle growth during stimulation and guide oocyte retrieval needle placement.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Step 1 (monitoring) and Step 2 (egg retrieval guidance).
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Scheme_female_reproductive_system-en.svg/1200px-Scheme_female_reproductive_system-en.svg.png"
        alt="Diagram of transvaginal ultrasound monitoring ovarian follicles"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://en.wikipedia.org/wiki/Female_reproductive_system"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Female reproductive anatomy — Wikipedia
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Recombinant Gonadotropins (rFSH, rLH, hMG)</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Synthetic versions of follicle-stimulating hormone and luteinizing hormone for controlled ovarian hyperstimulation.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Stimulate multiple follicle development to maximize oocyte yield per cycle.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Step 1: Controlled Ovarian Hyperstimulation (Days 1–12).
      </p>
      <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/20220926131155/MenstrualCycle.png"
        alt="Diagram of hormonal stimulation protocol in IVF"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.geeksforgeeks.org/biology/oogenesis/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Hormonal regulation of oogenesis — GeeksforGeeks
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">GnRH Antagonists (Cetrorelix, Ganirelix)</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Competitive inhibitors of GnRH receptors that suppress endogenous LH surges during stimulation.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Prevent premature ovulation during follicle development.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Step 1 (antagonist protocol, Days 5–6 onwards).
      </p>
      <img
        src="https://iastate.pressbooks.pub/app/uploads/sites/43/2023/02/Slide1-e1701380214733.png"
        alt="Diagram of GnRH axis suppression in IVF antagonist protocol"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://iastate.pressbooks.pub/humanreproduction/chapter/new/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Hormonal regulation of reproduction — Iowa State Pressbooks
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Intracytoplasmic Sperm Injection (ICSI)</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Micromanipulation technique using a glass micropipette to inject a single selected sperm directly into an oocyte.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Achieve fertilization in cases of severe male factor infertility or poor conventional fertilization history.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Step 3: Fertilization (Day 0). Used in ~70% of all IVF cycles globally.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Fertilization.svg/1200px-Fertilization.svg.png"
        alt="Diagram of ICSI sperm injection into oocyte"
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

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Time-Lapse Embryo Monitoring (EmbryoScope, Geri+)</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Closed incubator systems with built-in cameras capturing images every 5–15 minutes across 5–6 days of embryo development.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Assess embryo kinetics (cell division timing) without removing embryos from controlled conditions.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Step 4: Embryo Culture (Days 1–6).
      </p>
      <img
        src="https://www.oakclinic-group.com/wp/wp-content/themes/oak-clinic/en/assets/images/funin/about_ivm__Image.png"
        alt="Time-lapse embryo monitoring system in IVF lab"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.oakclinic-group.com/en/funin/ivm/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: In Vitro Maturation and culture — Oak Clinic
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Preimplantation Genetic Testing (PGT-A/M/SR)</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Trophectoderm biopsy of Day 5–6 blastocysts followed by next-generation sequencing for chromosomal or monogenic analysis.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Select euploid embryos (PGT-A), screen for inherited single-gene disorders (PGT-M), or identify structural rearrangements (PGT-SR).
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Between Step 4 (culture) and Step 5 (transfer/cryopreservation).
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Blastocyst_English.svg/1200px-Blastocyst_English.svg.png"
        alt="Diagram of trophectoderm biopsy for PGT on blastocyst"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://en.wikipedia.org/wiki/Blastocyst"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Blastocyst anatomy — Wikipedia
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Vitrification (Ultra-Rapid Cryopreservation)</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Flash-freezing of oocytes or embryos using high concentrations of cryoprotectants and cooling rates &gt;15,000°C/min to a vitrified (glass-like) state at -196°C.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Cryopreserve surplus eggs or embryos with &gt;95% survival rate for future frozen-thawed transfer cycles.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> After egg retrieval (egg freezing) or after culture (embryo banking). Standard practice in all IVF labs since ~2012.
      </p>
      <img
        src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41392-024-01809-0/MediaObjects/41392_2024_1809_Fig1_HTML.png"
        alt="Diagram of vitrification process for embryo cryopreservation"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.nature.com/articles/s41392-024-01809-0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Stem cell and cryopreservation advances — Nature
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">AI-Based Embryo Selection Algorithms</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Deep learning models trained on hundreds of thousands of embryo images and annotated outcome data to rank embryos by predicted live birth potential.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Reduce selection bias and improve consistency; augment embryologist decision-making.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Step 4/5 transition — selecting the best embryo for transfer from a cohort.
      </p>
      <img
        src="https://www.thermofisher.com/content/dam/LifeTech/Images/curves/011607-TFS-app-real-time-pcr-basics-fig3.jpg"
        alt="Graph showing AI model performance metrics for embryo selection"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.thermofisher.com/us/en/home/life-science/pcr/real-time-pcr/real-time-pcr-learning-center/real-time-pcr-basics.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Data analytics in reproductive medicine — Thermo Fisher
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Endometrial Receptivity Array (ERA)</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Endometrial biopsy genomic test analyzing expression of 248 genes to identify the personalized implantation window (WOI).
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Personalize embryo transfer timing for women with displaced WOI after failed transfers.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Pre-transfer cycle assessment (not during active stimulation). Recommended for recurrent implantation failure patients.
      </p>
      <img
        src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fcddis.2015.265/MediaObjects/41419_2015_Article_BFcddis2015265_Fig1_HTML.jpg"
        alt="Diagram of endometrial biopsy and gene expression analysis"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.nature.com/articles/cddis2015265"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Endometrial receptivity mechanisms — Nature
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Microfluidics-Based Sperm Selection</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Lab-on-a-chip devices that mimic the cervical mucus environment to select sperm by motility and morphology without centrifugation-induced oxidative stress.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Select highest-quality sperm with lower DNA fragmentation for ICSI; improve outcomes in male factor infertility.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Step 3: Sperm preparation before fertilization.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Somatic_cell_nuclear_transfer-en.svg"
        alt="Diagram of microfluidics chip for sperm selection"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://en.wikipedia.org/wiki/Somatic_cell_nuclear_transfer"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Cell manipulation technologies — Wikipedia
      </a>

      <div className="mt-12 flex justify-between">
        <Link to="/ivf/regulations" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-mono text-sm font-semibold hover:bg-muted transition-colors">
          <ArrowLeft className="h-4 w-4" /> Regulations
        </Link>
        <Link to="/ivf/next" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold hover:bg-primary/90 transition-colors">
          Next Section <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}