do $$
DECLARE ROW_COUNT INTEGER DEFAULT 0;
BEGIN

row_count := 0;
IF NOT EXISTS (SELECT 1 FROM auth.users WHERE username='admin') THEN
	INSERT INTO auth.users(username, firstname, lastname, password, email)
	VALUES ('admin', 'admin', 'admin', '$2a$10$bjz0wtlnsK0BYLbmr.1RKOss5qPJA3YSO8Ipi7KKsBnbOBzkYtViy', 'admin@admin.com');

	GET DIAGNOSTICS row_count = ROW_COUNT;
END IF;
RAISE NOTICE 'Inwserted % rows into auth.users.', row_count;

END;
$$
