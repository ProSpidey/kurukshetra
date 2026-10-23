CREATE TABLE `player_entitlements` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`entitlement_type` text NOT NULL,
	`target_id` text NOT NULL,
	`source` text NOT NULL,
	`granted_at` integer NOT NULL,
	`expires_at` integer,
	`metadata` text DEFAULT '{}' NOT NULL,
	`transaction_id` text,
	FOREIGN KEY (`user_id`) REFERENCES `accounts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `player_entitlements_transaction_id_unique` ON `player_entitlements` (`transaction_id`);--> statement-breakpoint
CREATE INDEX `entitlement_user` ON `player_entitlements` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `entitlement_permanent_character` ON `player_entitlements` (`user_id`,`target_id`) WHERE entitlement_type='CHARACTER_PERMANENT' AND expires_at IS NULL;--> statement-breakpoint
CREATE TABLE `character_trial_consumptions` (
	`user_id` text NOT NULL,
	`character_id` text NOT NULL,
	`match_id` text NOT NULL,
	`consumed_at` integer NOT NULL,
	PRIMARY KEY(`user_id`, `character_id`, `match_id`),
	FOREIGN KEY (`user_id`) REFERENCES `accounts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
ALTER TABLE `rooms` ADD `host_user` text REFERENCES accounts(id);--> statement-breakpoint
ALTER TABLE `rooms` ADD `guest_user` text REFERENCES accounts(id);--> statement-breakpoint
ALTER TABLE `currency_transactions` ADD `character_id` text;