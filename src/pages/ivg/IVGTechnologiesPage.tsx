import EndpointHeader from "@/components/docs/EndpointHeader";
import SectionDivider from "@/components/docs/SectionDivider";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function IVGTechnologiesPage() {
  return (
    <>
      <EndpointHeader
        title="Technologies used"
        description="Detailed overview of key technologies employed throughout the IVG process, including their objectives, placement in the workflow, and supporting visuals."
      />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Induced Pluripotent Stem Cell (iPSC) Reprogramming</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Conversion of somatic cells into pluripotent stem cells capable of differentiating into any cell type, including gametes.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> To reset somatic cells to a pluripotent state for subsequent differentiation into germ cells.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Step 2: Reprogramming to iPSCs (Days 1-21).
      </p>
      <img
        src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41392-024-01809-0/MediaObjects/41392_2024_1809_Fig1_HTML.png"
        alt="Diagram of somatic cell reprogramming to iPSCs using Yamanaka factors"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.nature.com/articles/s41392-024-01809-0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Induced pluripotent stem cells (iPSCs): molecular mechanisms of induction and applications
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Yamanaka Factors</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Transcription factors (Oct4, Sox2, Klf4, c-Myc) used to induce pluripotency in somatic cells.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> To activate pluripotency genes and suppress somatic cell identity.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Step 2: Reprogramming to iPSCs (Days 1-21).
      </p>
      <img
        src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41392-024-01809-0/MediaObjects/41392_2024_1809_Fig1_HTML.png"
        alt="Illustration of Yamanaka factors in iPSC induction"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.nature.com/articles/s41392-024-01809-0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Induced pluripotent stem cells (iPSCs): molecular mechanisms of induction and applications
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Sendai Virus Vectors</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Non-integrating viral vectors for delivering reprogramming factors without altering the genome.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Safe delivery of Yamanaka factors to avoid insertional mutagenesis.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Step 2: Reprogramming to iPSCs (Days 1-21).
      </p>
      <img
        src="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4299818/bin/nihms654852f1.jpg"
        alt="Diagram of Sendai virus vectors in cell reprogramming"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4299818/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Sendai virus-mediated reprogramming of somatic cells
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">mRNA Transfection</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Delivery of synthetic mRNA encoding reprogramming factors for transient expression.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> To induce pluripotency without viral integration or permanent genetic changes.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Step 2: Reprogramming to iPSCs (Days 1-21).
      </p>
      <img
        src="https://www.stemcell.com/media/files/technicalbulletin/60121-Fig1-Workflow-for-mRNA-based-Reprogramming-of-iPSCs.jpg"
        alt="Diagram of mRNA transfection for iPSC generation"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.stemcell.com/technical-resources/area-of-interest/reprogramming-to-pluripotency/mrna-reprogramming.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: mRNA-Based Reprogramming for iPS Cell Generation
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">CRISPR-Cas9 Gene Editing</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Precision genome editing tool for modifying genes in stem cells or gametes.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> To correct genetic defects or enhance IVG efficiency; used in some advanced protocols.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Quality control and optional genetic modification throughout the process.
      </p>
      <img
        src="https://cdn.stemcell.com/media/TechnicalResources/TechnicalBulletins/27084/27084_Fig-1.jpg"
        alt="Diagram of CRISPR-Cas9 gene editing in stem cells"
        className="max-w-full h-auto rounded-lg mb-2"
      />


      <a
        href="https://www.stemcell.com/human-pluripotent-stem-cell-genome-editing-using-the-arcitect-crispr-cas9-system.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Genome Editing of Human Pluripotent Stem Cells Using the ArciTect™ CRISPR-Cas9 System
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Whole-Genome Sequencing (WGS)</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Comprehensive sequencing of the entire genome to detect mutations or abnormalities.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> To verify genetic integrity and screen for anomalies in iPSCs and gametes.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Quality control after reprogramming and maturation.
      </p>
      <img
        src="https://sequencing.com/sites/default/files/wysiwyg/283026/whole_genome_sequencing.jpg"
        alt="Diagram of whole-genome sequencing process"
        className="max-w-full h-auto rounded-lg mb-2"
      />


      <a
        href="https://sequencing.com/education-center/whole-genome-sequencing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Whole Genome Sequencing | Sequencing
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Karyotyping</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Visualization of chromosomes to detect structural abnormalities.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> To ensure chromosomal stability in reprogrammed cells.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Quality control after reprogramming.
      </p>
      <img
        src="https://www.genome.gov/sites/default/files/media/images/tg/Karyotype.jpg"
        alt="Illustration of human karyotype"
        className="max-w-full h-auto rounded-lg mb-2"
      />


      <a
        href="https://www.genome.gov/genetics-glossary/Karyotype"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Karyotype - National Human Genome Research Institute
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Bisulfite Sequencing for Epigenetic Analysis</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Method to assess DNA methylation patterns.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> To verify proper epigenetic reprogramming and imprinting in gametes.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Step 3 and 4: PGCLC differentiation and gamete maturation.
      </p>
      <img
        src="https://geneticeducation.co.in/wp-content/uploads/2024/03/Bisulfite-sequencing-1-min.png"
        alt="Diagram of bisulfite sequencing process"
        className="max-w-full h-auto rounded-lg mb-2"
      />


      <a
        href="https://geneticeducation.co.in/bisulfite-conversion-of-dna/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Bisulfite Conversion of DNA - A Complete Guide
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Flow Cytometry</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Technique for analyzing cell surface markers to confirm cell identity and purity.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> To validate pluripotency and differentiation stages using markers like SSEA-4, TRA-1-60.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Quality control throughout the process.
      </p>
      <img
        src="https://media.licdn.com/dms/image/v2/D4E12AQH-_4B37Mvfag/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1732720281220?e=2147483647&v=beta&t=XQ4CeIxrPO5gy9-sIuyMNsEwkBj_lpnzsC36VDdzWFg"
        alt="Example of flow cytometry data analysis"
        className="max-w-full h-auto rounded-lg mb-2"
      />


      <a
        href="https://www.linkedin.com/pulse/how-use-flow-cytometry-multiparametric-analysis-huang-md-phd-mxv3e"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: How to Use Flow Cytometry for Multiparametric Analysis
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Quantitative PCR (qPCR)</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Real-time PCR for quantifying gene expression levels.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> To monitor expression of pluripotency and germ cell markers like Nanog, BLIMP1.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Quality control and verification at multiple steps.
      </p>
      <img
        src="https://www.thermofisher.com/content/dam/LifeTech/Images/curves/011607-TFS-app-real-time-pcr-basics-fig3.jpg"
        alt="Graph of qPCR amplification curves"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.thermofisher.com/us/en/home/life-science/pcr/real-time-pcr/real-time-pcr-learning-center/real-time-pcr-basics.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Real-Time PCR Basics - Thermo Fisher Scientific
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Cytokine-Based Differentiation Protocols</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Use of growth factors like BMP4, SCF, LIF to direct stem cell differentiation.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> To mimic embryonic signaling for PGCLC induction.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Step 3: Primordial Germ Cell Differentiation (Weeks 3-6).
      </p>
      <img
        src="https://www.news-medical.net/images/equipments/ImageForEquipment_6752_16918174316351440.png"
        alt="Diagram of cytokine roles in stem cell differentiation"
        className="max-w-full h-auto rounded-lg mb-2"
      />


      <a
        href="https://www.news-medical.net/Research-Cytokines-for-Stem-Cells"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Research cytokines for stem cells
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Artificial Gonad Organoids</h2>
      <p className="text-lg text-muted-foreground mb-2">
        3D culture systems mimicking ovarian or testicular environments.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> To support meiosis and gamete maturation in vitro.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Step 4: Gamete Maturation (Weeks 6-16+).
      </p>
      <img
        src="https://www.oakclinic-group.com/wp/wp-content/themes/oak-clinic/en/assets/images/funin/about_ivm__Image.png"
        alt="Diagram of artificial gonad organoids for gamete maturation"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.oakclinic-group.com/en/funin/ivm/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: In Vitro Maturation Culture(IVM) Guidance
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Somatic Cell Nuclear Transfer (SCNT)</h2>
      <p className="text-lg text-muted-foreground mb-2">
        Transfer of somatic nucleus into enucleated oocyte for reprogramming.
      </p>
      <p className="text-base text-muted-foreground mb-2">
        <strong>Objective:</strong> Alternative reprogramming method for generating pluripotent cells or aiding meiosis.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        <strong>Used in:</strong> Experimental variants of Step 2 and beyond.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Somatic_cell_nuclear_transfer-en.svg"
        alt="Diagram of somatic cell nuclear transfer process"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://en.wikipedia.org/wiki/Somatic_cell_nuclear_transfer"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Somatic cell nuclear transfer - Wikipedia
      </a>

      <div className="mt-12 flex justify-between">
        <Link to="/ivg/technical" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-mono text-sm font-semibold hover:bg-muted transition-colors">
          <ArrowLeft className="h-4 w-4" /> Technical Approach
        </Link>
        <Link to="/ivg/next" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold hover:bg-primary/90 transition-colors">
          Next Page <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
} 