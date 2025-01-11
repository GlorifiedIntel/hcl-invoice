"use client";

import { sql } from 'drizzle-orm';
import { db } from '@/db';


import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import styles from './new-invoice.module.css';


export default async function NewInvoicePage() {
  const results = await db.execute(sql`SELECT current_database()`)
  return (
    <div className={styles.newinvoiceContainer}>
    <main className="flex flex-col justify-center h-full max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-left mb-5">Create Invoice</h1>
      </div>

    {JSON.stringify(results)}
     
      <form className="grid gap-4 max-w-xs" action="">
        <div>
          <Label
            htmlFor="billingName"
            className="block font-semibold text-sm mb-2"
          >
            Billing Name
          </Label>
          <Input
            id="billingName"
            name="billingName"
            type="text"
            placeholder="Enter Customer's name"
            required
          />
        </div>

        <div>
          <Label
            htmlFor="billingAddress"
            className="block font-semibold text-sm mb-2"
          >
            Billing Address
          </Label>
          <Textarea
            id="billingAddress"
            name="billingAddress"
            placeholder="Enter Customer's address"
            required
          ></Textarea>
        </div>

        <div>
          <Label
            htmlFor="billingEmail"
            className="block font-semibold text-sm mb-2"
          >
            Billing Email
          </Label>
          <Input
            id="billingEmail"
            name="billingEmail"
            type="email"
            placeholder="Enter Customer's email"
          />
        </div>

        <div>
          <Label
            htmlFor="phoneNumber"
            className="block font-semibold text-sm mb-2"
          >
            Phone Number
          </Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            placeholder="Enter Customer's phone number"
            required
          />
        </div>

        <div>
          <Label
            htmlFor="amount"
            className="block font-semibold text-sm mb-2"
          >
            Amount
          </Label>
          <Input
            id="amount"
            name="amount"
            type="number"
            placeholder="Enter the amount"
            step="0.01"
            required
          />
        </div>

        <div>
          <Label
            htmlFor="description"
            className="block font-semibold text-sm mb-2"
          >
            Description
          </Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Enter a description"
            required
          ></Textarea>
        </div>

        <Button className="font-semibold" type="submit">
          Submit
        </Button>
      </form>
    </main>
    </div>
  );
}
