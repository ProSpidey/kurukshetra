CREATE TABLE `accounts` (
	`id` text PRIMARY KEY NOT NULL,
	`player_id` text NOT NULL,
	`display_name` text,
	`normalized_name` text,
	`avatar` integer DEFAULT 0 NOT NULL,
	`provider` text DEFAULT 'guest' NOT NULL,
	`identity` text,
	`status` text DEFAULT 'active' NOT NULL,
	`created` integer NOT NULL,
	`last_login` integer NOT NULL,
	`region` text DEFAULT 'auto' NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `accounts_player_id_unique` ON `accounts` (`player_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `accounts_normalized_name_unique` ON `accounts` (`normalized_name`);--> statement-breakpoint
CREATE UNIQUE INDEX `accounts_identity_unique` ON `accounts` (`identity`);--> statement-breakpoint
CREATE TABLE `player_blocks` (
	`pair` text PRIMARY KEY NOT NULL,
	`owner` text NOT NULL,
	`target` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `friend_challenges` (
	`id` text PRIMARY KEY NOT NULL,
	`sender` text NOT NULL,
	`recipient` text NOT NULL,
	`status` text NOT NULL,
	`expires` integer NOT NULL,
	`match_id` text
);
--> statement-breakpoint
CREATE TABLE `match_history` (
	`key` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`match_id` text NOT NULL,
	`opponent` text NOT NULL,
	`mode` text NOT NULL,
	`hero` integer,
	`enemy_hero` integer,
	`result` text NOT NULL,
	`score` text NOT NULL,
	`delta` integer NOT NULL,
	`reward` integer NOT NULL,
	`rating_after` integer NOT NULL,
	`timestamp` integer NOT NULL,
	`reason` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `history_user_time` ON `match_history` (`user_id`,`timestamp`);--> statement-breakpoint
CREATE TABLE `match_inputs` (
	`key` text PRIMARY KEY NOT NULL,
	`match_id` text NOT NULL,
	`seat` integer NOT NULL,
	`start` integer NOT NULL,
	`end` integer NOT NULL,
	`data` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `inputs_match_end` ON `match_inputs` (`match_id`,`end`);--> statement-breakpoint
CREATE TABLE `service_matches` (
	`id` text PRIMARY KEY NOT NULL,
	`mode` text NOT NULL,
	`a` text NOT NULL,
	`b` text NOT NULL,
	`region` text NOT NULL,
	`seed` integer NOT NULL,
	`status` text NOT NULL,
	`created` integer NOT NULL,
	`deadline` integer NOT NULL,
	`room` text,
	`epoch` integer DEFAULT 0 NOT NULL,
	`replay_frame` integer DEFAULT 0 NOT NULL,
	`snapshot` text,
	`started` integer,
	`winner` integer,
	`reason` text,
	`settled` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE INDEX `matches_a` ON `service_matches` (`a`);--> statement-breakpoint
CREATE INDEX `matches_b` ON `service_matches` (`b`);--> statement-breakpoint
CREATE TABLE `player_presence` (
	`user_id` text PRIMARY KEY NOT NULL,
	`seen` integer NOT NULL,
	`state` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `matchmaking_queue` (
	`user_id` text PRIMARY KEY NOT NULL,
	`mode` text NOT NULL,
	`mmr` integer NOT NULL,
	`region` text NOT NULL,
	`latency` integer NOT NULL,
	`joined` integer NOT NULL,
	`expires` integer NOT NULL,
	`match_id` text
);
--> statement-breakpoint
CREATE INDEX `queue_match` ON `matchmaking_queue` (`match_id`);--> statement-breakpoint
CREATE TABLE `ranked_ratings` (
	`user_id` text PRIMARY KEY NOT NULL,
	`season` text DEFAULT 'founders' NOT NULL,
	`mmr` integer DEFAULT 1000 NOT NULL,
	`highest` integer DEFAULT 1000 NOT NULL,
	`ranked_wins` integer DEFAULT 0 NOT NULL,
	`ranked_losses` integer DEFAULT 0 NOT NULL,
	`casual_wins` integer DEFAULT 0 NOT NULL,
	`casual_losses` integer DEFAULT 0 NOT NULL,
	`friendly_wins` integer DEFAULT 0 NOT NULL,
	`friendly_losses` integer DEFAULT 0 NOT NULL,
	`draws` integer DEFAULT 0 NOT NULL,
	`streak` integer DEFAULT 0 NOT NULL,
	`best` integer DEFAULT 0 NOT NULL,
	`usage` text DEFAULT '{}' NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `accounts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `rating_season_mmr` ON `ranked_ratings` (`season`,`mmr`);--> statement-breakpoint
CREATE TABLE `friend_relations` (
	`pair` text PRIMARY KEY NOT NULL,
	`a` text NOT NULL,
	`b` text NOT NULL,
	`sender` text NOT NULL,
	`status` text NOT NULL,
	`created` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `friend_a` ON `friend_relations` (`a`);--> statement-breakpoint
CREATE INDEX `friend_b` ON `friend_relations` (`b`);--> statement-breakpoint
CREATE TABLE `match_players` (
	`key` text PRIMARY KEY NOT NULL,
	`match_id` text NOT NULL,
	`user_id` text NOT NULL,
	`seat` integer NOT NULL,
	`accepted` integer DEFAULT 0 NOT NULL,
	`hero` integer,
	`counter` text,
	`seen` integer NOT NULL,
	`input_through` integer DEFAULT 0 NOT NULL,
	`room_token` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `match_user` ON `match_players` (`match_id`,`user_id`);--> statement-breakpoint
CREATE TABLE `account_sessions` (
	`hash` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`expires` integer NOT NULL,
	`created` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `accounts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `currency_transactions` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`type` text NOT NULL,
	`amount` integer NOT NULL,
	`balance_before` integer NOT NULL,
	`balance_after` integer NOT NULL,
	`source` text NOT NULL,
	`timestamp` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `accounts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `currency_user_time` ON `currency_transactions` (`user_id`,`timestamp`);--> statement-breakpoint
CREATE TABLE `wallets` (
	`user_id` text PRIMARY KEY NOT NULL,
	`balance` integer DEFAULT 0 NOT NULL,
	`first_win_day` text DEFAULT '' NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `accounts`(`id`) ON UPDATE no action ON DELETE no action
);
