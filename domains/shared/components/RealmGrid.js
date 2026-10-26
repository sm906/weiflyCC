import { jsx as _jsx } from "react/jsx-runtime";
const realms = [
    "Cloud Realm",
    "Microsoft Realm",
    "AI Realm",
    "Lab Realm",
];
export default function RealmGrid() {
    return (_jsx("section", { className: "grid gap-6 p-8 md:grid-cols-4", children: realms.map((realm) => (_jsx("div", { className: "rounded-2xl bg-slate-900 p-6", children: realm }, realm))) }));
}
