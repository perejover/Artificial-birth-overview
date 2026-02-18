import EndpointHeader from "@/components/docs/EndpointHeader";
import SectionDivider from "@/components/docs/SectionDivider";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function IVFTechnicalPage() {
  return (
    <>
      <EndpointHeader
        title="IVF — Technical Approach"
        description="The step-by-step clinical and laboratory process of In Vitro Fertilization: ovarian stimulation, egg retrieval, fertilization, embryo culture, selection, and transfer."
      />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Required Clinical Inputs</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Essential assessments, patient parameters, and materials needed to initiate an IVF cycle.
      </p>
      <div className="space-y-3 my-6">
        {[
          { name: "Ovarian Reserve Assessment", description: "Antral follicle count (AFC) via transvaginal ultrasound and serum AMH levels to predict stimulation response and egg yield." },
          { name: "Gonadotropin Protocol", description: "Recombinant FSH (follitropin alfa/beta) and/or hMG injections to stimulate multiple follicle development. Protocol type (antagonist vs. long agonist) chosen per patient profile." },
          { name: "Semen Analysis", description: "WHO 2021 criteria evaluation: concentration, motility, morphology. Determines fertilization method (conventional IVF vs. ICSI vs. surgical sperm retrieval)." },
          { name: "Endometrial Evaluation", description: "Trilaminar endometrial pattern ≥7mm on ultrasound and ERA (Endometrial Receptivity Array) test if recurrent implantation failure." },
          { name: "Preimplantation Genetic Testing (PGT)", description: "Optional: PGT-A (aneuploidy), PGT-M (monogenic), or PGT-SR (structural rearrangement) for embryo selection before transfer." },
        ].map((item) => (
          <div key={item.name} className="p-4 rounded-lg border border-border bg-card">
            <p className="font-mono text-sm font-semibold text-foreground mb-1">{item.name}</p>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">The IVF Pipeline: Step by Step</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Comprehensive overview of the multi-stage IVF workflow, from ovarian stimulation to embryo transfer and luteal support.
      </p>
      <img
        src="https://www.eggdonors.asia/wp-content/uploads/2019/04/IVG-embryos-procedure.jpg"
        alt="Diagram of IVF process step by step overview"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.eggdonors.asia/in-vitro-gametogenesis-ivg-embryology/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: IVF Embryology Procedure Overview
      </a>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Step 1: Controlled Ovarian Hyperstimulation (Days 1–12)</h3>
      <p className="text-base text-muted-foreground mb-6">
        Daily subcutaneous gonadotropin injections to stimulate multiple follicle development, monitored by serial transvaginal ultrasound and serum estradiol.
      </p>
      <img
        src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/11/15/17/39/an00841_-ds00686_im03507_sn7_skinbiopsythu_jpg.jpg"
        alt="Diagram of subcutaneous injection technique for IVF stimulation"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.mayoclinic.org/tests-procedures/skin-biopsy/about/pac-20384634"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Injection technique reference — Mayo Clinic
      </a>
      <p className="text-muted-foreground mt-4">
        The goal is to recruit 8–15 mature follicles (≥18mm) by using FSH doses of 150–450 IU/day. GnRH antagonists (cetrorelix, ganirelix) are added around Day 5–6 to suppress premature LH surges. Monitoring occurs every 1–2 days in the final phase. Trigger shot (hCG or GnRH agonist) is given 34–36 hours before planned egg retrieval.
      </p>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Step 2: Egg Retrieval — Transvaginal Oocyte Pick-Up (Day 12–14)</h3>
      <p className="text-base text-muted-foreground mb-6">
        Ultrasound-guided transvaginal aspiration of follicular fluid to collect mature oocytes under intravenous sedation.
      </p>
      <img
        src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41392-024-01809-0/MediaObjects/41392_2024_1809_Fig1_HTML.png"
        alt="Diagram of transvaginal oocyte retrieval procedure IVF"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.nature.com/articles/s41392-024-01809-0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Oocyte retrieval and assessment — Nature
      </a>
      <p className="text-muted-foreground mt-4">
        A 17-gauge aspiration needle is passed through the vaginal wall under ultrasound guidance. Follicular fluid from each follicle is immediately passed to the embryologist who identifies oocytes under a stereomicroscope. The procedure takes 20–30 minutes. Oocytes are graded by maturity (GV, MI, MII) — only MII oocytes can be fertilized.
      </p>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Step 3: Fertilization — Conventional IVF or ICSI (Day 0)</h3>
      <p className="text-base text-muted-foreground mb-6">
        Insemination of oocytes by conventional IVF (sperm incubation) or intracytoplasmic sperm injection (ICSI) for severe male factor infertility.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Fertilization.svg/1200px-Fertilization.svg.png"
        alt="Diagram of ICSI procedure injecting sperm into oocyte"
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
      <p className="text-muted-foreground mt-4">
        In ICSI, a single morphologically selected sperm is immobilized and injected directly into the cytoplasm using a glass micropipette under an inverted microscope with micromanipulators. ICSI is used in ~70% of IVF cycles worldwide. Fertilization is confirmed at 16–18 hours by the appearance of two pronuclei (2PN).
      </p>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Step 4: Embryo Culture & Development (Days 1–6)</h3>
      <p className="text-base text-muted-foreground mb-6">
        Embryos are cultured in sequential media (cleavage-stage then blastocyst media) in low-oxygen (5% O₂) incubators, monitored by time-lapse imaging.
      </p>
      <img
        src="https://www.oakclinic-group.com/wp/wp-content/themes/oak-clinic/en/assets/images/funin/about_ivm__Image.png"
        alt="Diagram of embryo culture incubator and development stages"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://www.oakclinic-group.com/en/funin/ivm/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Embryo culture conditions — Oak Clinic
      </a>
      <p className="text-muted-foreground mt-4">
        Modern IVF labs use time-lapse incubators (EmbryoScope, Geri+) that image embryos every 5–15 minutes without removing them from the controlled environment. Algorithms analyze kinetic parameters (tPNf, t2, t5, tM, tSB, tB) to rank embryos by developmental potential. Embryos reaching expanded blastocyst stage (Day 5–6) have the highest implantation rates.
      </p>

      <h3 className="text-xl font-mono font-semibold text-foreground mt-6 mb-4">Step 5: Embryo Transfer or Cryopreservation</h3>
      <p className="text-base text-muted-foreground mb-6">
        Transfer of 1–2 selected embryos into the uterine cavity via a soft catheter, or vitrification of surplus embryos for future frozen-thawed cycles.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Blastocyst_English.svg/1200px-Blastocyst_English.svg.png"
        alt="Diagram of blastocyst ready for embryo transfer"
        className="max-w-full h-auto rounded-lg mb-2"
      />
      <a
        href="https://en.wikipedia.org/wiki/Blastocyst"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xl hover:underline"
      >
        Source: Blastocyst structure — Wikipedia
      </a>
      <p className="text-muted-foreground mt-4">
        Vitrification (ultra-rapid cooling at &gt;15,000°C/min using cryoprotectants) achieves &gt;95% post-thaw survival rates. Frozen-embryo transfers (FET) in a natural or hormonally prepared cycle now account for the majority of IVF births in many countries. Endometrial preparation uses estradiol valerate followed by progesterone supplementation.
      </p>

      <SectionDivider />

      <h2 className="text-2xl font-mono font-bold text-foreground mb-4">Key Technical Challenges</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Major hurdles limiting IVF success rates and clinical outcomes.
      </p>
      <div className="space-y-3 my-6">
        {[
          { challenge: "Implantation failure despite euploid embryos", detail: "~30–40% of chromosomally normal blastocysts still fail to implant; endometrial receptivity, immune tolerance, and microbiome factors remain incompletely understood." },
          { challenge: "Ovarian hyperstimulation syndrome (OHSS)", detail: "Exaggerated response to gonadotropins causing fluid shifts, thrombosis risk; managed by GnRH agonist trigger and segmentation strategy but not fully eliminated." },
          { challenge: "Poor ovarian response", detail: "Low AMH, diminished ovarian reserve, or advanced maternal age leads to few oocytes and poor embryo quality despite maximum stimulation." },
          { challenge: "Embryo selection accuracy", detail: "Morphological and time-lapse grading are imperfect predictors of implantation; AI-based scoring and non-invasive metabolomics are active research areas." },
        ].map((item) => (
          <div key={item.challenge} className="p-4 rounded-lg border border-border bg-card">
            <p className="font-mono text-sm font-semibold text-foreground mb-1">{item.challenge}</p>
            <p className="text-sm text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-between">
        <Link to="/ivf/biological" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-mono text-sm font-semibold hover:bg-muted transition-colors">
          <ArrowLeft className="h-4 w-4" /> Biological Explanation
        </Link>
        <Link to="/ivf/current" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold hover:bg-primary/90 transition-colors">
          Current Overview <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}