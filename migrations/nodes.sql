CREATE TABLE nodes (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    hostname TEXT UNIQUE,
    platform TEXT NOT NULL,
    provider TEXT,
    ipv4 TEXT,
    status TEXT NOT NULL DEFAULT 'unknown',
    last_seen TEXT,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
