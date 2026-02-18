import EndpointHeader from "@/components/docs/EndpointHeader";
import SectionDivider from "@/components/docs/SectionDivider";

export default function IVGRegulationsPage() {
  const regulations = [
    {
      name: "United States — FDA Prohibition on Heritable Genetic Modifications",
      description: "The FDA is prohibited from accepting clinical trial applications for embryos intentionally created or modified to include heritable genetic modifications. This restriction applies to potential future clinical use of IVG-derived gametes if they involve germline editing or significant heritable changes.",
      link: "https://www.centerwatch.com/insights/a-review-of-the-regulatory-landscape-for-in-vitro-gametogenesis",
    },
    {
      name: "United States — Dickey-Wicker Amendment (Ongoing Appropriations Rider)",
      description: "This annual appropriations rider prohibits federal funding for research that creates, destroys, or seriously injures human embryos. While it does not ban privately funded embryo research involving IVG-derived gametes, it significantly limits public funding for related studies.",
      link: "https://www.centerwatch.com/insights/a-review-of-the-regulatory-landscape-for-in-vitro-gametogenesis",
    },
    {
      name: "United Kingdom — Human Fertilisation and Embryology Act 1990 (as amended)",
      description: "Current UK law prohibits the clinical use of in vitro-derived gametes (IVD gametes) for treatment. IVG research is permitted, but creating embryos from IVG gametes for transfer into a patient would require legislative change. The 14-day rule limits embryo culture for research.",
      link: "https://cdn.nuffieldbioethics.org/wp-content/uploads/NCOB-In-Vitro-Gametogenesis-Report-FINAL.pdf",
    },
    {
      name: "United Kingdom — HFEA Recommendation on IVG (2025)",
      description: "The Human Fertilisation and Embryology Authority (HFEA) has recommended that government consider future regulation of in vitro gametes, emphasizing the need for legislative updates before clinical application, alongside public engagement and safety testing.",
      link: "https://www.hfea.gov.uk/about-us/news-and-press-releases/2025/the-hfea-s-recommendation-to-government-on-the-future-regulation-of-in-vitro-gametes/",
    },
    {
      name: "International Society for Stem Cell Research (ISSCR) Guidelines (Updated)",
      description: "Requires specialized oversight for research involving in vitro human gamete production when tested by fertilization or used to create embryos. Research on IVG without fertilization attempts is categorized separately but still requires ethical review. Clinical translation demands rigorous safety and adventitious agent testing.",
      link: "https://www.isscr.org/guidelines",
    },
    {
      name: "Japan — Guidelines on Research into Producing Germ Cells from hiPSCs (2010, revised)",
      description: "Japan permits research on creating in vitro-derived gametes and, as of 2025, allows generation of human embryos from stem cells for research purposes (no ovaries/testes needed). Clinical application remains restricted, with ongoing ethical oversight.",
      link: "https://english.kyodonews.net/articles/-/57957",
    },
    {
      name: "European Union — Biotechnology Patent Law (Article 6 Morality Clause)",
      description: "Patents on biotechnological inventions contrary to 'ordre public' or morality are prohibited. While IVG may circumvent some embryo-specific exclusions (no direct embryo use), broad ethical filters could limit patentability if deemed to threaten core societal values.",
      link: "https://law.stanford.edu/2025/08/22/ivg-and-the-eu-morality-clause-innovation-meets-ethical-guardrails",
    },
    {
      name: "Nuffield Council on Bioethics — IVG Ethical and Policy Review (2025)",
      description: "Recommends that regulatory frameworks evolve to avoid lagging behind biotechnology. Current UK law is an awkward fit for IVG; changes would be needed for clinical use after safety proof, public engagement, and ethical consideration.",
      link: "https://www.nuffieldbioethics.org/publication/in-vitro-gametogenesis-a-review-of-ethical-and-policy-questions",
    },
    {
      name: "American Society for Reproductive Medicine (ASRM) — Ethical Discussions",
      description: "Ongoing committee opinions and discussions highlight the need for robust regulatory frameworks, IRB oversight, and safety data before human application of IVG. Emphasizes ethical development to prevent premature clinical use.",
      link: "https://www.fertstert.org/article/S0015-0282(26)00036-1/fulltext",
    },
    {
      name: "Global — 14-Day Rule for Embryo Culture (with Extension Debates)",
      description: "Widely adopted limit (e.g., UK law, many guidelines) restricts in vitro human embryo culture to 14 days or primitive streak appearance. Debates (including calls for 28 days) impact IVG-derived embryo research; extensions would require policy changes in many jurisdictions.",
      link: "https://www.nuffieldbioethics.org/news-blog/nuffield-council-on-bioethics-begin-major-review-of-the-14-day-rule-for-research-on-human-embryos",
    },
  ];

  return (
    <>
      <EndpointHeader
        title="Limiting Regulations"
        description="Overview of key current regulatory restrictions, guidelines, and legal frameworks limiting the clinical application and research scope of in vitro gametogenesis (IVG) as of 2026. IVG remains experimental with no approved clinical use in humans worldwide."
      />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Major Regulatory Limitations on IVG</h2>
      <p className="text-lg text-muted-foreground mb-6">
        In vitro gametogenesis is heavily restricted for clinical use due to safety, ethical, and legal concerns. Research is permitted in many places under oversight, but human application (creating embryos for transfer) is prohibited or requires major legislative changes in most jurisdictions.
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
        Note: As of February 2026, no jurisdiction has approved IVG for routine clinical fertility treatment. Progress remains in research phases, with Japan leading in permissive embryo creation rules for study. Ethical bodies universally call for rigorous safety data, public consultation, and updated laws before any human use.
      </p>
    </>
  );
}