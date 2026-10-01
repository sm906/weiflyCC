CREATE TABLE ai_providers (
    id TEXT PRIMARY KEY,

    name TEXT NOT NULL UNIQUE,

    provider_type TEXT NOT NULL,

    enabled INTEGER NOT NULL DEFAULT 1,

    base_url TEXT,

    model_count INTEGER DEFAULT 0,

    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
