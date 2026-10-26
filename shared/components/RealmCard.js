import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function RealmCard({ icon, title, description, }) {
    return (_jsxs("div", { className: "\n        rounded-3xl\n        border\n        border-slate-800\n        bg-slate-900/60\n        backdrop-blur\n        p-8\n        transition-all\n        duration-300\n        hover:-translate-y-1\n        hover:border-cyan-500\n      ", children: [_jsx("div", { className: "text-4xl", children: icon }), _jsx("h3", { className: "mt-6 text-2xl font-bold text-white", children: title }), _jsx("p", { className: "mt-4 leading-7 text-slate-400", children: description })] }));
}
