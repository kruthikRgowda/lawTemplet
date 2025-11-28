"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--ink)] text-white">
      <div className="absolute inset-0 bg-[var(--ink)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 lg:flex-row lg:items-center lg:py-24">
        <div className="flex-1 space-y-6">
          <div className="inline-block rounded-xl bg-white/5 px-4 py-2">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--gold)] font-semibold">
              Clients First
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-semibold leading-tight max-w-xl">
            <span className="block">Clients First.</span>
            <span className="text-[var(--gold)]">Quality Always.</span>
          </h1>
          <p className="text-lg text-white/80 max-w-xl">
            Count on us to secure a just outcome for you in the most efficient way
            possible, balancing affordability with empathetic guidance at every step.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--black)] hover:bg-[#c99b04] transition-colors"
            >
              Contact Us
            </Link>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <span className="text-2xl">⚒</span>
              <div>
                <div className="font-heading text-lg text-white">1650+</div>
                <div className="text-xs uppercase tracking-wide">Successful Cases</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 grid gap-4 lg:justify-end">
          <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 card-shadow">
            <Image
              src="https://shwetha.org/wp-content/uploads/2025/03/New-Project-2025-03-21T121930.517.jpg"
              alt="Lead attorney portrait"
              width={700}
              height={840}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="max-w-sm rounded-2xl bg-white/5 border border-white/10 px-6 py-5 text-center lg:ml-auto card-shadow">
            <div className="text-3xl sm:text-4xl font-heading text-[var(--gold)]">18</div>
            <div className="text-sm uppercase tracking-[0.2em]">Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
