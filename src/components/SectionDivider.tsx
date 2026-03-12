export function SectionDivider() {
  return (
    <div className="py-4 py-md-5 d-flex justify-content-center" aria-hidden>
      <div
        className="section-divider-shine"
        style={{
          width: "80px",
          height: "3px",
          borderRadius: "2px",
          background: "linear-gradient(90deg, transparent 0%, #EC8305 20%, #f09428 50%, #EC8305 80%, transparent 100%)",
          boxShadow: "0 0 8px rgba(236, 131, 5, 0.4)",
        }}
      />
    </div>
  );
}
