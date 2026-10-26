CREATE TABLE cc_agents (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    code TEXT UNIQUE NOT NULL,

    name TEXT NOT NULL,

    realm TEXT NOT NULL,

    avatar TEXT,

    prompt TEXT,

    created_at DATETIME
    DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO cc_agents
(code,name,realm)

VALUES
('CC01','Navigator','INFO'),
('CC02','Showcase','COM'),
('CC03','Control','NET'),
('CC04','Identity','ORG'),
('CCAI','Core','AI');
