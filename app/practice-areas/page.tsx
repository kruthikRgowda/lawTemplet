import PageHeader from "../../components/PageHeader";
import SectionHeading from "../../components/SectionHeading";

export const metadata = {
  title: "Practice Areas",
  description:
    "Discover the industries and matters we support with deep subject-matter expertise.",
};

const areas = [
  {
    title: "Business Law",
    copy: "Entity strategy, complex transactions, and governance tuned to your risk posture.",
  },
  {
    title: "Family Law",
    copy: "Resolution-focused guidance that protects your interests with discretion.",
  },
  {
    title: "Insurance Defence",
    copy: "Coverage, claims handling, and litigation support with disciplined reporting.",
  },
  {
    title: "Industrial Law",
    copy: "Regulatory navigation, safety compliance, and investigations that stand up in court.",
  },
  {
    title: "Employment Law",
    copy: "Policies, training, investigations, and dispute resolution for modern teams.",
  },
  {
    title: "Criminal & Regulatory",
    copy: "White-collar defence, investigations, and crisis response with courtroom-ready teams.",
  },
];

export default function PracticeAreasPage() {
  return (
    <div className="bg-[var(--sand)]">
      <PageHeader
        title="Practice Areas"
        description="Reliable counsel across corporate, civil, and criminal matters."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-20 space-y-10">
        <SectionHeading
          eyebrow="Capability"
          title="Built for complex, cross-disciplinary work"
          subtitle="We combine courtroom skill with business fluency. Expect concise advice and decisive action."
          align="left"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-[var(--beige)]/60 bg-white/90 p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <div className="text-sm uppercase tracking-[0.2em] text-[var(--gold)] mb-2">
                Focus
              </div>
              <h3 className="font-heading text-xl text-[var(--ink)]">
                {area.title}
              </h3>
              <p className="text-sm text-zinc-700 mt-2">{area.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
