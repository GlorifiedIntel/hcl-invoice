"use server";

import { redirect } from 'next/navigation';
import { Invoices } from '@/db/schema';
import { db } from '@/db';

export async function createAction(formData: FormData) {
  // Parse the amount, removing non-numeric characters if necessary
  const amountString = String(formData.get('amount'));
  const amount = parseFloat(amountString.replace(/[^\d.-]/g, '')); 

  const description = formData.get('description') as string;
  const billingName = formData.get('billingName') as string;
  const billingAddress = formData.get('billingAddress') as string;
  const billingEmail = formData.get('billingEmail') as string;
  const phoneNumber = formData.get('phoneNumber') as string;

  const results = await db.insert(Invoices)
    .values({
      billingName,
      billingAddress,
      billingEmail,
      phoneNumber,
      amount,
      description,
      status: 'open'
      
    })
    .returning({
      id: Invoices.id, 
    });

  
  redirect(`/invoices/${results[0].id}`);
}
