ALTER TABLE currency_transactions ADD COLUMN cosmetic_id text;
--> statement-breakpoint
ALTER TABLE currency_transactions ADD COLUMN cosmetic_type text;
--> statement-breakpoint
ALTER TABLE currency_transactions ADD COLUMN request_id text;
--> statement-breakpoint
CREATE UNIQUE INDEX cosmetic_purchase_request ON currency_transactions(user_id,request_id) WHERE request_id IS NOT NULL;
--> statement-breakpoint
CREATE UNIQUE INDEX entitlement_permanent_cosmetic ON player_entitlements(user_id,target_id) WHERE entitlement_type='COSMETIC' AND expires_at IS NULL;
--> statement-breakpoint
CREATE TABLE cosmetic_loadouts(user_id text PRIMARY KEY NOT NULL REFERENCES accounts(id), data text NOT NULL, updated_at integer NOT NULL);
--> statement-breakpoint
ALTER TABLE match_players ADD COLUMN cosmetics text;
--> statement-breakpoint
CREATE TABLE match_emotes(match_id text NOT NULL,seat integer NOT NULL,emote_id text NOT NULL,triggered_at integer NOT NULL,PRIMARY KEY(match_id,seat));

--> statement-breakpoint
ALTER TABLE rooms ADD COLUMN host_cosmetics text;
--> statement-breakpoint
ALTER TABLE rooms ADD COLUMN guest_cosmetics text;
