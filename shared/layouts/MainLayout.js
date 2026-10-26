import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function MainLayout({ children, }) {
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx("main", { children: children }), _jsx(Footer, {})] }));
}
