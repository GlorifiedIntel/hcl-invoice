import { pgTable, pgEnum, serial, timestamp, integer, text, varchar } from 'drizzle-orm/pg-core';

export const statusEnum = pgEnum('status', ['open', 'paid', 'void', 'uncollectible']);

export const Invoices = pgTable('invoices', {
  id: serial('id').primaryKey().notNull(),
  createTs: timestamp('createTs').defaultNow().notNull(),
  amount: integer('amount').notNull(),
  description: text('description').notNull(),
  status: statusEnum('status').notNull(),
  billingName: varchar('billingName', { length: 255 }).notNull(), 
  billingAddress: text('billingAddress').notNull(), 
  billingEmail: varchar('billingEmail', { length: 255 }).notNull(), 
  phoneNumber: varchar('phoneNumber', { length: 11 }).notNull() 
});
