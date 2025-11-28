type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow && (
        <span className="text-sm tracking-[0.2em] uppercase text-[var(--gold)] font-semibold">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-[var(--ink)] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-zinc-700 max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
