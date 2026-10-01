CREATE TABLE settings (
    key TEXT PRIMARY KEY,

    value TEXT NOT NULL,

    description TEXT,

    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
