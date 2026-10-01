INSERT INTO nodes (
  id,
  name,
  hostname,
  platform,
  provider,
  status
)
VALUES (
  'node-001',
  'weiflycc',
  'weiflycc',
  'Ubuntu 24.04',
  'HomeLab',
  'online'
);

INSERT INTO services (
  id,
  node_id,
  name,
  type,
  status
)
VALUES (
  'svc-001',
  'node-001',
  'ollama',
  'ai',
  'running'
);
``
