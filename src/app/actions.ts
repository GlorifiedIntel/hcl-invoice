"use server";

import { redirect } from 'next/navigation';
import { db } from '@/db';
import { Invoices } from '@/db/schema';


export async function createAction(formData: FormData) {
  // Parse the amount, removing non-numeric characters if necessary
  const amount = parseFloat(String(formData.get('amount'))) * 100;
  const description = formData.get('description') as string;
  const billingName = formData.get('billingName') as string;
  const billingAddress = formData.get('billingAddress') as string;
  const billingEmail = formData.get('billingEmail') as string;
  const phoneNumber = formData.get('phoneNumber') as string;
  const status = formData.get("status") as "open" | "paid" | "void" | "uncollectible";


  const results = await db.insert(Invoices)
    .values({
      billingName,
      billingAddress,
      billingEmail,
      phoneNumber,
      amount,
      description,
      status,
      
    })
    .returning({
      id: Invoices.id, 
    });

  
  redirect(`/invoices/${results[0].id}`);
}
