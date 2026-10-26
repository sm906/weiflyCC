const realms = [
  "Cloud Realm",
  "Microsoft Realm",
  "AI Realm",
  "Lab Realm",
];

export default function RealmGrid() {
  return (
    <section className="grid gap-6 p-8 md:grid-cols-4">
      {realms.map((realm) => (
        <div
          key={realm}
          className="rounded-2xl bg-slate-900 p-6"
        >
          {realm}
        </div>
      ))}
    </section>
  );
}
