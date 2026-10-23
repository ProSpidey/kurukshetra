ALTER TABLE rooms ADD COLUMN relay_epoch INTEGER NOT NULL DEFAULT -1;
--> statement-breakpoint
ALTER TABLE service_matches ADD COLUMN recovery_until INTEGER NOT NULL DEFAULT 0;
--> statement-breakpoint
CREATE TABLE relay_packets (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 room TEXT NOT NULL REFERENCES rooms(code) ON DELETE CASCADE,
 epoch INTEGER NOT NULL,
 seat INTEGER NOT NULL,
 nonce TEXT NOT NULL,
 payload TEXT NOT NULL,
 created INTEGER NOT NULL,
 UNIQUE(room,epoch,seat,nonce)
);
--> statement-breakpoint
CREATE INDEX relay_packets_read ON relay_packets(room,epoch,id);
--> statement-breakpoint
CREATE INDEX relay_packets_expiry ON relay_packets(room,created);
--> statement-breakpoint
