import Link from "next/link";

const contactItems = [
  { label: "No. 128, Sanskruti, Suvarna Badavane, 6th cross, Nagarbhavi 1st stage, Bengaluru - 560072", href: "#" },
  { label: "shwetha@sralegal.co.in", href: "mailto:shwetha@sralegal.co.in" },
  { label: "+919972916991", href: "tel:+919972916991" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Twitter", href: "https://x.com" },
  { label: "Facebook", href: "https://www.facebook.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white mt-16">
      <div className="mx-auto max-w-6xl px-4 py-14 grid gap-10 md:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 border border-white/10">
              <span className="text-2xl font-semibold text-[var(--gold)]">
                ⚖
              </span>
            </div>
            <div className="leading-tight">
              <div className="text-sm uppercase tracking-[0.2em] text-[var(--gold)]">
                Lawyera
              </div>
              <div className="font-heading text-xl font-semibold">Legal Office</div>
            </div>
          </div>
          <p className="text-sm text-white/70 max-w-xs">
            Boutique legal firm providing exceptional service and accessible
            expertise across corporate, civil, and criminal matters.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-lg mb-4 text-[var(--gold)]">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            {contactItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-[var(--gold)] transition-colors text-white/80"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg mb-4 text-[var(--gold)]">
            Stay Updated
          </h3>
          <p className="text-sm text-white/70 mb-3">
            Subscribe for legal insights, case studies, and firm updates.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-[var(--gold)] focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-md bg-[var(--gold)] px-3 py-2 text-sm font-semibold text-[var(--black)] hover:bg-[#c99b04] transition-colors"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-4 flex gap-3 text-sm">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="hover:text-[var(--gold)] transition-colors"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-sm text-white/60 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
          <span>© 2025 Lawyera. All rights reserved.</span>
          <span>Crafted for premium legal experiences.</span>
        </div>
      </div>
    </footer>
  );
}
