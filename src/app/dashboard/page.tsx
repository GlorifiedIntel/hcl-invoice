import { CirclePlus } from 'lucide-react';
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
  import styles from './page.module.css';
import Link from 'next/link';

  


export default function DashboardPage() {
  return (
    <div className={styles.dashboardContainer}>
     <main className=" flex flex-col justify-center h-full text-center max-w-5xl mx-auto my-12">
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
      
        
  <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
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
    <TableRow>
      <TableCell className="font-medium text-left p-4">
        <span className="font-semibold">10/02/2025</span>
      </TableCell>
      <TableCell className="text-left p-4">
        <span className="font-semibold">Kevin Cross Minchakpu</span>
      </TableCell>
      <TableCell className="text-left p-4">
        <span className="font-semibold">Akwanga, Nasarawa State</span>
      </TableCell>
      <TableCell className="text-left p-4">
        <span>kevinomics112@outlook.com</span>
      </TableCell>
      <TableCell className="text-left p-4">
        <span className="font-semibold">+2349069444420</span>
      </TableCell>
      <TableCell className="text-center p-4">
      <Badge className="rounded-full">Open</Badge>
      </TableCell>
      <TableCell className="text-right p-4">
        <span className="font-semibold">&#8358;250.00</span>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>

      </main>
  </div>
  );
}
