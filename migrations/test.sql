CREATE TABLE users (
id TEXT PRIMARY KEY,
email TEXT NOT NULL UNIQUE,
display_name TEXT NOT NULL,
 
role TEXT NOT NULL
CHECK(role IN ('admin','operator','viewer')),
 
status TEXT NOT NULL DEFAULT 'active'
CHECK(status IN ('active','disabled')),
 
created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
