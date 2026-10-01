PRAGMA foreign_keys = ON;
 
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
 
CREATE TABLE nodes (
id TEXT PRIMARY KEY,
name TEXT NOT NULL UNIQUE,
hostname TEXT UNIQUE,
 
platform TEXT NOT NULL,
provider TEXT,
ipv4 TEXT,
 
status TEXT NOT NULL DEFAULT 'unknown'
CHECK(status IN (
'online',
'offline',
'warning',
'unknown'
)),
 
last_seen TEXT,
 
created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
 
CREATE TABLE services (
id TEXT PRIMARY KEY,
 
node_id TEXT NOT NULL,
 
name TEXT NOT NULL,
type TEXT NOT NULL,
 
endpoint TEXT,
 
status TEXT NOT NULL DEFAULT 'unknown'
CHECK(status IN (
'running',
'stopped',
'warning',
'unknown'
)),
 
created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 
FOREIGN KEY(node_id)
REFERENCES nodes(id)
ON DELETE CASCADE
);
 
CREATE TABLE tasks (
id TEXT PRIMARY KEY,
 
title TEXT NOT NULL,
description TEXT,
 
status TEXT NOT NULL DEFAULT 'pending'
CHECK(status IN (
'pending',
'running',
'completed',
'failed',
'cancelled'
)),
 
priority TEXT NOT NULL DEFAULT 'normal'
CHECK(priority IN (
'low',
'normal',
'high',
'critical'
)),
 
assigned_to TEXT,
 
created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 
completed_at TEXT,
 
FOREIGN KEY(assigned_to)
REFERENCES users(id)
);
 
CREATE TABLE logs (
id INTEGER PRIMARY KEY AUTOINCREMENT,
 
level TEXT NOT NULL
CHECK(level IN (
'DEBUG',
'INFO',
'WARN',
'ERROR',
'CRITICAL'
)),
 
source TEXT NOT NULL,
message TEXT NOT NULL,
 
metadata TEXT,
 
created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
 
CREATE TABLE settings (
key TEXT PRIMARY KEY,
 
value TEXT NOT NULL,
 
description TEXT,
 
updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
 
CREATE TABLE ai_providers (
id TEXT PRIMARY KEY,
 
name TEXT NOT NULL UNIQUE,
 
provider_type TEXT NOT NULL,
 
enabled INTEGER NOT NULL DEFAULT 1,
 
base_url TEXT,
 
model_count INTEGER DEFAULT 0,
 
created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
 
CREATE INDEX idx_users_role
ON users(role);
 
CREATE INDEX idx_users_status
ON users(status);
 
CREATE INDEX idx_nodes_status
ON nodes(status);
 
CREATE INDEX idx_nodes_last_seen
ON nodes(last_seen);
 
CREATE INDEX idx_services_status
ON services(status);
 
CREATE INDEX idx_services_type
ON services(type);
 
CREATE INDEX idx_services_node
ON services(node_id);
 
CREATE UNIQUE INDEX uq_service_node
ON services(node_id, name);
 
CREATE INDEX idx_tasks_status
ON tasks(status);
 
CREATE INDEX idx_tasks_priority
ON tasks(priority);
 
CREATE INDEX idx_tasks_assigned
ON tasks(assigned_to);
 
CREATE INDEX idx_tasks_created
ON tasks(created_at);
 
CREATE INDEX idx_logs_created
ON logs(created_at DESC);
 
CREATE INDEX idx_logs_level
ON logs(level);
 
CREATE INDEX idx_logs_source
ON logs(source);
 
CREATE INDEX idx_ai_enabled
ON ai_providers(enabled);
