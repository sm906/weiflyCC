export type ServiceStatus =
  | "online"
  | "warning"
  | "offline";

export interface Service {
  id: string;
  name: string;
  realm: string;
  status: ServiceStatus;
  description: string;
}

export const services: Service[] = [
  {
    id: "ccos",
    name: "CCOS",
    realm: "Core",
    status: "online",
    description: "Core Operating Layer",
  },

  {
    id: "identity",
    name: "Identity",
    realm: "Identity",
    status: "online",
    description: "SSO • Passkey • Auth",
  },

  {
    id: "memory",
    name: "Memory",
    realm: "Library",
    status: "online",
    description: "Knowledge Base",
  },

  {
    id: "api",
    name: "API",
    realm: "API",
    status: "online",
    description: "Hono Backend",
  },

  {
    id: "cloudflare",
    name: "Cloudflare",
    realm: "Cloud",
    status: "online",
    description: "DNS • Tunnel • Workers",
  },

  {
    id: "openwebui",
    name: "Open WebUI",
    realm: "AI",
    status: "online",
    description: "AI Portal",
  },

  {
    id: "ollama",
    name: "Ollama",
    realm: "AI",
    status: "online",
    description: "Local Models",
  },

  {
    id: "telemetry",
    name: "Telemetry",
    realm: "Monitor",
    status: "warning",
    description: "Metrics Collection",
  },
];
