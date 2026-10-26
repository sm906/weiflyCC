import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function DomainCard({ domain, title, description, color, }) {
    return (_jsxs("a", { href: `https://${domain}`, target: "_blank", rel: "noopener noreferrer", className: "\n        group\n        relative\n        overflow-hidden\n        rounded-3xl\n        border\n        border-slate-800\n        bg-slate-900/80\n        p-6\n        transition-all\n        duration-300\n        hover:-translate-y-2\n        hover:border-slate-600\n      ", children: [_jsx("div", { className: "\n          absolute\n          -right-16\n          -top-16\n          h-40\n          w-40\n          rounded-full\n          blur-3xl\n          opacity-20\n          transition-all\n          duration-500\n          group-hover:opacity-40\n        ", style: {
                    backgroundColor: color,
                } }), _jsx("div", { className: "mb-4 h-1 w-20 rounded-full", style: {
                    backgroundColor: color,
                } }), _jsx("p", { className: "text-xs text-slate-500", children: domain }), _jsx("h3", { className: "mt-2 text-xl font-bold text-white", children: title }), _jsx("p", { className: "mt-3 text-slate-400", children: description }), _jsx("div", { className: "mt-6 text-sm font-medium text-cyan-400", children: "\u7ACB\u5373\u9032\u5165 \u2192" })] }));
}
