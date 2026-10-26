export default function BackgroundFX() {
  return (
    <>
      <div className="fixed inset-0 -z-50 bg-slate-950" />

      <div
        className="
          fixed
          left-[-150px]
          top-[-150px]
          -z-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/15
          blur-[120px]
        "
      />

      <div
        className="
          fixed
          right-[-200px]
          top-[120px]
          -z-40
          h-[600px]
          w-[600px]
          rounded-full
          bg-blue-600/15
          blur-[150px]
        "
      />

      <div
        className="
          fixed
          bottom-[-200px]
          left-1/2
          -translate-x-1/2
          -z-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/10
          blur-[140px]
        "
      />

      <div
        className="fixed inset-0 -z-30 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(#38bdf8 1px, transparent 1px),
            linear-gradient(90deg, #38bdf8 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </>
  );
}
