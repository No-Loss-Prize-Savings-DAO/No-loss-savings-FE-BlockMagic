import SelectBox from "@/components/user-dashboard/TokenSelect";
import { Button } from "../../../components/ui/button";
import bitcoin from "../../../../public/images/token-swap/bitcoin.svg";
import dodgecoin from "../../../../public/images/token-swap/dogecoin.svg";
import usdt from "../../../../public/images/token-swap/tether.svg";
import Image from "next/image";

export default function Withdraw() {
  const people = [
    { name: "Bitcoin", icon: bitcoin },
    { name: "Dogecoin", icon: dodgecoin },
    { name: "USDT", icon: usdt },
  ];
  return (
    <div className="mb-0 rounded-xl" id="deposit">
      {/* <h3 className="font-bold text-2xl">Deposit</h3>/ */}

      <label className="block p-4 px-0 pb-1 font-semibold">Blitz:</label>
      <div className="border flex justify-between items-center bg-transparent w-full border-slate-700 rounded-2xl py-1 px-2 pl-3 outline-none transition-all duration-300 focus:border-blue-500">
        <input
          type="number"
          placeholder="Amount..."
          value={0}
          readOnly
          className="bg-transparent h-[full] outline-none"
        />{" "}
        <div className="relative w-10 p-2 cursor-pointer text-left shadow-md focus:outline-none border border-grey-500 rounded-2xl sm:text-sm">
          <Image
            src={usdt}
            alt="usdt"
            className="w-6 h-6"
            width={24}
            height={24}
          />
        </div>
      </div>

      <label className="block p-4 px-0 pb-1 font-semibold mt-4">
        Deposit Token:
      </label>
      <div className="border flex justify-between items-center bg-transparent w-full border-slate-700 rounded-2xl py-1 px-2 pl-3 outline-none transition-all duration-300 focus:border-blue-500">
        <input
          type="number"
          placeholder="Amount..."
          className="bg-transparent w-[80%] invisibile h-[full] outline-none"
        />{" "}
        <SelectBox data={people} initialSelected={people[0]} />
      </div>

      <p className="p-4 px-0 font-extralight">Total balance: 00000000</p>

      <Button
        variant={"outline"}
        className="py-3 px-6 mt-4 gap-2 rounded-2xl border bg-[#0267FF] text-white text-sm w-fit"
        translate="no"
      >
        Withdraw
      </Button>
      {/* <button className="block m-8 p-8 pt-4 pb-4rounded-3xl shadow-xl ">
          Deposit
        </button> */}
    </div>
  );
}
