import RealmCard from "./RealmCard";

export default function RealmGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            三大世界
          </h2>

          <p className="mt-4 text-slate-400">
            WeiflyCC Core 所連結的數位生態圈
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <RealmCard
            icon="☁"
            title="小橘雲世界"
            description="Cloudflare Realm，負責 DNS、Tunnel、Zero Trust 與外部世界連結。"
          />

          <RealmCard
            icon="⊞"
            title="小微軟世界"
            description="Microsoft Realm，整合 Microsoft 365、Outlook、OneDrive、Copilot 與 Azure。"
          />

          <RealmCard
            icon="◉"
            title="小AI世界"
            description="Open WebUI、Ollama 與本地 AI 模型核心。"
          />

        </div>

      </div>
    </section>
  );
}
