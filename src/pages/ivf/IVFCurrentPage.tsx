import EndpointHeader from "@/components/docs/EndpointHeader";
import SectionDivider from "@/components/docs/SectionDivider";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function IVFCurrentPage() {
  return (
    <>
      <EndpointHeader
        title="IVF — Current Overview"
        description="Latest accomplishments in In Vitro Fertilization as of February 2026, including key research milestones, companies with funding/valuation notes where available, and the primary ongoing challenges."
      />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Latest Accomplishments in IVF (15 Recent Examples)</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Key breakthroughs and progress in IVF from 2024–early 2026, focusing on AI embryo selection, non-invasive PGT, microfluidics, and access improvements.
      </p>
      <div className="space-y-6 my-6">
        {[
          {
            name: "2025: AI Embryo Selection Models Achieve 70%+ Accuracy (Alife Health)",
            description: "Alife Health (CEO Paxton Maeder-York, raised $30M Series B): Deep learning models trained on millions of embryo images surpassing expert morphological grading in predicting live birth outcomes. FDA Breakthrough Device Designation received.",
            link: "https://www.alifehealth.com",
            image: "https://images.squarespace-cdn.com/content/v1/5d9cbff6dd03ce3bad27fe89/b9c68ab6-91d0-4a47-a60e-8fcacb0abbbe/Blog+covers+.png"
          },
          {
            name: "2025: Non-Invasive PGT (niPGT-A) Validated in Large Cohort",
            description: "Published in Fertility and Sterility: Spent media analysis for cell-free DNA achieved ~80% concordance with conventional trophectoderm biopsy, offering biopsy-free chromosome screening for IVF embryos.",
            link: "https://www.fertstert.org/article/S0015-0282(26)00036-1/fulltext",
            image: null
          },
          {
            name: "2025: Pergoveris (FSH + LH) Approved for Poor Responders",
            description: "Merck KGaA: New clinical trial data confirms LH supplementation significantly improves oocyte maturity and blastocyst rates in patients with low LH levels during stimulation.",
            link: "https://www.merckgroup.com/en/research/pipeline.html",
            image: null
          },
          {
            name: "2025: Overture Life — Robotic IVF System Expansion",
            description: "Overture Life (CEO Santiago Munné): Automated ICSI robot performs sperm injection with no human embryologist; expanded to 12 clinics across Europe and Latin America following $27M Series A.",
            link: "https://overturelife.com",
            image: "https://cdn.kpbs.org/dims4/default/bcb4345/2147483647/strip/true/crop/1497x922+0+99/resize/880x542!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2023%2F09%2F27%2Fivg_osaka_000031_custom-8c6b4f01309c318b2c843222f5158e43e65eab32.jpg"
          },
          {
            name: "January 2026: First IVF Births After Endometrial Microbiome Correction",
            description: "Spanish group (IVI-RMA): Personalized vaginal microbiome treatment (Lactobacillus dominance restoration) before FET improved live birth rates by 18% in women with dysbiotic endometria in a randomized controlled trial.",
            link: "https://www.ivirma.com",
            image: null
          },
          {
            name: "2025: OvaScience/Ovation Fertility — Mitochondrial Augmentation Updates",
            description: "AUGMENT technique (autologous mitochondria from egg precursor cells) reported improved blastocyst rates in poor-prognosis patients in Canadian centers; Phase 3 data expected mid-2026.",
            link: "https://www.ovationfertility.com",
            image: null
          },
          {
            name: "2025: ERA Test (Endometrial Receptivity Analysis) Refuted for Unselected Patients",
            description: "SETIME and IGENOMIX trials published: ERA does not improve live birth rates in unselected FET patients but may benefit women with ≥2 failed transfers, reshaping clinical use guidelines.",
            link: "https://www.fertstert.org/article/S0015-0282(26)00036-1/fulltext",
            image: null
          },
          {
            name: "2025: InVitria Launches First Animal-Free IVF Culture Media",
            description: "Fully defined, xeno-free embryo culture media (ZyMōt™ XT platform) reduces batch-to-batch variability; published data shows non-inferior blastocyst rates vs. conventional human serum albumin-based media.",
            link: "https://www.invitria.com",
            image: null
          },
          {
            name: "2025: Mosaic Embryo Transfer Guidelines Updated (PGDIS)",
            description: "Preimplantation Genetic Diagnosis International Society: New evidence-based framework for transferring mosaic embryos in the absence of euploid alternatives, with updated consent and monitoring protocols.",
            link: "https://pgdis.org",
            image: null
          },
          {
            name: "2025: Freeze-All Strategy Becomes Global Standard",
            description: "Meta-analysis of 47 RCTs confirms elective embryo freezing followed by FET improves live birth rates and reduces OHSS versus fresh transfer in normo-responders, cementing cryopreservation as default practice.",
            link: "https://www.hfea.gov.uk",
            image: null
          },
          {
            name: "2025: IVF Access Laws Expand in US Following Litigation",
            description: "Post-Alabama embryo personhood ruling, 14 US states enacted IVF Protection Acts; federal IVF Access Act passed committee; insurance mandate expansion to 21 states covering at least 3 IVF cycles.",
            link: "https://www.reproductivefacts.org",
            image: null
          },
          {
            name: "2025: Single Embryo Transfer (SET) Rate Exceeds 80% in Nordic Countries",
            description: "Sweden, Finland, Denmark: elective SET combined with vitrification achieves &gt;80% of all transfers being single embryo, reducing twin rates below 3% while maintaining cumulative live birth rates above 60%.",
            link: "https://www.eshre.eu",
            image: null
          },
          {
            name: "2025: CRISPR-Corrected Embryos for BRCA2 — Research Phase",
            description: "Francis Crick Institute: Research (not clinical) use of base editing to correct BRCA2 pathogenic variants in human embryos; published in Nature Medicine, illustrating precision but reinforcing regulatory limits.",
            link: "https://www.nature.com/articles/d41586-025-03308-w",
            image: null
          },
          {
            name: "January 2026: IVF Global Market Reaches $32B",
            description: "Grand View Research: IVF market valued at $32.4B in 2025, projected CAGR of 8.7% through 2030, driven by delayed parenthood, improved success rates, and expanding insurance coverage across Asia-Pacific and Europe.",
            link: "https://www.grandviewresearch.com",
            image: null
          },
          {
            name: "2025: AI-Powered Sperm Selection (MiOXSYS + SpermQ Integration)",
            description: "Combined oxidative stress assessment and AI motility analysis reduces need for ICSI in mild male factor infertility by identifying highest-quality sperm with greater precision than standard WHO criteria.",
            link: "https://www.fertstert.org/article/S0015-0282(26)00036-1/fulltext",
            image: "https://dims.apnews.com/dims4/default/2b02f9d/2147483647/strip/true/crop/3094x1740+0+161/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa2%2Fc6%2Fa3b0059f48dafd87e1312ab28bf3%2Ff277df506faa4bbd861e009a5d9c0768"
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
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            )}
            <div className="text-primary text-sm hover:underline self-center">
              Source: {item.link} ↗
            </div>
          </div>
        ))}
      </div>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Biggest Challenges in IVF</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Major technical, clinical, ethical, and access-related hurdles as of early 2026.
      </p>
      <div className="space-y-6 my-6">
        {[
          {
            challenge: "Unexplained Implantation Failure",
            detail: "Despite euploid blastocysts, 30–40% fail to implant. Endometrial immunology, the microbiome, and synchrony between embryo and endometrium remain incompletely solved.",
            link: "https://www.fertstert.org/article/S0015-0282(26)00036-1/fulltext",
            image: null
          },
          {
            challenge: "Age-Related Egg Quality Decline",
            detail: "Oocyte aneuploidy rises steeply after 37 — by 42, >80% of eggs are chromosomally abnormal. No intervention currently reverses this biological clock.",
            link: "https://www.reproductivefacts.org",
            image: null
          },
          {
            challenge: "Cost & Access Inequality",
            detail: "A single IVF cycle costs $15,000–$25,000 in the US; global disparities in coverage and availability mean IVF remains inaccessible to most of the world's infertile population.",
            link: "https://www.who.int/news-room/fact-sheets/detail/infertility",
            image: null
          },
          {
            challenge: "Cumulative OHSS Risk",
            detail: "Despite segmentation and GnRH agonist triggers, severe OHSS still occurs in 0.5–2% of cycles, causing significant morbidity in high-responders.",
            link: "https://www.eshre.eu",
            image: null
          },
          {
            challenge: "Male Factor — Unexplained Sperm DNA Fragmentation",
            detail: "Standard semen analysis misses high DNA fragmentation index (DFI); even with ICSI, elevated DFI leads to poor blastocyst rates and recurrent miscarriage.",
            link: "https://www.fertstert.org/article/S0015-0282(26)00036-1/fulltext",
            image: null
          },
          {
            challenge: "Ethical Debates Around Surplus Embryo Disposition",
            detail: "Millions of frozen embryos in storage worldwide with unclear legal status; donation, destruction, and research use all face regulatory and moral complexity.",
            link: "https://www.hfea.gov.uk",
            image: null
          },
          {
            challenge: "Lack of Standardization Across Labs",
            detail: "Culture media, incubators, grading systems, and protocols vary widely; live birth rates differ 2-3x between top and bottom-quartile IVF labs with similar patient populations.",
            link: "https://www.sart.org",
            image: null
          },
          {
            challenge: "Long-Term Offspring Health Data Gaps",
            detail: "First IVF cohort only reached their 40s; epigenetic effects of in vitro culture, ICSI, and hormonal stimulation on long-term metabolic and reproductive health remain under study.",
            link: "https://www.nature.com/articles/d41586-025-03308-w",
            image: null
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
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            )}
            <div className="text-primary text-sm hover:underline self-center">
              Source: {item.link} ↗
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-between">
        <Link to="/ivf/technical" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-mono text-sm font-semibold hover:bg-muted transition-colors">
          <ArrowLeft className="h-4 w-4" /> Technical Approach
        </Link>
        <Link to="/ivf/regulations" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold hover:bg-primary/90 transition-colors">
          Regulations <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}