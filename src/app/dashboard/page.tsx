import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  


export default function Home() {
  return (
     <main className=" flex flex-col justify-center h-full text-center max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold">
        Dashoard
        </h1>
        <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Date</TableHead>
      <TableHead>Customer Name</TableHead>
      <TableHead>Address</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Phone Number</TableHead>
      <TableHead className="text-center">Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium text-left">
        <span>10/02/2025</span>
      </TableCell>
      <TableCell className="text-left">
        <span>Kevin Cross Minchakpu</span>
      </TableCell>
      <TableCell className="text-left">
        <span>Akwanga, Nasarawa State</span>
      </TableCell>
      <TableCell className="text-left">
        <span>kevinomics112@outlook.com</span>
      </TableCell>
      <TableCell className="text-left">
        <span>+2349069444420</span>
      </TableCell>
      <TableCell className="text-center">
        <span>Open</span>
      </TableCell>
      <TableCell className="text-right">
        <span>&#8358;250.00</span>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>

      </main>
  );
}
