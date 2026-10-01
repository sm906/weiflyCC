CREATE TABLE services (
    id TEXT PRIMARY KEY,

    node_id TEXT NOT NULL,

    name TEXT NOT NULL,
    type TEXT NOT NULL,

    endpoint TEXT,

    status TEXT NOT NULL DEFAULT 'unknown',

    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(node_id)
        REFERENCES nodes(id)
        ON DELETE CASCADE
);
