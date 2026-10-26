import {
  Cloud,
  Building2,
  Bot,
  Shield,
} from "lucide-react";

export const realms = [
  {
    name: "Cloud Realm",
    icon: Cloud,
    description: "Cloudflare • Tunnel • DNS • R2",
  },

  {
    name: "Microsoft Realm",
    icon: Building2,
    description: "Microsoft 365 • OneDrive • Copilot",
  },

  {
    name: "AI Realm",
    icon: Bot,
    description: "Open WebUI • Ollama",
  },

  {
    name: "Identity Realm",
    icon: Shield,
    description: "SSO • Passkey • Auth",
  },
];
