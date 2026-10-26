export default function VisionSection() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-4xl font-bold text-white">
          WeiflyCC 願景
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-300">
          從個人到企業，
          從雲端到人工智慧，
          以一個核心串連所有服務，
          打造屬於未來數位生活的共同平台。
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="text-cyan-400 text-xl font-bold">
              Core
            </div>

            <div className="mt-2 text-slate-400">
              一個核心
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="text-cyan-400 text-xl font-bold">
              Domains
            </div>

            <div className="mt-2 text-slate-400">
              四大網域
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="text-cyan-400 text-xl font-bold">
              Realms
            </div>

            <div className="mt-2 text-slate-400">
              三大世界
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
