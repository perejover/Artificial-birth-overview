import EndpointHeader from "@/components/docs/EndpointHeader";
import SectionDivider from "@/components/docs/SectionDivider";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function IVGCurrentPage() {
  return (
    <>
      <EndpointHeader
        title="IVG — Current Overview"
        description="Latest accomplishments in In Vitro Gametogenesis as of February 2026, including key research milestones with authors/leads, companies with funding/valuation notes where available, and the primary ongoing challenges."
      />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Latest Accomplishments in IVG (15 Recent Examples)</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Key breakthroughs and progress in IVG from 2025–early 2026, focusing on functional gamete creation, organoids, predictions, and company advances.
      </p>
      <div className="space-y-6 my-6">
        {[
          { 
            name: "September 30, 2025: Functional Human Eggs from Skin Cells via Mitomeiosis (OHSU)", 
            description: "Led by Shoukhrat Mitalipov, Paula Amato, Nuria Marti Gutierrez: Created 82 functional oocytes from adult skin cell nuclei transplanted into enucleated oocytes; used 'mitomeiosis' for ploidy reduction; fertilized to reach blastocyst (9%). Published in Nature Communications.", 
            link: "https://news.ohsu.edu/2025/09/30/ohsu-researchers-develop-functional-eggs-from-human-skin-cells",
            image: "https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/V3FSOEUJFNAVDM5HG64GTUYMW4.jpg" // OHSU oocyte with nucleus injection
          },
          { 
            name: "July 5, 2025: Hayashi Predicts Human IVG in ~7 Years", 
            description: "Prof. Katsuhiko Hayashi (Osaka University): Forecast viable lab-grown human gametes soon; advanced mouse sperm in testicle organoid and human ovary organoid development.", 
            link: "https://www.theguardian.com/science/2025/jul/05/lab-grown-sperm-and-eggs-scientists-reproduction",
            image: "https://www.biorxiv.org/content/biorxiv/early/2025/03/24/2025.03.21.644608/F1.large.jpg" // Human fetal ovary reconstitution / organoid diagram
          },
          { 
            name: "August 12, 2025: Gameto Raises $44M Series C (Total $127M)", 
            description: "Gameto (led by Dina Radenkovic): Funding supports Phase 3 Fertilo trial (iPSC-derived ovarian support cells for egg maturation); first patients recruited.", 
            link: "https://www.prnewswire.com/news-releases/gametos-44m-series-c-to-help-redefine-reproductive-care-as-first-patients-recruited-for-pivotal-stem-cell-phase-3-trial-302527828.html",
            image: "https://images.squarespace-cdn.com/content/v1/5d9cbff6dd03ce3bad27fe89/b9c68ab6-91d0-4a47-a60e-8fcacb0abbbe/Blog+covers+.png" // IVF/fertility lab microscope setup (relevant to Fertilo maturation)
          },
          { 
            name: "September 30, 2025: OHSU Proof-of-Concept Fertilization", 
            description: "OHSU team (Mitalipov et al.): Lab-grown eggs fertilized; embryos reached early stages (up to 6 days); potential for infertility and same-sex reproduction.", 
            link: "https://www.npr.org/2025/09/30/nx-s1-5553322/ivg-human-eggs-cells-fertility",
            image: "https://media.wired.com/photos/68db187ef72c2584f926f0f7/master/w_2560%2Cc_limit/oocyte.jpeg" // Reconstructed oocyte close-up (different angle/variation)
          },
          { 
            name: "Ongoing 2025–2026: Conception Biosciences Progress", 
            description: "Conception Biosciences (CEO Matt Krisiloff, backed by Sam Altman): Advancing full protocol for clinical-grade human oocytes from iPSCs; progress toward clinic in 5+ years.", 
            link: "https://www.theguardian.com/science/2025/jul/05/lab-grown-sperm-and-eggs-scientists-reproduction",
            image: "https://cdn.kpbs.org/dims4/default/bcb4345/2147483647/strip/true/crop/1497x922+0+99/resize/880x542!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2023%2F09%2F27%2Fivg_osaka_000031_custom-8c6b4f01309c318b2c843222f5158e43e65eab32.jpg" // Hayashi lab setup (related to predictions/organoids)
          },
          { 
            name: "2025: Human PGCLC Epigenetic Reprogramming Advances", 
            description: "Defined xeno-free conditions enable human PGCLCs to form pro-spermatogonia/pro-oogonia with massive expansion (>10-billion-fold).", 
            link: "https://www.nature.com/articles/s41586-024-07526-6",
            image: null
          },
          { 
            name: "2025: Mouse Bipaternal Refinements Continue", 
            description: "Building on 2023 work: Oocytes from male iPSCs enabling bipaternal mice; ongoing refinements for human relevance.", 
            link: "https://cbc-network.org/2025/10/in-vitro-gametogenesis",
            image: null
          },
          { 
            name: "2025: HFEA & Ethical Predictions", 
            description: "UK HFEA: Lab-grown gametes could be practical in the next decade; calls for preemptive regulations.", 
            link: "https://www.hfea.gov.uk",
            image: null
          },
          { 
            name: "2025: Human Ovary Organoid Development", 
            description: "Hayashi lab: Created human ovary organoids as key step toward in vitro egg cultivation.", 
            link: "https://www.theguardian.com/science/2025/jul/05/lab-grown-sperm-and-eggs-scientists-reproduction",
            image: "https://www.biorxiv.org/content/biorxiv/early/2025/03/24/2025.03.21.644608/F1.large.jpg" // Ovary reconstitution/organoid culture visual
          },
          { 
            name: "Ongoing 2025–2026: Ivy Natal & CRISPR Integration", 
            description: "Early-stage CRISPR use with IVG for enhanced egg production from stem cells.", 
            link: "https://www.tandfonline.com/doi/full/10.1080/14636778.2025.2542733",
            image: null
          },
          { 
            name: "2025: Renewal Bio Embryo Models", 
            description: "Jacob Hanna's Renewal Bio: Advancing stem cell-derived embryo models relevant to IVG/infertility.", 
            link: "https://www.tandfonline.com/doi/full/10.1080/14636778.2025.2542733",
            image: null
          },
          { 
            name: "October 2025: Mitomeiosis Introduced as Novel Method", 
            description: "Mitalipov team: 'Mitomeiosis' as hybrid division for ploidy reduction in human oocytes.", 
            link: "https://news.ohsu.edu/2025/09/30/ohsu-researchers-develop-functional-eggs-from-human-skin-cells",
            image: "https://dims.apnews.com/dims4/default/2b02f9d/2147483647/strip/true/crop/3094x1740+0+161/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa2%2Fc6%2Fa3b0059f48dafd87e1312ab28bf3%2Ff277df506faa4bbd861e009a5d9c0768" // Different OHSU injection/spindle view
          },
          { 
            name: "2025–2026: Pre-clinical Safety Emphasis", 
            description: "Multiple groups stress checkpoints for genomic/epigenetic integrity before human trials.", 
            link: "https://www.nature.com/articles/d41586-025-03308-w",
            image: null
          },
          { 
            name: "January 2026: Conference on Embryo Models & IVG", 
            description: "International Dutch Embryo Model Meeting 2025 reported advances in gamete models and IVG safety discussions.", 
            link: "https://journals.biologists.com/bio/article/15/2/bio062189/370438/Conference-report-current-advances-in-embryo-model",
            image: null
          },
          { 
            name: "2025: Epigenetic Fidelity in Human IVG Progress", 
            description: "Advances in PGCLC to pro-gamete differentiation under defined conditions.", 
            link: "https://www.nature.com/articles/s41586-024-07526-6",
            image: null
          },
        ].map((item, index) => (
          <div 
            onClick={() => window.open(item.link, '_blank')} 
            key={index} 
            className="p-4 rounded-lg border border-border bg-card cursor-pointer"
          >
            <p className="font-mono text-sm font-semibold text-foreground mb-1">{item.name}</p>
            <p className="text-sm text-muted-foreground mb-2">{item.description}</p>

            {item.image && (
              <img
                src={item.image}
                alt={`${item.name} illustration`}
                className="w-80 h-80 my-4 object-cover rounded-md flex-shrink-0"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            )}

            <div className="text-primary text-sm hover:underline self-center">
              Source: {item.link} ↗
            </div>
          </div>
        ))}
      </div>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Biggest Challenges in IVG</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Major technical, safety, ethical, and regulatory hurdles as of early 2026.
      </p>
      <div className="space-y-6 my-6">
        {[
          { 
            challenge: "Full Meiosis Completion & Low Aneuploidy", 
            detail: "Human meiosis remains error-prone in vitro; high chromosomal abnormality rates persist despite advances like mitomeiosis.",
            link: "https://www.nature.com/articles/s41467-025-63454-7",
            image: "https://media.wired.com/photos/68db187ef72c2584f926f0f7/master/w_2560%2Cc_limit/oocyte.jpeg" // Oocyte detail for meiosis relevance
          },
          { 
            challenge: "Epigenetic & Imprinting Accuracy", 
            detail: "Ensuring correct parent-specific marks and full reprogramming to prevent developmental disorders.",
            link: "https://www.nature.com/articles/s41586-024-07526-6",
            image: null
          },
          { 
            challenge: "Oocyte/Sperm Maturation Efficiency", 
            detail: "Replicating cytoplasmic/organelle accumulation and gonadal niche support; yields still too low for clinical scale.",
            link: "https://news.ohsu.edu/2025/09/30/ohsu-researchers-develop-functional-eggs-from-human-skin-cells",
            image: "https://cdn.mos.cms.futurecdn.net/Ft4YbQxAJU4tpDMxx7AHbV.jpg" // Ovarian follicle / maturation context
          },
          { 
            challenge: "Genomic Stability During Reprogramming", 
            detail: "Risk of mutations from iPSC stage; requires rigorous whole-genome sequencing validation.",
            link: "https://www.nature.com/articles/d41586-025-03308-w",
            image: null
          },
          { 
            challenge: "Ethical & Regulatory Frameworks", 
            detail: "Issues around designer reproduction, same-sex/solo parenting, heritable changes; preemptive laws needed (e.g., HFEA calls).",
            link: "https://www.hfea.gov.uk",
            image: null
          },
          { 
            challenge: "Long-term Offspring Health & Safety", 
            detail: "No human births yet; multi-generational animal data essential before trials.",
            link: "https://cbc-network.org/2025/10/in-vitro-gametogenesis",
            image: null
          },
          { 
            challenge: "Scalability for Clinical Use", 
            detail: "Need hundreds of viable gametes per patient; current protocols inefficient.",
            link: "https://www.theguardian.com/science/2025/jul/05/lab-grown-sperm-and-eggs-scientists-reproduction",
            image: null
          },
          { 
            challenge: "Artificial Gonadal Environments", 
            detail: "Creating supportive somatic cells (e.g., granulosa/Sertoli-like) for complete maturation.",
            link: "https://journals.biologists.com/bio/article/15/2/bio062189/370438/Conference-report-current-advances-in-embryo-model",
            image: "https://www.biorxiv.org/content/biorxiv/early/2025/03/24/2025.03.21.644608/F1.large.jpg" // Organoid/gonadal niche visual
          },
        ].map((item, index) => (
          <div 
            onClick={() => window.open(item.link, '_blank')} 
            key={index} 
            className="p-4 rounded-lg border border-border bg-card cursor-pointer"
          >
            <p className="font-mono text-sm font-semibold text-foreground mb-1">{item.challenge}</p>
            <p className="text-sm text-muted-foreground mb-2">{item.detail}</p>

            {item.image && (
              <img
                src={item.image}
                alt={`${item.challenge} illustration`}
                className="w-80 h-80 my-4 object-cover rounded-md flex-shrink-0"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            )}

            <div className="text-primary text-sm hover:underline self-center">
              Source: {item.link} ↗
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-between">
        <Link to="/ivg/technical" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-mono text-sm font-semibold hover:bg-muted transition-colors">
          <ArrowLeft className="h-4 w-4" /> Technical Approach
        </Link>
        <Link to="/ivg/future" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold hover:bg-primary/90 transition-colors">
          Future Prospects <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}