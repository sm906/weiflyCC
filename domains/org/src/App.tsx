export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <section className="py-32 text-center">

        <h1 className="text-6xl font-black">
          Weifly Identity
        </h1>

        <p className="mt-6 text-slate-400">
          One Login For All Realms
        </p>

      </section>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="p-6 rounded-3xl border border-slate-800">
          Login
        </div>

        <div className="p-6 rounded-3xl border border-slate-800">
          Register
        </div>

        <div className="p-6 rounded-3xl border border-slate-800">
          Passkey
        </div>

        <div className="p-6 rounded-3xl border border-slate-800">
          User Center
        </div>

      </div>

    </div>
  )
}
