CREATE TABLE `participants` (
	`id` integer PRIMARY KEY NOT NULL,
	`presentation_id` integer,
	`name` text,
	`role` text
);
--> statement-breakpoint
CREATE TABLE `presentations` (
	`id` integer PRIMARY KEY NOT NULL,
	`creator` text,
	`number_of_slides` integer,
	`created_at` text,
	`topic` text
);
--> statement-breakpoint
CREATE TABLE `slides` (
	`id` integer PRIMARY KEY NOT NULL,
	`presentation_id` integer,
	`position` integer,
	`canvas_elements` text,
	`preview_image` blob
);
