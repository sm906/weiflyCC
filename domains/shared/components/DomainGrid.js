import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const domains = [
    {
        name: "weiflycc.com",
        title: "官方展示館",
    },
    {
        name: "weiflycc.info",
        title: "威飛文建館",
    },
    {
        name: "weiflycc.net",
        title: "威飛控制台",
    },
    {
        name: "weiflycc.org",
        title: "威飛認證中心",
    },
];
export default function DomainGrid() {
    return (_jsx("section", { className: "grid gap-6 p-8 md:grid-cols-2", children: domains.map((domain) => (_jsxs("div", { className: "rounded-2xl border border-slate-800 p-6", children: [_jsx("h3", { className: "text-xl font-bold", children: domain.name }), _jsx("p", { className: "mt-2 text-slate-400", children: domain.title })] }, domain.name))) }));
}
