export default function StatsBar() {
  return (
    <section className="border-y border-slate-800 bg-slate-950/50">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-8 text-center md:grid-cols-4">

          <div>
            <div className="text-3xl font-bold text-cyan-400">
              4
            </div>

            <div className="text-slate-400">
              正式網域
            </div>
          </div>

          <div>
            <div className="text-3xl font-bold text-cyan-400">
              3
            </div>

            <div className="text-slate-400">
              核心世界
            </div>
          </div>

          <div>
            <div className="text-3xl font-bold text-cyan-400">
              1
            </div>

            <div className="text-slate-400">
              WeiflyCC Core
            </div>
          </div>

          <div>
            <div className="text-3xl font-bold text-cyan-400">
              ∞
            </div>

            <div className="text-slate-400">
              延伸可能
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
