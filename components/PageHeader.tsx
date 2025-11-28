import Image from "next/image";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
};

export default function PageHeader({
  eyebrow = "Lawyera",
  title,
  description,
  image = "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80",
}: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--ink)] text-white">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-[var(--ink)]/75" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-24 flex items-end">
        <div className="max-w-3xl space-y-4">
          {eyebrow && (
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--gold)] font-semibold">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-heading font-semibold">{title}</h1>
          <p className="text-lg text-white/80">{description}</p>
        </div>
      </div>
    </section>
  );
}
