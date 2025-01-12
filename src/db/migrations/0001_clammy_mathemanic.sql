ALTER TABLE "invoices" ADD COLUMN "billingName" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "invoices" ADD COLUMN "billingAddress" text NOT NULL;--> statement-breakpoint
ALTER TABLE "invoices" ADD COLUMN "billingEmail" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "invoices" ADD COLUMN "phoneNumber" varchar(11) NOT NULL;