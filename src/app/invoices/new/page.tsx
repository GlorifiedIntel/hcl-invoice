"use client"

import { SyntheticEvent, useState } from "react";
import Form from 'next/form'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SubmitButton from "@/components/SubmitButton"

import { createAction } from '@/app/actions';


export default function NewInvoicePage() {
  const [state, setState] = useState('ready');

  async function handleOnSubmit(event: SyntheticEvent) {
    if (state === 'pending') {
      event.preventDefault();
      return;
    }
  setState('pending');
  }
  
return (
    <div className="newinvoiceContainer">
    <main className="flex flex-col justify-center h-full max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-left mb-5">Create Invoice</h1>
      </div>

      <Form action={createAction} onSubmit={handleOnSubmit} className="grid gap-4 w-6/12">
        <div>
          <Label htmlFor="billingName" className="block font-semibold text-sm mb-2">
            Billing Name
          </Label>
          <Input id="billingName" name="billingName" type="text" placeholder="Enter Customer's name" required/>
        </div>

        <div>
          <Label htmlFor="billingAddress" className="block font-semibold text-sm mb-2">
            Billing Address
          </Label>
          <Textarea id="billingAddress" name="billingAddress" placeholder="Enter Customer's address"  required></Textarea>
        </div>

        <div>
          <Label htmlFor="billingEmail" className="block font-semibold text-sm mb-2" >
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
          <Label htmlFor="description" className="block font-semibold text-sm mb-2" >
            Description
          </Label>
          <Textarea id="description" name="description" placeholder="Enter a description" required></Textarea>
        </div>
        <div>
        <SubmitButton />
        </div>
      </Form>
    </main>
    </div>
  );
}
