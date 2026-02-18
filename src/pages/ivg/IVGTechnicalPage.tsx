import EndpointHeader from "@/components/docs/EndpointHeader";
import SectionDivider from "@/components/docs/SectionDivider";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function IVGTechnicalPage() {
  return (
    <>
      <EndpointHeader
        title="IVG — Technical Approach"
        description="The step-by-step engineering process of converting somatic cells into functional gametes: reprogramming, differentiation, maturation, and quality control."
      />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Required Biological Inputs</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Essential components and parameters needed to initiate the IVG process, including cell types, factors, and protocols.
      </p>
      <div className="space-y-3 my-6">
        {[
          { name: "Somatic Cell", description: "Any diploid somatic cell from the intended genetic parent. Skin fibroblasts and peripheral blood mononuclear cells (PBMCs) are preferred for ease of collection." },
          { name: "Reprogramming Factors", description: "Transcription factor cocktail (typically Yamanaka factors: Oct4, Sox2, Klf4, c-Myc) to induce pluripotency." },
          { name: "Differentiation Protocol", description: "Stepwise culture conditions directing iPSC differentiation through PGCLCs to mature gametes." },
          { name: "Target Gamete Type", description: "'oocyte' or 'spermatocyte'. Determines the final differentiation pathway." },
          { name: "Genetic Screening", description: "Whether to perform whole-genome sequencing on the resulting gametes to verify genetic integrity." },
        ].map((item) => (
          <div key={item.name} className="p-4 rounded-lg border border-border bg-card">
            <p className="font-mono text-sm font-semibold text-foreground mb-1">{item.name}</p>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">The IVG Pipeline: Step by Step</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Comprehensive overview of the multi-stage IVG workflow, transforming adult somatic cells into viable gametes through bioengineering techniques.
      </p>
      <img
        src="https://www.eggdonors.asia/wp-content/uploads/2019/04/IVG-embryos-procedure.jpg"
        alt="Diagram of IVG process from somatic cells to gametes"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.eggdonors.asia/in-vitro-gametogenesis-ivg-embryology/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: In Vitro Gametogenesis IVG - Embryology Way to Design a Baby
      </a>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Step 1: Cell Collection (Day 0)</h3>
      <p className="text-base text-muted-foreground mb-6">
        Minimally invasive acquisition of starting somatic cells via biopsy or blood draw.
      </p>
      <img
        src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/11/15/17/39/an00841_-ds00686_im03507_sn7_skinbiopsythu_jpg.jpg"
        alt="Diagram of skin biopsy procedure for somatic cell collection"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.mayoclinic.org/tests-procedures/skin-biopsy/about/pac-20384634"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Skin biopsy - Mayo Clinic
      </a>
      <p className="text-muted-foreground mt-4">
        A simple skin biopsy (4mm punch) or blood draw provides millions of somatic cells. This is a minimally invasive outpatient procedure — comparable to a routine blood test. No surgery, no hormonal stimulation, no egg retrieval procedure. The collected cells are cultured briefly to establish a stable cell line.
      </p>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Step 2: Reprogramming to iPSCs (Days 1-21)</h3>
      <p className="text-base text-muted-foreground mb-6">
        Conversion of somatic cells to induced pluripotent stem cells using transcription factors.
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
      <p className="text-muted-foreground mt-4">
        Using the Yamanaka factors (or newer, more efficient non-integrating methods like Sendai virus vectors or mRNA transfection), the somatic cells are converted into induced Pluripotent Stem Cells. These iPSCs are functionally equivalent to embryonic stem cells — they can become any cell type in the body, including gametes.
      </p>
      <p className="text-muted-foreground mt-4">
        Modern reprogramming achieves efficiency rates of 0.1-1%, which sounds low but is sufficient because millions of cells are processed simultaneously. Quality control involves verifying pluripotency markers (SSEA-4, TRA-1-60, Nanog) and confirming genomic integrity via karyotyping and whole-genome sequencing.
      </p>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Step 3: Primordial Germ Cell Differentiation (Weeks 3-6)</h3>
      <p className="text-base text-muted-foreground mb-6">
        Directed differentiation of iPSCs to primordial germ cell-like cells using specific growth factors.
      </p>
      <img
        src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fcddis.2015.265/MediaObjects/41419_2015_Article_BFcddis2015265_Fig1_HTML.jpg"
        alt="Diagram of in vitro differentiation to primordial germ cell-like cells"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.nature.com/articles/cddis2015265"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: In vitro differentiation of germ cells from stem cells
      </a>
      <p className="text-muted-foreground mt-4">
        iPSCs are directed toward a primordial germ cell-like cell (PGCLC) fate using carefully timed exposure to BMP4, BMP8b, SCF, EGF, and LIF. The protocol mimics the signaling environment that naturally occurs in the developing embryo during weeks 2-4. PGCLCs express characteristic markers including BLIMP1, TFAP2C, and SOX17.
      </p>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Step 4: Gamete Maturation (Weeks 6-16+)</h3>
      <p className="text-base text-muted-foreground mb-6">
        Final maturation of PGCLCs into functional oocytes or sperm in artificial gonadal environments.
      </p>
      <img
        src="https://www.oakclinic-group.com/wp/wp-content/themes/oak-clinic/en/assets/images/funin/about_ivm__Image.png"
        alt="Diagram of in vitro maturation of oocytes"
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
      <p className="text-muted-foreground mt-4">
        The most technically challenging step. PGCLCs must undergo meiosis and mature into functional gametes:
      </p>
      <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
        <li><strong className="text-foreground">For oocytes:</strong> Requires creation of an artificial ovarian environment with supporting granulosa-like cells that provide paracrine signals. The oocyte must grow from ~35μm to ~120μm, accumulate cytoplasmic stores, and arrest at metaphase II.</li>
        <li><strong className="text-foreground">For sperm:</strong> Requires an artificial testicular niche with Sertoli-like and Leydig-like support cells. Spermatogonia must undergo spermatocytogenesis, meiosis, spermiogenesis, and capacitation.</li>
      </ul>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Why Non-Integrating Methods Matter</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Importance of safe reprogramming techniques to avoid genomic alterations.
      </p>
      <p className="text-muted-foreground">
        Early reprogramming used retroviruses that inserted the Yamanaka factors directly into the cell's DNA — creating a risk of insertional mutagenesis (cancer). Modern methods use Sendai viruses, mRNA, or small molecules that activate the same pathways without permanently altering the genome. This is critical for clinical safety.
      </p>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Key Technical Challenges</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Major hurdles in achieving reliable and efficient IVG for clinical use.
      </p>
      <div className="space-y-3 my-6">
        {[
          { challenge: "Meiotic completion in vitro", detail: "Achieving complete, error-free meiosis outside the body remains the primary bottleneck. Mouse IVG solved this in 2016; human meiosis is more complex and takes months rather than weeks." },
          { challenge: "Epigenetic fidelity", detail: "Gametes carry parent-of-origin epigenetic marks (imprinting) essential for normal development. Verifying that these marks are correctly established in IVG gametes requires comprehensive methylation analysis." },
          { challenge: "Oocyte cytoplasmic maturation", detail: "Oocytes must accumulate massive cytoplasmic stores of mRNAs, proteins, and organelles to support early embryonic development. Replicating this process in vitro requires precise culture conditions." },
          { challenge: "Scale and efficiency", detail: "Current protocols produce gametes at low efficiency. Clinical application requires scaling to produce hundreds of quality-verified gametes per patient." },
        ].map((item) => (
          <div key={item.challenge} className="p-4 rounded-lg border border-border bg-card">
            <p className="font-mono text-sm font-semibold text-foreground mb-1">{item.challenge}</p>
            <p className="text-sm text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-between">
        <Link to="/ivg/biological" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-mono text-sm font-semibold hover:bg-muted transition-colors">
          <ArrowLeft className="h-4 w-4" /> Biological Explanation
        </Link>
        <Link to="/ivg/current" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold hover:bg-primary/90 transition-colors">
          Current Overview <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}