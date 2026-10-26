CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    display_name TEXT,
    email TEXT UNIQUE,
    avatar_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE realms (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    status TEXT DEFAULT 'online',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO realms (code,title)
VALUES
('INFO','CC-01 Home'),
('COM','CC-02 Showcase'),
('NET','CC-03 Control Center'),
('ORG','CC-04 Identity'),
('AI','CC-AI Core');

CREATE TABLE cc_agents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    realm TEXT NOT NULL,
    avatar_url TEXT,
    system_prompt TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO cc_agents
(code,name,realm)
VALUES
('CC01','Navigator','INFO'),
('CC02','Showcase','COM'),
('CC03','Control','NET'),
('CC04','Identity','ORG'),
('CCAI','Core','AI');

CREATE TABLE memories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    agent_code TEXT,
    title TEXT,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE chat_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    agent_code TEXT,
    role TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE files (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    filename TEXT,
    object_key TEXT,
    bucket TEXT,
    content_type TEXT,
    file_size INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
