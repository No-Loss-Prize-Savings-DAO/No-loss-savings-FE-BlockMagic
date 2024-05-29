import { Button } from "../../components/ui/button";
import usdt from "../../../public/images/token-swap/tether.svg";
import Image from "next/image";
import { getProvider } from "@/constants/providers";
import { getSavingsContract, getUSDTContract } from "@/constants/contracts";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import { useState } from "react";
import Loading from "../shared/Loading";

export default function AdminDeposit() {
  const { walletProvider } = useWeb3ModalProvider();
  const [depositAmount, setDepositAmount] = useState(0);
  const [proposalId, setProposalId] = useState();
  const [loading, setLoading] = useState(false);


  const readWriteProvider = getProvider(walletProvider);
  const deposit = async () => {
    try {
      setLoading(true);
      const signer = readWriteProvider
        ? await readWriteProvider.getSigner()
        : null;
      const usdtcontract = getUSDTContract(signer);
      const contract = getSavingsContract(signer);

      const amount = Number(depositAmount * 1e6);
      const approve = await usdtcontract.approve(
        process.env.NEXT_PUBLIC_SAVINGS_CONTRACT,
        amount,
      );
      const approval = await approve.wait();

      console.log(approval);
      if (approval.status === 1) {
        const transferFrom =
          await contract.refundWithdrawnAmount(proposalId, amount);
        const receipt = await transferFrom.wait();

        console.log(receipt);
        setProposalId(0);
        setDepositAmount(0);
        setLoading(false);
      } else {
        console.log("Approval Failed");
      }
    } catch (error) {
      console.error("Error  handling deposit:", error);
      setLoading(false);
      toast.error(`Error handling deposit: ${error}`);
      throw error;
    } finally {
      setLoading(false);
    }
  };


  const people = [
    { name: "USDT", icon: usdt },
  ];
  return (
    <div className="flex flex-col mt-6 gap-6 mb-0 rounded-xl" id="deposit">
      {/* <h3 className="font-bold text-2xl">Deposit</h3>/ */}

      <div className="border flex justify-between items-center bg-transparent h-16 w-full border-slate-700 rounded-2xl py-1 px-2 pl-3 outline-none transition-all duration-300 focus:border-blue-500">
        <input
          type="number"
          placeholder="Proposal ID..."
          className="bg-transparent w-[80%] invisibile h-[full] outline-none"
          onChange={(e) => {
            setProposalId(e.target.value);
          }}
          // value={proposalId}
        />
      </div>
      <div className="border flex justify-between items-center bg-transparent h-16 w-full border-slate-700 rounded-2xl py-1 px-2 pl-3 outline-none transition-all duration-300 focus:border-blue-500">
        <input
          type="number"
          placeholder="Amount..."
          className="bg-transparent w-[80%] invisibile h-[full] outline-none"
          onChange={(e) => {
            setDepositAmount(e.target.value);
          }}
          // value={depositAmount}
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

      {/* <p className="p-4 px-0 font-extralight">Total balance: 00000000</p> */}

      <Button
        variant={"outline"}
        className="py-3 px-6 mt-4 gap-2 rounded-2xl border bg-[#0267FF] text-white text-sm w-fit"
        translate="no"
        onClick={deposit}
      >
        Deposit
      </Button>
      {loading && <Loading />}
    </div>
  );
}
