export default function StatsBar() {
  const stats = [
    { label: "Domains", value: "4" },
    { label: "Core", value: "1" },
    { label: "Realms", value: "4" },
    { label: "AI Hub", value: "24/7" },
  ];

  return (
    <section className="grid gap-4 p-8 md:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl bg-slate-900 p-6"
        >
          <div className="text-3xl font-bold">
            {item.value}
          </div>

          <div className="text-slate-400">
            {item.label}
          </div>
        </div>
      ))}
    </section>
  );
}
