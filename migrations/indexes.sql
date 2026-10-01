CREATE INDEX IF NOT EXISTS idx_users_role
ON users(role);

CREATE INDEX IF NOT EXISTS idx_users_status
ON users(status);

CREATE INDEX IF NOT EXISTS idx_nodes_status
ON nodes(status);

CREATE INDEX IF NOT EXISTS idx_nodes_last_seen
ON nodes(last_seen);

CREATE INDEX IF NOT EXISTS idx_services_node
ON services(node_id);

CREATE INDEX IF NOT EXISTS idx_services_status
ON services(status);

CREATE UNIQUE INDEX IF NOT EXISTS uq_service_node
ON services(node_id, name);

CREATE INDEX IF NOT EXISTS idx_tasks_status
ON tasks(status);

CREATE INDEX IF NOT EXISTS idx_tasks_priority
ON tasks(priority);

CREATE INDEX IF NOT EXISTS idx_logs_created
ON logs(created_at);

CREATE INDEX IF NOT EXISTS idx_logs_level
ON logs(level);

CREATE INDEX IF NOT EXISTS idx_ai_enabled
ON ai_providers(enabled);
