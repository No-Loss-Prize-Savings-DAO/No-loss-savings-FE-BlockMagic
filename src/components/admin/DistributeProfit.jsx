import { Button } from "../../components/ui/button";
import usdt from "../../../public/images/token-swap/tether.svg";
import Image from "next/image";
import { getProvider } from "@/constants/providers";
import { getPrizeDistributionContract } from "@/constants/contracts";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import { useState } from "react";
import Loading from "../shared/Loading";
import { toast } from "react-toastify";

export default function DistributeProfit() {
  const { walletProvider } = useWeb3ModalProvider();
  const [profitAmount, setProfitAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const readWriteProvider = getProvider(walletProvider);
  const handleDistributeProfit = async () => {
    try {
      setLoading(true);
      const signer = readWriteProvider
        ? await readWriteProvider.getSigner()
        : null;
      const contract = getPrizeDistributionContract(signer);
      // const amount = Number(profitAmount * 1e18);
      //  contract.requestRandomWords();
      const randomWords = await contract.requestRandomWords();

      const randomWordsReceipt = await randomWords.wait()

      // if (randomWordsReceipt.status === 1) {
      //   const distributeProfit = await contract.distributeProfit(amount);
      //   const receipt = await distributeProfit.wait();
      //   setProfitAmount(0);
      //   console.log(receipt);
      // }

      // setProfitAmount(0);
      console.log(randomWordsReceipt);
    } catch (error) {
      console.error("Error handling prize distribution:", error.message);
      setLoading(false);
      toast.error(`Error handling prize distribution`);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-0 rounded-xl" id="handleDistributeProfit">
      <h3 className="font-bold text-xl">
        Distribute Profit to Users and DAO members
      </h3>

      <div className="flex flex-col gap-4 pt-4">
        <div className="border flex justify-between items-center bg-transparent w-full border-slate-700 rounded-2xl py-3 px-2 pl-3 outline-none transition-all duration-300 focus:border-blue-500">
          <input
            type="text"
            placeholder="Amount..."
            className="bg-transparent w-[80%] invisibile h-[full] outline-none"
            onChange={(e) => {
              setProfitAmount(e.target.value);
            }}
            value={profitAmount}
          />{" "}
        </div>
      </div>

      <Button
        variant={"outline"}
        className="py-3 px-6 mt-4 gap-2 rounded-2xl border bg-[#0267FF] text-white text-sm w-fit"
        translate="no"
        onClick={handleDistributeProfit}
      >
        Distribute Profit
      </Button>
      {loading && <Loading />}
    </div>
  );
}
