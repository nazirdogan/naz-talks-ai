interface ValuePropCardProps {
  number: string;
  title: string;
  description: string;
}

export default function ValuePropCard({
  number,
  title,
  description,
}: ValuePropCardProps) {
  return (
    <div>
      <span className="font-mono text-xs text-accent"><span>{"//"}</span> {number}</span>
      <h3 className="font-sans font-semibold text-ink mt-1">{title}</h3>
      <p className="font-sans text-sm text-subtle mt-1">{description}</p>
    </div>
  );
}
