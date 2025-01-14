import { notFound } from 'next/navigation'
import { eq } from "drizzle-orm";
import { db } from '@/db';
import { Invoices } from '@/db/schema';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"


export default async function InvoicePage({ params }: { params: { invoiceId: string } }) {
  const resolvedParams = await params;
  const invoiceId = parseInt(resolvedParams.invoiceId, 10);

  const [result] = await db.select()
    .from(Invoices)
    .where(eq(Invoices.id, invoiceId))
    .limit(1)

    if (!result) {
      notFound();
    }
    return (
    <div className="invoicepageContainer">
     <main className="h-full max-w-5xl mx-auto my-12">
      <div className="flex justify-between mb-8">
      <h1 className=" flex items-center gap-3 text-3xl font-bold text-left">
      Invoice: {invoiceId}
      <Badge className={cn(
        "rounded-full capitalize",
        result.status === 'open' && 'bg-blue-500',
        result.status === 'paid' && 'bg-green-600',
        result.status === 'void' && 'bg-zinc-700',
        result.status === 'uncollectible' && 'bg-red-600'
        )}>{result.status}
      </Badge>
        </h1>
        <p>
        
        </p>
      </div>
      <p className="text-3xl mb-3">
      &#8358;{(result.amount / 100).toFixed(2)}
      </p>
      <p className="text-lg mb-8">
        { result.description }
      </p>
      <h2 className="font-bold text-lg mb-4">Billing Details</h2>
  
  <ul className="grid gap-2">
  <li className="flex gap-4">
    <strong className="block w-28 flex-shrink-0 font-medium text-sm">Invoice ID:</strong>
    <span>
    { invoiceId }
    </span>
  </li>

  <li className="flex gap-4">
    <strong className="block w-28 flex-shrink-0 font-medium text-sm">Invoice Date:</strong>
    <span>
    {new Date(result.createTs).toLocaleDateString()}
    </span>
  </li>

  <li className="flex gap-4">
    <strong className="block w-28 flex-shrink-0 font-medium text-sm">Billing Name:</strong>
    <span>{result.billingName}</span>
  </li>
  <li className="flex gap-4">
  <strong className="block w-28 flex-shrink-0 font-medium text-sm">Phone Number:</strong>
<span>{result.phoneNumber}</span>
</li>

<li className="flex gap-4">
  <strong className="block w-28 flex-shrink-0 font-medium text-sm">Billing Email:</strong>
<span>{result.billingEmail}</span>
</li>
<li className="flex gap-4">
  <strong className="block w-28 flex-shrink-0 font-medium text-sm">Billing Address:</strong>
<span>{result.billingAddress}</span>
</li>
</ul>

      
</main>
</div>
);
}
