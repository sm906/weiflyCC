CREATE TABLE settings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key TEXT UNIQUE,
    value TEXT,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO settings (key,value)
VALUES
('site_name','WeiflyCC'),
('default_agent','CC01'),
('support_email','ice@weiflycc.com');
