import Image from "next/image";
import Link from "next/link";
import HeroSlider from "../components/HeroSlider";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";

const features = [
  {
    title: "Expert Lawyers",
    copy: "Seasoned attorneys with trial experience and strategic negotiation skills.",
    icon: "⚖",
  },
  {
    title: "Trusted Service",
    copy: "Concierge-style communication with transparent guidance at every step.",
    icon: "🤝",
  },
  {
    title: "Successful Cases",
    copy: "Proven outcomes across corporate, civil, and criminal matters.",
    icon: "🏛",
  },
  {
    title: "Client-First Counsel",
    copy: "Every strategy is built around your goals, risk profile, and timeline.",
    icon: "📜",
  },
];

const practiceAreas = [
  {
    title: "Business Law",
    description: "Formation, governance, and complex transactions with risk-forward thinking.",
    icon: "briefcase",
  },
  {
    title: "Family Law",
    description: "Custody, divorce, and support matters handled with discretion and empathy.",
    icon: "family",
  },
  {
    title: "Insurance Defence",
    description: "Coverage disputes, bad-faith claims, and risk mitigation strategies.",
    icon: "shield",
  },
  {
    title: "Industrial Law",
    description: "Compliance, regulatory navigation, and workplace investigations.",
    icon: "factory",
  },
  {
    title: "Employment Law",
    description: "Executive agreements, disputes, and workplace policy counsel.",
    icon: "users",
  },
  {
    title: "Litigation",
    description: "Commercial disputes, white-collar defence, and cross-border matters.",
    icon: "gavel",
  },
];

const team = [
  {
    name: "Ian Savage",
    role: "Managing Partner",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Michael Oykhman",
    role: "Trial Lawyer",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ryan Patmore",
    role: "Corporate Counsel",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ava Carter",
    role: "Litigation Specialist",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
  },
];

const testimonials = [
  {
    quote:
      "Our matter required speed and nuance. Lawyera translated complex risk into an actionable plan and delivered.",
    name: "Sophia Reynolds",
    title: "COO, Meridian Ventures",
  },
  {
    quote:
      "They kept us informed, calm, and ahead of the curve. A partner you want beside you in court and at the table.",
    name: "Daniel Brooks",
    title: "Founder, Northpoint Labs",
  },
];

export default function Home() {
  return (
    <div className="bg-[var(--sand)]">
      <HeroSlider />

      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-20 grid gap-12 lg:grid-cols-2 items-center">
        <div className="relative">
          <div className="absolute -inset-6 border border-[var(--beige)] rounded-2xl opacity-60" />
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
            alt="Principal attorney"
            width={640}
            height={780}
            className="relative rounded-2xl object-cover card-shadow"
          />
        </div>
        <div className="space-y-5">
          <SectionHeading
            eyebrow="About Us"
            title="Realize your constitutional right with qualified help"
            subtitle="We pair courtroom craftsmanship with business fluency to deliver precise, decisive results for clients who expect more."
            align="left"
          />
          <ul className="grid gap-3 text-sm text-[var(--ink)]/90">
            <li className="flex items-center gap-3">
              <span className="text-[var(--gold)]">—</span> Pre-file investigation
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[var(--gold)]">—</span> Probation violations
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[var(--gold)]">—</span> Illegal search &amp; seizure
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[var(--gold)]">—</span> Professional liability
            </li>
          </ul>
          <div className="flex gap-3">
            <Link
              href="/about"
              className="rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--black)] hover:bg-[#c99b04] transition-colors"
            >
              Read more
            </Link>
            <Link
              href="/practice-areas"
              className="rounded-full border border-[var(--ink)]/20 px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
            >
              View practice areas
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:py-20 noise-bg">
        <div className="mx-auto max-w-6xl space-y-10">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Reliable lawyer agency with high-quality legal services"
            subtitle="Every matter receives senior attention. We operate lean, communicate clearly, and align on outcomes early."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-[var(--beige)]/60 bg-white/80 px-5 py-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
              >
                <div className="text-2xl mb-3">{feature.icon}</div>
                <h3 className="font-heading text-xl text-[var(--ink)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-700">{feature.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--ink)] text-white px-4 py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" aria-hidden>
          <Image
            src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-6xl space-y-10">
          <SectionHeading
            eyebrow="Practice Areas"
            title="Strategic counsel for sophisticated matters"
            subtitle="We operate across industries with courtroom-tested litigators and pragmatic advisors."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-[var(--gold)]/80 transition-colors"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-[var(--gold)]">
                  {area.icon === "briefcase" && "💼"}
                  {area.icon === "family" && "👥"}
                  {area.icon === "shield" && "🛡"}
                  {area.icon === "factory" && "🏭"}
                  {area.icon === "users" && "👔"}
                  {area.icon === "gavel" && "⚒"}
                </div>
                <h3 className="font-heading text-lg">{area.title}</h3>
                <p className="text-sm text-white/75 mt-2">{area.description}</p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)]"
                >
                  Learn more <span aria-hidden>›</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl space-y-10">
          <SectionHeading
            eyebrow="Our Team"
            title="Attorneys dedicated to your success"
            subtitle="A multidisciplinary team of litigators, negotiators, and advisors focused on clarity and results."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl overflow-hidden border border-[var(--beige)]/60 bg-white card-shadow flex flex-col"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-[var(--ink)] text-white px-4 py-5 text-center">
                  <div className="font-heading text-lg">{member.name}</div>
                  <div className="text-sm text-white/80">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Case Evaluation"
              title="Tell us about your matter"
              subtitle="Share the essentials so our attorneys can quickly advise on next steps and timelines."
              align="left"
            />
            <div className="rounded-2xl border border-[var(--beige)]/70 bg-[var(--sand)]/60 p-6 space-y-3">
              <div className="font-heading text-lg text-[var(--ink)]">
                What we are good at
              </div>
              <ul className="space-y-2 text-sm text-zinc-700">
                <li>• Proven track record in high-stakes litigation</li>
                <li>• Experienced trial attorneys with negotiation edge</li>
                <li>• Business-first counsel that respects your time</li>
                <li>• Clear timelines and transparent communication</li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--ink)]/10 bg-[var(--ink)] text-white p-8 card-shadow">
            <h3 className="font-heading text-xl mb-4 text-[var(--gold)]">
              Free consultation
            </h3>
            <ContactForm variant="dark" />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:py-20 noise-bg">
        <div className="mx-auto max-w-6xl space-y-10">
          <SectionHeading
            eyebrow="Testimonials"
            title="What our clients say"
            subtitle="Partnership means being proactive, precise, and transparent."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-[var(--beige)]/60 bg-white/80 p-6 shadow-sm"
              >
                <div className="text-4xl text-[var(--gold)] mb-3">“</div>
                <p className="text-lg text-[var(--ink)] mb-4">
                  {testimonial.quote}
                </p>
                <div className="font-heading text-base text-[var(--ink)]">
                  {testimonial.name}
                </div>
                <div className="text-sm text-zinc-700">{testimonial.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-[var(--ink)] text-white">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--gold)] font-semibold">
              Ready to start?
            </p>
            <h3 className="font-heading text-2xl">
              Let’s discuss your case today.
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--black)] hover:bg-[#c99b04] transition-colors"
            >
              Schedule a call
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
            >
              Learn about the firm
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
