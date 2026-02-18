import EndpointHeader from "@/components/docs/EndpointHeader";
import InfoCard from "@/components/docs/InfoCard";
import SectionDivider from "@/components/docs/SectionDivider";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function AbstractPage() {
  return (
    <>
      <EndpointHeader
        title="Problem Statement"
        description="A formal analysis of the failures, risks, and limitations of natural human reproduction — and the case for engineering a superior alternative."
      />
      <h2 className="text-2xl font-mono font-bold text-foreground mb-6">
        Core Problems Addressed by Full Artificial Reproduction
      </h2>

      <div className="space-y-4">
        {[
          {
            title: "High miscarriage & early pregnancy loss",
            description:
              "10–20% of clinically recognized pregnancies end in spontaneous abortion; true rate (including very early losses) is estimated at 40–60%.",
            link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12477614/",
            linkText: "Trends in risk of pregnancy loss among U.S. women, 2000–2018",
          },
          {
            title: "Preeclampsia & eclampsia",
            description:
              "Affects 5–8% of pregnancies globally; responsible for ~76,000 maternal and ~500,000 fetal/neonatal deaths per year.",
            link: "https://www.who.int/news-room/fact-sheets/detail/pre-eclampsia",
            linkText: "WHO – Pre-eclampsia Fact Sheet",
          },
          {
            title: "Gestational diabetes",
            description:
              "Develops in 2–10% of pregnancies; increases risks of macrosomia, birth complications, and future type 2 diabetes for mother and child.",
            link: "https://www.cdc.gov/diabetes/about/gestational-diabetes.html",
            linkText: "CDC – Gestational Diabetes",
          },
          {
            title: "Postpartum hemorrhage",
            description:
              "Occurs in ~5% of births; remains the leading cause of maternal death worldwide (~70,000 women/year).",
            link: "https://www.who.int/teams/sexual-and-reproductive-health-and-research-(srh)/areas-of-work/maternal-and-perinatal-health/postpartum-haemorrhage",
            linkText: "WHO – Postpartum Haemorrhage",
          },
          {
            title: "Preterm birth & related infant mortality",
            description:
              "~10% of babies born preterm (<37 weeks); preterm complications are the leading cause of death in children under 5.",
            link: "https://www.who.int/news-room/fact-sheets/detail/preterm-birth",
            linkText: "WHO – Preterm Birth Fact Sheet",
          },
          {
            title: "Elevated maternal mortality (even in high-income countries)",
            description:
              "U.S. maternal mortality rate reached 32.9 per 100,000 live births in 2021 — 3× higher than in the 1990s and highest among high-income nations.",
            link: "https://www.cdc.gov/nchs/data/hestat/maternal-mortality/2021/maternal-mortality-rates-2021.htm",
            linkText: "CDC – Maternal Mortality Rates 2021",
          },
          {
            title: "Permanent physical damage to mothers",
            description:
              "Pelvic floor disorders (25–50% of women), diastasis recti, spinal changes, dental deterioration, lasting hormonal/endocrine alterations.",
            link: "https://www.scientificamerican.com/article/how-long-do-pregnancy-and-birth-affect-the-body/",
            linkText: "Scientific American – Long-term effects of pregnancy",
          },
          {
            title: "Pregnancy as leading cause of death for reproductive-age women",
            description:
              "In many regions of the world, pregnancy and childbirth remain the #1 cause of death among women aged 15–49.",
            link: "https://www.who.int/news-room/fact-sheets/detail/maternal-mortality",
            linkText: "WHO – Maternal Mortality Fact Sheet",
          },
          {
            title: "Pregnancy-related workplace discrimination & career penalties",
            description:
              "~1 in 5 mothers report experiencing pregnancy or maternity discrimination at work.",
            link: "https://bipartisanpolicy.org/blog/bpc-morning-consult-pregnancy-discrimination/",
            linkText: "Bipartisan Policy Center – Pregnancy Discrimination Survey",
          },
          {
            title: "Transmission of thousands of hereditary genetic diseases",
            description:
              "Single-gene disorders and chromosomal conditions cause substantial infant mortality and lifelong disability.",
            link: "https://radygenomics.org/2023/somid-study-genetic-disease-infant-mortality/",
            linkText: "Rady Genomics – Genetic Disease & Infant Mortality Study",
          },
          {
            title: "High infant mortality linked to pregnancy & birth complications",
            description:
              "Many of the >20,000 annual infant deaths in the US are attributable to preterm birth, low birth weight, and maternal complications.",
            link: "https://www.cdc.gov/maternal-infant-health/infant-mortality/index.html",
            linkText: "CDC – Infant Mortality",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-mono font-semibold text-foreground mb-1.5">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-md text-primary hover:underline inline-flex items-center gap-1"
            >
              Source → {item.linkText}
            </a>
          </div>
        ))}
      </div>

      <InfoCard variant="warning" title="Core engineering reframing" className="mt-10">
        If natural pregnancy were a new medical technology or device submitted for regulatory approval today, it would almost certainly be rejected due to its high complication and mortality rates. Full artificial reproduction aims to provide a controlled, dramatically safer alternative.
      </InfoCard>

      <div className="mt-12 flex justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-mono text-sm font-semibold hover:bg-muted transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Introduction
        </Link>
        <Link
          to="/ivg/biological"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          Next: IVG – Biological Fundamentals <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}