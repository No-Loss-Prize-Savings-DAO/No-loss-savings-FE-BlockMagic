import { Button } from "../../components/ui/button";
import usdt from "../../../public/images/token-swap/tether.svg";
import Image from "next/image";
import { getProvider } from "@/constants/providers";
import { getUSDTContract } from "@/constants/contracts";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import { useState } from "react";
import Loading from "../shared/Loading";

export default function TransferUSDT() {
  const { walletProvider } = useWeb3ModalProvider();
  const [memberAddress, setMemberAddress] = useState("");
  const [transferAmount, setTransferAmount] = useState();
  const [loading, setLoading] = useState(false);

  const readWriteProvider = getProvider(walletProvider);
  const handleTransferUSDT = async () => {
    try {
      setLoading(true);
      const signer = readWriteProvider
        ? await readWriteProvider.getSigner()
        : null;
      const contract = getUSDTContract(signer);

      const amount = Number(transferAmount * 1e6);
      const transferUSDT = await contract.transfer(memberAddress, amount);
      const receipt = await transferUSDT.wait();

      console.log(receipt);
      setMemberAddress("");
      setTransferAmount();
    } catch (error) {
      console.error("Error handling add member:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-0 rounded-xl" id="handleTransferUSDT">
      <h3 className="font-bold text-xl">Transfer USDT From Owner Wallet</h3>

      <div className="flex flex-col gap-4 pt-4">
        <div className="border flex justify-between items-center bg-transparent w-full border-slate-700 rounded-2xl py-3 px-2 pl-3 outline-none transition-all duration-300 focus:border-blue-500">
          <input
            type="text"
            placeholder="Address To..."
            className="bg-transparent w-[80%] invisibile h-[full] outline-none"
            onChange={(e) => {
              setMemberAddress(e.target.value);
            }}
            value={memberAddress}
          />{" "}
        </div>
        <div className="border flex justify-between items-center bg-transparent w-full border-slate-700 rounded-2xl py-3 px-2 pl-3 outline-none transition-all duration-300 focus:border-blue-500">
          <input
            type="text"
            placeholder="Amount..."
            className="bg-transparent w-[80%] invisibile h-[full] outline-none"
            onChange={(e) => {
              setTransferAmount(e.target.value);
            }}
            value={transferAmount}
          />{" "}
        </div>
      </div>

      <Button
        variant={"outline"}
        className="py-3 px-6 mt-4 gap-2 rounded-2xl border bg-[#0267FF] text-white text-sm w-fit"
        translate="no"
        onClick={handleTransferUSDT}
      >
        Transfer
      </Button>
      {loading && <Loading />}
    </div>
  );
}