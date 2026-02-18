import EndpointHeader from "@/components/docs/EndpointHeader";
import SectionDivider from "@/components/docs/SectionDivider";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function IVGTechnicalPage() {
  return (
    <>
      <EndpointHeader
        title="IVG — Technical Approach (Updated 2026)"
        description="Detailed engineering pipeline for in vitro gametogenesis (IVG): converting somatic cells (e.g., skin/blood) into functional gametes via iPSC reprogramming, PGCLC induction, gonadal differentiation, epigenetic reprogramming, and maturation. Covers stem-cell (iPSC) and SCNT-hybrid methods, with 2025–2026 advances (e.g., functional human eggs via mitomeiosis, projected timelines ~7 years to viable gametes). Emphasizes technologies, their necessity, optimization challenges, and validation."
      />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Overview of IVG Approaches (2026 Status)</h2>
      <p className="text-lg text-muted-foreground mb-6">
        IVG reconstructs gametogenesis in vitro, primarily from induced pluripotent stem cells (iPSCs) reprogrammed from adult somatic cells. Key phases: reprogramming → primordial germ cell-like cells (PGCLCs) → gonadal precursors with epigenetic reset → meiosis/maturation. Human progress lags mouse (where full cycles succeed), but 2025 breakthroughs include OHSU's production of 82 fertilizable eggs via somatic nuclear transfer-like "mitomeiosis" (skipping standard mitosis/meiosis) and reports of advanced PGC-like cells with meiotic entry. Challenges: incomplete imprint erasure, low meiotic efficiency, chromosomal instability. Alternative: SCNT-based haploidization. Goal: patient-specific gametes for infertility, same-sex reproduction, or genetic preservation.
      </p>
      <img
        src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41586-024-07526-6/MediaObjects/41586_2024_7526_Fig1_HTML.png"
        alt="Detailed schematic of human germ cell development trajectory in IVG, showing specification, epigenetic reprogramming, and sex-specific differentiation to pro-spermatogonia/oogonia (2024 Nature paper)"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.nature.com/articles/s41586-024-07526-6"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Source: In vitro reconstitution of epigenetic reprogramming in human germ line (Nature 2024)
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Step 1: Reprogramming Somatic Cells to iPSCs</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Adult somatic cells (fibroblasts, PBMCs) are reprogrammed using Yamanaka factors (OCT4, SOX2, KLF4, c-MYC; OSKM). Methods: non-integrating episomal plasmids (e.g., OriP/EBNA1), Sendai virus, or synthetic mRNA to minimize genomic risk. Culture in E8/vitronectin or mTeSR on laminin-521. Efficiency boosted by valproic acid, CHIR99021, or hypoxia. 2026: xeno-free GMP protocols standard for clinical translation. Verification: pluripotency gene activation, surface markers (TRA-1-60/SSEA-4), alkaline phosphatase, teratoma/scorecard assays. CRISPR often used pre-reprogramming to correct mutations (e.g., CFTR).
      </p>
      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Key Technologies & Why Necessary</h3>
          <p className="text-base text-muted-foreground mt-4">
  - <strong>Cell culture optimization</strong>: Defined, xeno-free media; 3D/2D formats. <strong>Why necessary</strong>: Maintains pluripotency, reduces heterogeneity; critical for reproducible downstream PGCLC yields (often &lt;10–30%).
</p>

      <SectionDivider />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/79/IPSCgeneration.png"
        alt="Standard Yamanaka factor reprogramming schematic for iPSC generation"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://en.wikipedia.org/wiki/Induced_pluripotent_stem_cell"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline mb-4 block"
      >
        Source: Induced Pluripotent Stem Cell (Wikipedia)
      </a>

      <p className="text-base text-muted-foreground mb-4">
        - <strong>Human iPSC differentiation</strong>: Directed protocols mimic embryonic signals. <strong>Why necessary</strong>: iPSCs provide infinite, autologous pluripotent starting material for germline specification; ethically preferable to embryonic stem cells.
      </p>
      <p className="text-base text-muted-foreground mb-4">
        - <strong>PCR / qPCR</strong>: Amplifies/detects gene expression (endogenous vs. transgene silencing). <strong>Why necessary</strong>: Quantifies reprogramming success (e.g., NANOG/OCT4 upregulation); detects residual transgenes that could cause tumors.
      </p>
      <p className="text-base text-muted-foreground mb-4">
        - <strong>CRISPR-Cas9</strong>: RNA-guided nuclease for editing/knock-ins. <strong>Why necessary</strong>: Creates reporter lines (e.g., BLIMP1-tdTomato) for real-time tracking; corrects disease alleles pre-IVG; enables screens for enhancers.
      </p>
      <img
        src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41586-024-07526-6/MediaObjects/41586_2024_7526_Fig1_HTML.png"
        alt="CRISPR-enabled reporter lines in germ cell specification (from recent IVG epigenetic study)"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.nature.com/articles/s41586-024-07526-6"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Source: Nature 2024 (epigenetic reprogramming in IVG)
      </a>

      <p className="text-base text-muted-foreground mt-4">
        - <strong>Cell culture optimization</strong>: Defined, xeno-free media; 3D/2D formats. <strong>Why necessary</strong>: Maintains pluripotency, reduces heterogeneity; critical for reproducible downstream PGCLC yields (often &lt;10–30%).
      </p>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Step 2: Induction of Primordial Germ Cell-Like Cells (PGCLCs)</h2>
      <p className="text-lg text-muted-foreground mb-6">
      iPSCs &rarr; incipient mesoderm-like cells (activin A + FGF2 + CHIR) &rarr; PGCLCs (BMP4 + LIF + SCF + EGF in 3D aggregates or monolayer; 4–8 days). ...
            </p>
      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Key Technologies (Expanded)</h3>
      <p className="text-lg text-muted-foreground mb-6">
  Flow cytometry Fluorescent-activated cell sorting (e.g., CXCR4+/PDGFRA/ITGA6+/EpCAM+). <strong>Why necessary</strong>: Isolates rare PGCLCs (~540%) from mixed cultures; purity 90% essential to avoid somatic contamination in later meiosis.
    </p>
      <img
        src="https://media.springernature.com/lw1200/springer-static/image/art%3A10.1038%2Fs41467-023-41302-w/MediaObjects/41467_2023_41302_Fig6_HTML.png"
        alt="Flow cytometry plots of CXCR4+ / PDGFRA- / GARP- PGCLCs from human ESCs (monolayer protocol)"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.nature.com/articles/s41467-023-41302-w"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Source: Monolayer PGCLC platform (Nature Communications 2023)
      </a>

      <p className="text-base text-muted-foreground mb-4">
        - <strong>Immunofluorescence analyses</strong>: Antibody staining + confocal microscopy for nuclear markers. <strong>Why necessary</strong>: Validates PGC identity (e.g., nuclear SOX17/BLIMP1, cytoplasmic VASA/DAZL); detects proper localization absent in somatic cells.
      </p>
      <img
        src="https://media.springernature.com/lw1200/springer-static/image/art%3A10.1186%2F1471-213X-7-136/MediaObjects/12861_2007_Article_278_Fig5_HTML.jpg"
        alt="Immunofluorescence of conserved PGC markers DAZL (green) and VASA in human fetal gonads"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://link.springer.com/article/10.1186/1471-213X-7-136"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Source: Conserved DAZL/VASA expression in human germ cells
      </a>

      <p className="text-base text-muted-foreground mb-4">
        - <strong>Single-cell RNA sequencing (scRNA-seq)</strong>: 10x Genomics or Drop-seq for transcriptome profiling. <strong>Why necessary</strong>: Maps heterogeneity, pseudotime (trajectory to fetal PGCs), WNT/BMP signaling; identifies off-targets; optimizes protocols (e.g., 2024 studies show BMP-driven demethylation).
      </p>
      <img
        src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41586-022-04918-4/MediaObjects/41586_2022_4918_Fig1_HTML.png"
        alt="scRNA-seq atlas of human gonadal development, highlighting germ cell clusters in IVG-relevant contexts"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.nature.com/articles/s41586-022-04918-4"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Source: Single-cell roadmap of human gonadal development (Nature 2022, foundational for IVG)
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Step 3: Differentiation to Gonadal Precursors & Epigenetic Reprogramming</h2>
      <p className="text-lg text-muted-foreground mb-6">
        PGCLCs + BMP/retinoic acid → pro-spermatogonia (male) or oogonia (female) in 3D organoids/xenografts with gonadal somatic cells. Key: global DNA demethylation, imprint erasure. 2024–2025: Extended cultures show meiotic entry (STRA8+/SYCP3+); scRNA-seq confirms fetal-like states.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        Technologies recap: scRNA-seq for trajectories/BMP roles; immunofluorescence for meiotic spreads (SYCP1/3); bisulfite/allele-specific PCR for imprints. Challenges: human meiotic arrest incomplete vs. mouse.
      </p>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Alternative: SCNT-Based IVG (2025 Advance)</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Somatic nucleus → enucleated oocyte; cytoplasm reprograms → haploid via "mitomeiosis" (OHSU 2025: 82 functional eggs, some to blastocyst). Lower efficiency but bypasses full PGC/meiosis hurdles.
      </p>
      <img
        src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fcdd.2017.134/MediaObjects/41418_2017_Article_BFcdd2017134_Fig1_HTML.jpg"
        alt="Schematic of complete in vitro oogenesis culture systems (retrospective for SCNT/IVG parallels)"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.nature.com/articles/cdd2017134"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Source: Complete in vitro oogenesis retrospects (Nature 2017, conceptual parallel)
      </a>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Step 4: Maturation, Quality Control & Validation</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Retinoic acid/hormones (FSH/LH) in organoids → meiosis completion. Validation: karyotyping, scRNA-seq similarity to in vivo, fertilization/embryo development, imprint PCR. 2026: Safety checkpoints (off-targets, aneuploidy) critical before trials.
      </p>

      <div className="mt-12 flex justify-between">
        <Link to="/ivg/biological" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-mono text-sm font-semibold hover:bg-muted transition-colors">
          <ArrowLeft className="h-4 w-4" /> Biological Explanation
        </Link>
        <Link to="/ivg/applications" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold hover:bg-primary/90 transition-colors">
          IVG: Applications <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}