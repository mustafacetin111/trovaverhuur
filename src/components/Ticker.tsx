export default function Ticker() {
  const items = [
    "A-merk shovels",
    "Minigravers",
    "Met machinist",
    "Scherpe tarieven",
    "Vrijblijvende offerte",
    "Transport inbegrepen",
    "Heel Nederland",
  ];

  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-3.5"
      style={{
        background: "var(--orange)",
        borderTop: "none",
      }}
    >
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-white font-semibold text-sm mx-8"
            style={{ whiteSpace: "nowrap" }}
          >
            {item}
            <span className="mx-8 opacity-40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
