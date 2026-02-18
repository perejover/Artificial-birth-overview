import EndpointHeader from "@/components/docs/EndpointHeader";
import SectionDivider from "@/components/docs/SectionDivider";

export default function AWRegulationsPage() {
  const regulations = [
    {
      name: "United States — No FDA Approval Pathway for Artificial Wombs",
      description: "As of 2026, the FDA has not established a specific regulatory category for artificial womb devices. Such technology would likely require a Breakthrough Device Designation (BDD) and a Pre-Submission meeting to define the IDE (Investigational Device Exemption) pathway. The CHOP team reported entering pre-IND discussions in 2025, but no formal pathway exists. The FDA's existing ECMO device framework provides only partial regulatory guidance.",
      link: "https://www.fda.gov/medical-devices/products-and-medical-procedures/in-vitro-fertilization-ivf",
    },
    {
      name: "United States — 22-Week Viability Standard & Legal Implications",
      description: "Post-Dobbs, fetal viability is a central legal concept in abortion law across US states. Artificial womb technology that pushes viability to 22 weeks (or earlier) would have profound legal implications for state abortion statutes, fetal personhood debates, and NICU standard-of-care decisions. No state law currently addresses artificial womb devices explicitly.",
      link: "https://www.reproductivefacts.org",
    },
    {
      name: "United Kingdom — HFEA Jurisdiction Unclear for Artificial Womb Devices",
      description: "The Human Fertilisation and Embryology Act 1990 (as amended) regulates embryos and gametes but does not clearly cover later-stage fetal support devices. A fetus supported in an artificial womb from 22 weeks onward falls outside HFEA scope. The MHRA (Medicines and Healthcare products Regulatory Agency) would likely regulate the device components, but no guidance exists as of 2026.",
      link: "https://www.hfea.gov.uk/about-us/news-and-press-releases/2025/the-hfea-s-recommendation-to-government-on-the-future-regulation-of-in-vitro-gametes/",
    },
    {
      name: "European Union — Medical Devices Regulation (EU MDR 2017/745)",
      description: "Artificial womb devices would fall under EU MDR as Class III devices (highest risk), requiring a Notified Body conformity assessment and clinical investigation under strict safety monitoring. The EU MDR does not address the novel ethical dimensions of sustaining a fetus ex utero; supplementary ethics committee guidance would be required from national bodies.",
      link: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
    },
    {
      name: "Australia — TGA Regulation & NHMRC Ethics Requirements",
      description: "Australia's Therapeutic Goods Administration (TGA) would regulate artificial womb devices under the Medical Devices framework. The National Health and Medical Research Council (NHMRC) National Statement requires multi-tier ethics review for research involving fetuses and innovative procedures. The 2025 EXO-Life Series A included a formal regulatory pathway mapping exercise with TGA consultation.",
      link: "https://www.nhmrc.gov.au/about-us/publications/national-statement-ethical-conduct-human-research-2023",
    },
    {
      name: "International — ISSCR Guidelines on Fetal Research (2021, Updated 2025)",
      description: "The ISSCR guidelines were updated in 2025 to add a specific category for artificial womb and ex utero fetal support research. Requirements include: specialized ethics committee approval, defined gestational age limits for animal experiments, mandatory reporting of adverse events, and a prohibition on research aimed at full ectogenesis until safety data from partial support systems is established.",
      link: "https://www.isscr.org/guidelines",
    },
    {
      name: "Nuffield Council on Bioethics — Ectogenesis Review (2025)",
      description: "The Nuffield Council published a major policy review of ectogenesis ethics in 2025, concluding that partial ectogenesis for extremely premature neonates is ethically permissible subject to safety data, that full ectogenesis raises deeper questions about reproductive autonomy and commodification, and that preemptive regulatory frameworks should be developed before clinical use.",
      link: "https://www.nuffieldbioethics.org/publication/in-vitro-gametogenesis-a-review-of-ethical-and-policy-questions",
    },
    {
      name: "Japan — Bioethics Committee Provisional Stance",
      description: "Japan's Cabinet Office Bioethics Committee has not issued formal guidance specifically on artificial wombs. The existing framework for extracorporeal life support (ECLS) covers current ECMO use in neonates, but extension to ex utero fetal support would require new ministerial guidance under the Medical Practitioners Act and Ethics Guidelines for Clinical Research.",
      link: "https://english.kyodonews.net/articles/-/57957",
    },
    {
      name: "Global — WHO Framework on Novel Reproductive Technologies",
      description: "The World Health Organization does not have binding regulations on artificial wombs but has called for member states to develop regulatory frameworks proactively. The WHO's 2024 report on Assisted Reproductive Technologies highlighted ectogenesis as a near-term priority for regulatory attention given the pace of animal research advances.",
      link: "https://www.who.int/news-room/fact-sheets/detail/infertility",
    },
    {
      name: "Ethical — The Abortion Rights Dimension",
      description: "The most politically sensitive regulatory issue: if artificial wombs become available, some argue they could (or should) be used as an alternative to abortion — effectively making fetal 'transfer' rather than termination an option. Pro-choice bioethicists warn this creates reproductive coercion risks; pro-life advocates see it as potentially resolving the abortion debate. No jurisdiction has legislated on this interaction.",
      link: "https://www.tandfonline.com/doi/full/10.1080/14636778.2025.2542733",
    },
  ];

  return (
    <>
      <EndpointHeader
        title="Artificial Womb — Limiting Regulations"
        description="Overview of key current regulatory restrictions, guidelines, and legal frameworks limiting the clinical application and research scope of artificial womb (ectogenesis) technology as of 2026. No artificial womb has been used in a human patient; regulatory frameworks are nascent or entirely absent."
      />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Major Regulatory Limitations on Artificial Womb Technology</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Artificial womb technology is perhaps the most regulatory under-addressed area of advanced reproductive medicine. While animal experiments have progressed significantly, the absence of human-specific regulatory pathways in any major jurisdiction represents a critical barrier to clinical translation.
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
        Note: As of February 2026, no artificial womb has been used in a human patient. All clinical-grade BioBag experiments have used fetal lambs. The first human trials are estimated to be 3–7 years away pending animal safety data, FDA pre-IND clearance, and ethics committee approval. The regulatory landscape is evolving rapidly; the Nuffield Council, ISSCR, and WHO have all identified artificial womb regulation as a near-term policy priority.
      </p>
    </>
  );
}