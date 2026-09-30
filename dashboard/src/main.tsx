import React from "react"
import ReactDOM from "react-dom/client"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import "./index.css"

import App from "./App"

import Infra from "./pages/Infra"
import R2 from "./pages/R2"
import AI from "./pages/AI"
import CC from "./pages/CC"

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route
          path="/infra"
          element={<Infra />}
        />

        <Route
          path="/r2"
          element={<R2 />}
        />

        <Route
          path="/ai"
          element={<AI />}
        />

        <Route
          path="/cc"
          element={<CC />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
