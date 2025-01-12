import { CirclePlus } from 'lucide-react';
import { db } from '@/db';
import { Invoices } from '@/db/schema';
import styles from './invoiceid.module.css';


  
export default async function Home() {
   return (
    <div className={styles.invoiceidContainer}>
     <main className=" flex flex-col justify-center text-center max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
      <h1 className="text-3xl font-bold text-left">
        Invoices #
        </h1>
        <p>
        
        </p>
      </div>
</main>
</div>
);
}
