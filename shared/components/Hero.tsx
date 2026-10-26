export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* 背景漸層 */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-slate-950 to-slate-950" />

      {/* 左光球 */}
      <div
        className="
          absolute
          left-0
          top-0
          h-96
          w-96
          rounded-full
          bg-cyan-500/20
          blur-3xl
        "
      />

      {/* 右光球 */}
      <div
        className="
          absolute
          right-0
          top-20
          h-96
          w-96
          rounded-full
          bg-blue-600/20
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 py-32">

        <div className="max-w-4xl">

          <div className="inline-flex rounded-full border border-slate-700 bg-slate-900/50 px-4 py-2 text-sm text-slate-300">
            WeiflyCC ・ 一個核心・四大網域
          </div>

          <h1 className="mt-8 text-6xl font-black text-white md:text-8xl">
            WeiflyCC
          </h1>

          <p className="mt-6 text-2xl font-semibold text-cyan-400 md:text-4xl">
            連結雲端、微軟與人工智慧
          </p>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            以 WeiflyCC Core 為核心，
            串聯 Cloudflare、Microsoft 與 AI 生態系，
            建立屬於個人、企業與未來數位世界的共同平台。
          </p>

        </div>

      </div>

    </section>
  )
}
