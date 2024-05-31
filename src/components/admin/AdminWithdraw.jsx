import { Button } from "../../components/ui/button";
import usdt from "../../../public/images/token-swap/tether.svg";
import Image from "next/image";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import { useState } from "react";
import { getProvider } from "@/constants/providers";
import { getSavingsContract, getUSDTContract } from "@/constants/contracts";
import { useGetContractBalance } from "@/hooks/useGetContractBalance";
import Loading from "../shared/Loading";
import { toast } from "react-toastify";

export default function AdminWithdraw() {
  const { walletProvider } = useWeb3ModalProvider();
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [proposalId, setProposalId] = useState();
  const contractBalance = useGetContractBalance();
  const [loading, setLoading] = useState(false);

  const readWriteProvider = getProvider(walletProvider);
  const withdraw = async () => {
    const signer = readWriteProvider
      ? await readWriteProvider.getSigner()
      : null;
    const contract = getSavingsContract(signer);

    try {
      setLoading(true);

      const amount = Number(withdrawAmount * 1e6);
      const withdraw = await contract.withdrawAmount(proposalId, amount);
      const receipt = await withdraw.wait();

      console.log(receipt);
      setWithdrawAmount(0);
      setProposalId(0);
    } catch (error) {
      console.error("Error  handling withdrawal:", error);
      setLoading(false);
      toast.error(`Error handling withdrawal`);
      throw error;
    } finally {
      setLoading(false);
    }
  };
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
          className="bg-transparent h-[full] outline-none"
          onChange={(e) => {
            setWithdrawAmount(e.target.value);
          }}
          // value={withdrawAmount}
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

      <p className="p-0 font-extralight">
        Contract USDT Balance: $
        {Number(contractBalance?.stableCoinBalance) / 1e6 || 0}
      </p>

      <Button
        variant={"outline"}
        className="py-3 px-6 rounded-2xl border bg-[#0267FF] text-white text-sm w-fit"
        onClick={withdraw}
        translate="no"
      >
        Withdraw
      </Button>
      {loading && <Loading />}
    </div>
  );
}
