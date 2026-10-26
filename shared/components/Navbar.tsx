export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <div>
          <div className="font-bold text-white">
            WeiflyCC
          </div>

          <div className="text-xs text-slate-400">
            一個核心・四大網域
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm text-slate-300">

          <a
            href="https://weiflycc.info"
            target="_blank"
            rel="noopener noreferrer"
          >
            文建館
          </a>

          <a
            href="https://weiflycc.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            展示館
          </a>

          <a
            href="https://weiflycc.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            認證中心
          </a>

          <a
            href="https://weiflycc.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            控制中心
          </a>

        </nav>

      </div>
    </header>
  );
}
