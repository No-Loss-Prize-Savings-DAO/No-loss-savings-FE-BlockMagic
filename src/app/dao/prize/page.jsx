"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter
  } from "@/components/dao/ui/table"

  import { useRouter } from "next/navigation"

  const prizes = [
    {
      prizeCategory: "Gold Medal Prize",
      prizeValuePerTicket: "100 BLZ x 1",
    },
    {
      prizeCategory: "Silver Medal Prize",
      prizeValuePerTicket: "50 BLZ x 15",
    },
    {
      prizeCategory: "Bronze Medal Prize",
      prizeValuePerTicket: "10 BLZ x 250",
    }
  ]


export default function PrizePage() {

  const router = useRouter();

    return (
        <div className="min-h-screen ">
        {/* Body */}
        <main className="p-4 sm:container sm:mx-auto mx-auto py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Prizes</h2>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">

          <div className="mb-10 mx-auto justify-center text-center font-bold text-lg"> {/* Center the text */}
            <h1 className="font-bold text-2xl">Win by Saving!</h1>
            <button
        className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-2xl mt-4 focus:outline-none focus:shadow-outline"
        onClick={()=>{
          router.push("/user-dashboard")
        }}
      >
        Deposit to Win
      </button>
          </div>

          <Table>
          <TableHeader>
        <TableRow>
          <TableHead className="font-bold text-2xl">Prize Pool</TableHead>
          <TableHead className="text-right font-bold text-2xl">1,000,000 BLZ</TableHead>

          
        </TableRow>

        <TableRow>
        <TableHead className="font-bold text-xl">Prize Category</TableHead>
          <TableHead className="text-right font-bold text-xl">Prize Value per Ticket</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {prizes.map((prizeCategory) => (
          <TableRow key={prizeCategory.prizeCategory}>
            <TableCell className="font-bold text-lg">{prizeCategory.prizeCategory}</TableCell>
            <TableCell className="font-bold text-right text-lg">{prizeCategory.prizeValuePerTicket}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

 </div>

        </main>
      </div>
     
    )
    
}