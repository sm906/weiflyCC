CREATE TABLE files (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    owner_id INTEGER,

    filename TEXT,

    object_key TEXT,

    bucket TEXT,

    content_type TEXT,

    size INTEGER,

    created_at DATETIME
    DEFAULT CURRENT_TIMESTAMP
);
