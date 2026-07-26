export default function SelvedgeDivider({ className = "" }: { className?: string }) {
  return <div className={`selvedge ${className}`} aria-hidden="true" />;
}
