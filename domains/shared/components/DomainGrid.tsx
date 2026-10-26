const domains = [
  {
    name: "weiflycc.com",
    title: "官方展示館",
  },
  {
    name: "weiflycc.info",
    title: "威飛文建館",
  },
  {
    name: "weiflycc.net",
    title: "威飛控制台",
  },
  {
    name: "weiflycc.org",
    title: "威飛認證中心",
  },
];

export default function DomainGrid() {
  return (
    <section className="grid gap-6 p-8 md:grid-cols-2">
      {domains.map((domain) => (
        <div
          key={domain.name}
          className="rounded-2xl border border-slate-800 p-6"
        >
          <h3 className="text-xl font-bold">
            {domain.name}
          </h3>

          <p className="mt-2 text-slate-400">
            {domain.title}
          </p>
        </div>
      ))}
    </section>
  );
}
