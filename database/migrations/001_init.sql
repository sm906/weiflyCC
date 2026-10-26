-- users

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    username TEXT UNIQUE NOT NULL,
    display_name TEXT,

    email TEXT UNIQUE,

    avatar_url TEXT,

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- memories

CREATE TABLE memories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    user_id INTEGER NOT NULL,

    title TEXT NOT NULL,

    content TEXT NOT NULL,

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- chat

CREATE TABLE chat_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    user_id INTEGER,

    role TEXT NOT NULL,

    message TEXT NOT NULL,

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- realms

CREATE TABLE realms (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    realm TEXT UNIQUE,

    title TEXT,

    status TEXT,

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- uploads

CREATE TABLE uploads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    filename TEXT NOT NULL,

    object_key TEXT NOT NULL,

    url TEXT,

    content_type TEXT,

    uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
