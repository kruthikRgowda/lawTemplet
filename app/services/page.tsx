import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import SectionHeading from "../../components/SectionHeading";

export const metadata = {
  title: "Services",
  description:
    "Explore our full suite of legal services across corporate, civil, and criminal matters.",
};

const services = [
  {
    title: "Corporate Advisory",
    copy: "Strategic counsel for acquisitions, restructures, and governance with risk mitigation baked in.",
  },
  {
    title: "Commercial Litigation",
    copy: "Aggressive representation for contract disputes, fraud claims, and high-stakes business conflicts.",
  },
  {
    title: "Employment & Labour",
    copy: "Executive agreements, workplace investigations, compliance programs, and dispute resolution.",
  },
  {
    title: "Insurance Defence",
    copy: "Coverage opinions, complex claims handling, and trial-ready defence in sensitive matters.",
  },
  {
    title: "Family Law",
    copy: "Discreet, empathetic guidance through custody, support, and asset division.",
  },
  {
    title: "White-Collar Defence",
    copy: "Internal investigations, crisis response, and courtroom advocacy for complex allegations.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[var(--sand)]">
      <PageHeader
        title="Services"
        description="End-to-end representation with clarity, speed, and senior attention."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-20 space-y-10">
        <SectionHeading
          eyebrow="What we do"
          title="Strategic legal services built around your objectives"
          subtitle="We guide leaders, founders, and teams through complex legal decisions with a clear point of view."
          align="left"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-[var(--beige)]/60 bg-white/90 p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <div className="text-sm uppercase tracking-[0.2em] text-[var(--gold)] mb-2">
                Service
              </div>
              <h3 className="font-heading text-xl text-[var(--ink)]">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-700 mt-2">{service.copy}</p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] hover:text-[var(--gold)]"
              >
                Talk to us <span aria-hidden>›</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
