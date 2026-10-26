import { useState } from "react";

import {
  Menu,
  X,
  ExternalLink,
  HeartPulse,
} from "lucide-react";

import { services } from "../config/services";
import { realms } from "../config/realms";
import { quickLinks } from "../config/links";

function getStatusColor(status: string) {
  switch (status) {
    case "online":
      return "bg-green-500";

    case "warning":
      return "bg-yellow-500";

    case "offline":
      return "bg-red-500";

    default:
      return "bg-slate-500";
  }
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const online = services.filter(
    (s) => s.status === "online"
  ).length;

  const warning = services.filter(
    (s) => s.status === "warning"
  ).length;

  const offline = services.filter(
    (s) => s.status === "offline"
  ).length;

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Background */}

      <div className="fixed inset-0 -z-50 overflow-hidden">

        <div
          className="
          absolute
          left-1/2
          top-[-200px]
          -translate-x-1/2
          w-[1000px]
          h-[1000px]
          rounded-full
          bg-blue-600/20
          blur-3xl
        "
        />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(#60a5fa 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

      </div>

      {/* Navbar */}

      <header className="sticky top-0 z-50 glass border-b border-slate-800">

        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

          <div>

            <div className="font-black">
              WeiflyCC
            </div>

            <div className="text-xs text-slate-400">
              Control Center
            </div>

          </div>

          <nav className="hidden lg:flex gap-8">

            <a href="https://weiflycc.com">.COM</a>
            <a href="https://weiflycc.info">.INFO</a>
            <a href="https://weiflycc.net">.NET</a>
            <a href="https://weiflycc.org">.ORG</a>

          </nav>

          <div className="hidden lg:flex items-center gap-2">

            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

            <span className="text-sm text-slate-400">
              Universe Online
            </span>

          </div>

          <button
            className="lg:hidden"
            onClick={() =>
              setMenuOpen(true)
            }
          >
            <Menu />
          </button>

        </div>

      </header>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="fixed inset-0 z-50">

          <div
            className="absolute inset-0 bg-black/60"
            onClick={() =>
              setMenuOpen(false)
            }
          />

          <div
            className="
            absolute
            right-0
            top-0
            h-full
            w-[280px]
            bg-slate-900
            border-l
            border-slate-800
            p-6
          "
          >

            <div className="flex justify-between mb-8">

              <h2 className="font-bold">
                WeiflyCC
              </h2>

              <button
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                <X />
              </button>

            </div>

            <div className="flex flex-col gap-5">

              <a href="https://weiflycc.com">
                官方網站
              </a>

              <a href="https://weiflycc.info">
                威飛文建館
              </a>

              <a href="https://weiflycc.net">
                威飛控制台
              </a>

              <a href="https://weiflycc.org">
                威飛認證中心
              </a>

            </div>

          </div>

        </div>
      )}

      {/* Hero */}

      <section className="min-h-[60vh] flex items-center justify-center px-6">

        <div className="text-center">

          <div
            className="
            inline-flex
            px-4 py-2
            rounded-full
            bg-blue-500/10
            border
            border-blue-500/20
            text-blue-400
          "
          >
            WeiflyCC Core
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-black">

            One Core

            <br />

            Four Realms

          </h1>

          <p className="text-slate-400 mt-6">
            Cloud • Microsoft • AI • Identity
          </p>

        </div>

      </section>

      {/* Realms */}

      <section className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-8">
          Four Realms
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {realms.map((realm) => {
            const Icon = realm.icon;

            return (
              <div
                key={realm.name}
                className="glass rounded-3xl p-6"
              >

                <Icon
                  size={28}
                  className="text-blue-400 mb-4"
                />

                <h3 className="font-bold text-xl mb-2">
                  {realm.name}
                </h3>

                <p className="text-slate-400">
                  {realm.description}
                </p>

              </div>
            );
          })}

        </div>

      </section>

      {/* Service Summary */}

      <section className="max-w-7xl mx-auto px-6 mt-16">

        <div className="grid gap-4 md:grid-cols-3">

          <div className="glass rounded-3xl p-6">
            <div className="text-green-400">
              Online
            </div>

            <div className="text-4xl font-black">
              {online}
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <div className="text-yellow-400">
              Warning
            </div>

            <div className="text-4xl font-black">
              {warning}
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <div className="text-red-400">
              Offline
            </div>

            <div className="text-4xl font-black">
              {offline}
            </div>
          </div>

        </div>

      </section>

      {/* Doctor */}

      <section className="max-w-7xl mx-auto px-6 mt-16">

        <div className="glass rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-6">

            <HeartPulse />

            <h2 className="text-2xl font-bold">
              CC Doctor
            </h2>

          </div>

          <div className="space-y-3">

            {services.map((service) => (

              <div
                key={service.id}
                className="
                flex
                items-center
                justify-between
                border-b
                border-slate-800
                pb-3
                "
              >

                <div>

                  <div className="font-medium">
                    {service.name}
                  </div>

                  <div className="text-xs text-slate-500">
                    {service.description}
                  </div>

                </div>

                <div className="flex items-center gap-2">

                  <div
                    className={`
                    w-3
                    h-3
                    rounded-full
                    ${getStatusColor(
                      service.status
                    )}
                  `}
                  />

                  <span className="capitalize">
                    {service.status}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Quick Access */}

      <section className="max-w-7xl mx-auto px-6 mt-16">

        <h2 className="text-3xl font-bold mb-6">
          Quick Access
        </h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {quickLinks.map((link) => (

            <a
              key={link.name}
              href={link.url}
              className="
              glass
              rounded-2xl
              p-4
              flex
              justify-between
              items-center
              "
            >

              {link.name}

              <ExternalLink size={18} />

            </a>

          ))}

        </div>

      </section>

      {/* Jauk */}

      <section className="max-w-7xl mx-auto px-6 mt-16">

        <div className="glass rounded-3xl p-8">

          <h2 className="text-3xl font-bold">
            🤖 CC01 Jauk
          </h2>

          <p className="text-slate-400 mt-2">
            Prototype Ready
          </p>

          <p className="text-slate-500 mt-2">
            First Assistant Of WeiflyCC
          </p>

        </div>

      </section>

      {/* Footer */}

      <footer className="mt-20 border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <h2 className="font-bold text-xl">
            WeiflyCC Universe
          </h2>

          <p className="text-slate-400 mt-2">
            One Core • Four Realms
          </p>

          <div className="mt-6 text-slate-500">

            CC Navigator Online

            <br />

            CC01 Jauk Prototype Ready

          </div>

        </div>

      </footer>

    </div>
  );
}
