import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function StatsBar() {
    const stats = [
        { label: "Domains", value: "4" },
        { label: "Core", value: "1" },
        { label: "Realms", value: "4" },
        { label: "AI Hub", value: "24/7" },
    ];
    return (_jsx("section", { className: "grid gap-4 p-8 md:grid-cols-4", children: stats.map((item) => (_jsxs("div", { className: "rounded-2xl bg-slate-900 p-6", children: [_jsx("div", { className: "text-3xl font-bold", children: item.value }), _jsx("div", { className: "text-slate-400", children: item.label })] }, item.label))) }));
}
