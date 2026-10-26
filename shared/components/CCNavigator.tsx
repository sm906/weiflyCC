import RealmCard from "./RealmCard"

export default function CCNavigator() {

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <h2 className="text-3xl font-bold mb-8">
        CC Navigator
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <RealmCard
          title="Cloud Realm"
          description="Cloudflare Services"
        />

        <RealmCard
          title="Microsoft Realm"
          description="M365 Ecosystem"
        />

        <RealmCard
          title="AI Realm"
          description="Open WebUI + Ollama"
        />

        <RealmCard
          title="Identity Realm"
          description="Authentication Center"
        />

      </div>

    </section>
  )
}
