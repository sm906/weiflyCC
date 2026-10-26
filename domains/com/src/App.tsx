function Card({
  title,
  desc,
  href
}: {
  title: string
  desc: string
  href: string
}) {
  return (
    <a
      href={href}
      className="
      rounded-3xl
      border
      border-slate-800
      bg-slate-900/60
      backdrop-blur
      p-6
      hover:border-blue-500
      transition
      block
      "
    >
      <h3 className="text-xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-slate-400">
        {desc}
      </p>
    </a>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/80 border-b border-slate-800">

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          <div>
            <div className="font-bold">
              WeiflyCC
            </div>

            <div className="text-xs text-slate-400">
              Universe
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#">首頁</a>
            <a href="#">案例</a>
            <a href="#">服務</a>
            <a href="#">聯絡我們</a>
          </nav>

        </div>

      </header>

      <main>

        <section className="py-32 px-6 text-center">

          <div className="inline-flex px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 mb-6">
            Weifly Studio
          </div>

          <h1 className="text-6xl font-black mb-6">
            威飛工作室
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Cloud • AI • Identity • Web
            <br />
            打造屬於自己的數位宇宙
          </p>

        </section>

        <section className="max-w-7xl mx-auto px-6 pb-20">

          <h2 className="text-3xl font-bold mb-8">
            WeiflyCC Universe
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <Card
              title="威飛文建館"
              desc="Knowledge Realm"
              href="https://weiflycc.info"
            />

            <Card
              title="威飛控制台"
              desc="Control Center"
              href="https://weiflycc.net"
            />

            <Card
              title="威飛認證中心"
              desc="Identity Realm"
              href="https://weiflycc.org"
            />

            <Card
              title="CC Navigator"
              desc="Universe Navigation"
              href="https://weiflycc.net"
            />

          </div>

        </section>

        <section className="max-w-7xl mx-auto px-6 pb-20">

          <h2 className="text-3xl font-bold mb-8">
            客戶案例
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <Card
              title="毅澄環保"
              desc="ESG 數位管理平台"
              href="https://clear.weiflycc.com"
            />

            <Card
              title="興旺汽車"
              desc="數位營運平台"
              href="https://xw.weiflycc.com"
            />

          </div>

        </section>

      </main>

      <footer className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="font-bold">
            WeiflyCC Universe
          </div>

          <div className="text-slate-400 mt-2">
            One Core • Four Realms
          </div>

          <div className="mt-6 text-sm text-slate-500">
            CC Navigator Online
            <br />
            CC01 Jauk Prototype Ready
          </div>

        </div>

      </footer>

    </div>
  )
}
