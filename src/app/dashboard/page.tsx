import { CirclePlus } from 'lucide-react';
import { db } from '@/db';
import { Invoices } from '@/db/schema';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Badge } from "@/components/ui/badge";
  import { Button } from "@/components/ui/button";
  import Link from 'next/link';

  


export default async function DashboardPage() {
  const results = await db.select().from(Invoices);
  console.log('results', results)

  return (
    <div className="dashboardContainer">
     <main className=" flex flex-col justify-center text-center max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
      <h1 className="text-3xl font-bold text-left">
        Invoices
        </h1>
        <p>
        <Button className="inline-flex gap-2" variant="ghost" asChild>
          <Link href="/invoices/new">
        <CirclePlus className="h-4 w-4" />
          Create Invoice
          </Link>
        </Button>
        </p>
      </div>

  <TableCaption>A list of your recent invoices.</TableCaption>     
  <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px] p-4">
        Date
      </TableHead>
      <TableHead className="p-4">
        Customer Name
      </TableHead>
      <TableHead className="p-4">
        Address
      </TableHead>
      <TableHead className="p-4">
        Email
      </TableHead>
      <TableHead className="p-4">
        Phone Number
      </TableHead>
      <TableHead className="text-center p-4">
        Status
      </TableHead>
      <TableHead className="text-right p-4">
        Amount
      </TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {results.map(result => {
    return (
      <TableRow key={result.id}>
      <TableCell className="font-medium text-left p-0">
        <Link href={`/invoices/${result.id}`} className="font-semibold  block p-4">{new Date(result.createTs).toLocaleDateString()}</Link>
      </TableCell>
      <TableCell className="text-left p-0">
        <Link href={`/invoices/${result.id}`} className="font-semibold  block p-4">Kevin Cross Minchakpu</Link>
      </TableCell>
      <TableCell className="text-left p-0">
        <Link href={`/invoices/${result.id}`} className="font-semibold  block p-4">Akwanga, Nasarawa State</Link>
      </TableCell>
      <TableCell className="text-left p-0">
        <Link className=" block p-4" href={`/invoices/${result.id}`}>kevinomics112@outlook.com</Link>
      </TableCell>
      <TableCell className="text-left p-0">
        <Link href={`/invoices/${result.id}`} className="font-semibold  block p-4">+2349069444420</Link>
      </TableCell>
      <TableCell className="text-center p-0">
      <Link className=" block p-4" href={`/invoices/${result.id}`}>
      <Badge className="rounded-full">
        {result.status}
        </Badge>
        </Link>
      </TableCell>
      <TableCell className="text-right p-0">
        <Link href={`/invoices/${result.id}`} className="font-semibold  block p-4">
        &#8358;{ (result.amount / 100).toFixed(2)}
          </Link>
      </TableCell>
    </TableRow>
    )
  })}
  </TableBody>
</Table>

</main>
</div>
);
}
