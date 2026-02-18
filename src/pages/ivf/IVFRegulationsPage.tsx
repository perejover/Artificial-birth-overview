import EndpointHeader from "@/components/docs/EndpointHeader";
import SectionDivider from "@/components/docs/SectionDivider";

export default function IVFRegulationsPage() {
  const regulations = [
    {
      name: "United States — No Federal IVF Law; State-Level Variation",
      description: "The US has no single federal law governing IVF. Regulation is a patchwork of state laws. Following the Alabama Supreme Court 'embryo personhood' ruling in 2024, legislative activity accelerated. As of 2026, 21 states mandate insurance coverage for IVF and 14 states have passed IVF Protection Acts explicitly shielding clinics and patients from embryo personhood litigation.",
      link: "https://www.reproductivefacts.org",
    },
    {
      name: "United States — FDA Oversight of IVF Lab Products and Devices",
      description: "The FDA regulates culture media, catheters, sperm wash kits, and incubators as medical devices. Genetic tests including PGT-A and ERA are regulated as laboratory-developed tests (LDTs) under new 2024 LDT guidance. Embryo manipulation procedures themselves are not FDA-approved drugs but fall under 'practice of medicine' exemption.",
      link: "https://www.fda.gov/medical-devices/products-and-medical-procedures/in-vitro-fertilization-ivf",
    },
    {
      name: "United States — Dickey-Wicker Amendment",
      description: "This annual appropriations rider prohibits federal funding for research in which human embryos are created, destroyed, or subjected to more than minimal risk. It directly limits NIH funding for IVF-related embryo research and has constrained US competitiveness in reproductive science.",
      link: "https://www.centerwatch.com/insights/a-review-of-the-regulatory-landscape-for-in-vitro-gametogenesis",
    },
    {
      name: "United Kingdom — Human Fertilisation and Embryology Act 1990 (as amended 2008)",
      description: "The HFEA licenses all UK IVF clinics. The Act mandates welfare of the child assessment, limits embryo culture to 14 days, requires consent for embryo storage and use, and prohibits sex selection for non-medical reasons. IVF using donor gametes requires donor registration. HFEA publishes annual clinic success rate data publicly.",
      link: "https://www.hfea.gov.uk",
    },
    {
      name: "United Kingdom — HFEA Code of Practice (9th Edition, 2025 Update)",
      description: "The updated Code includes new guidance on AI-based embryo selection tools (must be validated and CE-marked before clinical use), non-invasive PGT (requires HFEA research classification until validated), and updated counseling requirements for patients banking embryos beyond the standard 10-year storage limit.",
      link: "https://www.hfea.gov.uk/about-us/news-and-press-releases/2025/the-hfea-s-recommendation-to-government-on-the-future-regulation-of-in-vitro-gametes/",
    },
    {
      name: "European Union — Tissue and Cells Directive (2004/23/EC) and Updates",
      description: "EU member states must implement standards for procurement, testing, processing, and storage of human tissues and cells used in IVF (gametes, embryos). Cross-border reproductive care operates under a patchwork — egg donation is legal in Spain and Czech Republic but prohibited in Germany and Italy, driving significant fertility tourism within the EU.",
      link: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32004L0023",
    },
    {
      name: "Germany — Embryo Protection Act (Embryonenschutzgesetz, 1990)",
      description: "One of the most restrictive frameworks in the developed world: prohibits creation of more than 3 embryos per cycle, bans egg donation, prohibits PGT-A for chromosomal aneuploidy screening (though PGT-M for hereditary diseases was permitted by court ruling in 2010). German patients frequently travel to other EU countries for treatment.",
      link: "https://www.gesetze-im-internet.de/eschg/",
    },
    {
      name: "Spain — Law 14/2006 on Assisted Human Reproduction Techniques",
      description: "Spain is one of the most permissive IVF jurisdictions in Europe. Allows egg donation (anonymous), unlimited embryo creation per cycle, PGT for aneuploidies and HLA matching, storage of surplus embryos indefinitely, and access for single women and same-sex female couples. Spain is the top destination for reproductive tourism in Europe.",
      link: "https://www.boe.es/buscar/doc.php?id=BOE-A-2006-9292",
    },
    {
      name: "International — ESHRE Guidelines on IVF (2024 Update)",
      description: "The European Society of Human Reproduction and Embryology publishes evidence-based guidelines on ovarian stimulation, luteal phase support, endometrial preparation for FET, and genetic testing. The 2024 update downgraded ERA for unselected patients and added recommendations on AI embryo selection tool validation requirements.",
      link: "https://www.eshre.eu/Guidelines-and-Legal/Guidelines.aspx",
    },
    {
      name: "International — ASRM Ethics Committee Opinions",
      description: "The American Society for Reproductive Medicine issues ongoing ethical guidance on embryo disposition, donor anonymity, preconception genetic testing, and emerging technologies. The 2025 opinion on AI in embryo selection emphasizes transparency requirements and patient disclosure when algorithms influence clinical decisions.",
      link: "https://www.reproductivefacts.org/news-and-publications/ethics-committee-opinions/",
    },
  ];

  return (
    <>
      <EndpointHeader
        title="IVF — Limiting Regulations"
        description="Overview of key current regulatory restrictions, guidelines, and legal frameworks governing In Vitro Fertilization (IVF) as of 2026. IVF is the most regulated and litigated area of reproductive medicine worldwide."
      />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Major Regulatory Frameworks for IVF</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Unlike experimental technologies such as IVG, IVF has a 45-year clinical history and is extensively regulated worldwide. However, regulations vary dramatically by jurisdiction — creating significant disparities in access, permitted practices, and patient rights.
      </p>

      <div className="space-y-4 my-6">
        {regulations.map((item, index) => (
          <div
            onClick={() => window.open(item.link, '_blank')}
            key={index}
            className="p-4 rounded-lg border border-border bg-card cursor-pointer hover:bg-muted/50 transition-colors"
          >
            <p className="font-mono text-sm font-semibold text-foreground mb-1">{item.name}</p>
            <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
            <div className="text-primary text-sm hover:underline">
              Source: {item.link} ↗
            </div>
          </div>
        ))}
      </div>

      <SectionDivider />

      <p className="text-muted-foreground mt-6">
        Note: As of February 2026, IVF is legally practiced in most countries but under highly variable frameworks. Key areas of ongoing regulatory debate include: embryo personhood and legal status, AI tool validation requirements, limits on the number of embryos created, donor anonymity versus right-to-know, and access mandates through insurance coverage. The HFEA (UK) and ESHRE (Europe) remain the most influential regulatory and guideline bodies internationally.
      </p>
    </>
  );
}