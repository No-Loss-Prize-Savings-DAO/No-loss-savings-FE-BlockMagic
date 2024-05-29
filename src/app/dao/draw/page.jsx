import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/dao/ui/table"
   
  const draws = [
    {
      drawId: "1",
      startDate: "2024-03-26 12:16",
      prizePool: "2500.00 BLZ",
      endDate: "2024-03-26 12:16",
    },
    {
      drawId: "2",
      startDate: "2024-03-26 12:16",
      prizePool: "350,000.00 BLZ",
      endDate: "2024-03-26 12:16",
    },
    {
        drawId: "3",
        startDate: "2024-03-26 12:16",
        prizePool: "350,000.00 BLZ",
      endDate: "2024-03-26 12:16",
    },
    {
        drawId: "4",
        startDate: "2024-03-26 12:16",
        prizePool: "450,000.00 BLZ",
      endDate: "2024-03-26 12:16",
    },
    {
        drawId: "5",
        startDate: "2024-03-26 12:16",
        prizePool: "550,000.00 BLZ",
      endDate: "2024-03-26 12:16",
    },
    {
        drawId: "6",
        startDate: "2024-03-26 12:16",
        prizePool: "200.000.00 BLZ",
      endDate: "2024-03-26 12:16",
    },
    {
        drawId: "7",
        startDate: "2024-03-26 12:16",
        prizePool: "300,000 BLZ",
      endDate: "2024-03-26 12:16",
    },
  ]

export default function DrawPage() {
    return (
        <div className="min-h-screen ">
        {/* Body */}
        <main className="p-4 sm:container sm:mx-auto mx-auto py-20 ">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Draws</h2>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Draw</TableHead>
          <TableHead>Start</TableHead>
          <TableHead>End</TableHead>
          <TableHead className="text-right">Prize Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {draws.map((drawId) => (
          <TableRow key={drawId.drawId}>
            <TableCell className="font-medium">{drawId.drawId}</TableCell>
            <TableCell>{drawId.startDate}</TableCell>
            <TableCell>{drawId.endDate}</TableCell>
            <TableCell className="text-right">{drawId.prizePool}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
          </div>

        

        </main>
        
      </div>
    )
    
}