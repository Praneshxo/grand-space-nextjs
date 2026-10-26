export default function Stats() {
  const stats = [
    { num: 15, label: "Years Experience" },
    { num: 10, label: "Ongoing Projects" },
    { num: 1610, label: "Completed Projects" },
    { num: 5321, label: "Happy Clients" },
  ];

  return (
    <div className="stats">
      {stats.map((s, i) => (
        <div key={i} className="stat">
          <h3 className="stat-num" data-value={s.num}>0</h3>
          <p>{s.label}</p>
        </div>
      ))}
    </div>
  );
}
