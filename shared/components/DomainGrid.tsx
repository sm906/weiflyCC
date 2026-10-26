import DomainCard from "./DomainCard";

export default function DomainGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            四大網域
          </h2>

          <p className="mt-4 text-slate-400">
            WeiflyCC 正式品牌入口
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <DomainCard
            domain="weiflycc.info"
            title="威飛文建館"
            description="公司介紹、品牌故事、資訊服務與官方入口。"
            color="#10b981"
          />

          <DomainCard
            domain="weiflycc.com"
            title="威飛展示館"
            description="客戶案例、網站展示與作品櫥窗。"
            color="#2563eb"
          />

          <DomainCard
            domain="weiflycc.org"
            title="威飛認證中心"
            description="Identity、MFA、SSO 與安全驗證服務。"
            color="#8b5cf6"
          />

          <DomainCard
            domain="weiflycc.net"
            title="威飛控制中心"
            description="AI、API、資料中心與數位控制核心。"
            color="#f97316"
          />

        </div>

      </div>
    </section>
  );
}
