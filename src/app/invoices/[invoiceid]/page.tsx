import { CirclePlus } from 'lucide-react';
import { db } from '@/db';
import { Invoices } from '@/db/schema';



  
export default async function InvoicePage({params}: { params: { invoiceId: string } }) {
  const invoiceId = parseInt(params.invoiceId);
   return (
    <div className="invoiceidContainer">
     <main className=" flex flex-col justify-center text-center max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
      <h1 className="text-3xl font-bold text-left">
        Invoice {invoiceId}
        </h1>
        <p>
        
        </p>
      </div>
</main>
</div>
);
}
