"use client";

import { SyntheticEvent, useState } from "react";
import Form from "next/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SubmitButton from "@/components/SubmitButton";
import { createAction } from "@/app/actions";

export default function NewInvoicePage() {
  // Define the possible statuses as a TypeScript union type
  type InvoiceStatus = "open" | "paid" | "void" | "uncollectible";

  const [state, setState] = useState("ready");
  const [status, setStatus] = useState<InvoiceStatus>("open"); // Status has a specific type

  async function handleOnSubmit(event: SyntheticEvent) {
    if (state === "pending") {
      event.preventDefault();
      return;
    }
    setState("pending");
  }

  // Explicit mapping for background colors
  const statusBgColors: Record<InvoiceStatus, string> = {
    open: "bg-blue-500",
    paid: "bg-green-600",
    void: "bg-zinc-700",
    uncollectible: "bg-red-600",
  };

  return (
    <div className={`newinvoiceContainer ${statusBgColors[status]}`}>
      <main className="flex flex-col justify-center h-full max-w-5xl mx-auto my-12">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-left mb-5">Create Invoice</h1>
        </div>

        <Form action={createAction} onSubmit={handleOnSubmit} className="grid gap-4 w-6/12">
          <div>
            <Label htmlFor="billingName" className="block font-semibold text-sm mb-2">
              Billing Name
            </Label>
            <Input id="billingName" name="billingName" type="text" placeholder="Enter Customer's name" required />
          </div>

          <div>
            <Label htmlFor="billingAddress" className="block font-semibold text-sm mb-2">
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
            <Label htmlFor="billingEmail" className="block font-semibold text-sm mb-2">
              Billing Email
            </Label>
            <Input id="billingEmail" name="billingEmail" type="email" placeholder="Enter Customer's email" />
          </div>

          <div>
            <Label htmlFor="phoneNumber" className="block font-semibold text-sm mb-2">
              Phone Number
            </Label>
            <Input id="phoneNumber" name="phoneNumber" type="tel" placeholder="Enter Customer's phone number" required />
          </div>

          <div>
            <Label htmlFor="amount" className="block font-semibold text-sm mb-2">
              Amount
            </Label>
            <Input id="amount" name="amount" type="number" placeholder="Enter the amount" required />
          </div>

          <div>
            <Label htmlFor="description" className="block font-semibold text-sm mb-2">
              Description
            </Label>
            <Textarea id="description" name="description" placeholder="Enter a description" required></Textarea>
          </div>

          <div>
            <Label htmlFor="status" className="block font-semibold text-sm mb-2">
              Status
            </Label>
            <select
              id="status"
              name="status"
              className="block w-full border border-gray-300 rounded px-3 py-2"
              value={status}
              onChange={(e) => setStatus(e.target.value as InvoiceStatus)}>
              <option value="open">Open</option>
              <option value="paid">Paid</option>
              <option value="void">Void</option>
              <option value="uncollectible">Uncollectible</option>
            </select>
          </div>

          <div>
            <SubmitButton />
          </div>
        </Form>
      </main>
    </div>
  );
}
