import { Button } from "../../../components/ui/button";

export default function Deposit() {
  return (
    <div className="p-24 m-80 mt-20 mb-0 rounded-xl	" id="deposit">
      <form>
        <h3 className="font-bold text-2xl">Deposit</h3>

        <label className="block p-4 px-0 pb-1">Token:</label>
        <select className="inline-block w-full h-12 rounded-xl p-2 shadow-xl ">
          <option value="1">BTC </option>
          <option value="2">ETH </option>
          <option value="3">BNB </option>
          <option value="4">MET</option>
        </select>

        <p className="p-4 px-0 font-extralight">Total balance: 00000000</p>

        <label className="block p-4 px-0 pb-1">Address:</label>
        <input
          type="text"
          className="inline-block w-full h-12 rounded-xl p-2 shadow-xl "
        />
        <Button
          variant={"outline"}
          className="py-6 px-7 mt-4 gap-2 rounded-full border bg-[#0267FF] text-white text-sm w-fit"
          translate="no"
        >
          Deposit
        </Button>
        {/* <button className="block m-8 p-8 pt-4 pb-4rounded-3xl shadow-xl ">
          Deposit
        </button> */}
      </form>
    </div>
  );
}
