export default function Deposit(){
    return (
        <div className="p-24 m-80 mt-40 mb-0 bg-gray-100 rounded-xl	" id="deposit">
            <form>
                <h3 className="font-bold text-2xl">Deposit</h3>

                <label className="block p-4 px-0 pb-1">Token:</label>
                <select className="inline-block w-full h-12 rounded-xl p-2 shadow-xl ">
                    <option value="1">BTC  </option>
                    <option value="2">ETH </option>
                    <option value="3">BNB </option>
                    <option value="4">MET</option>
                </select>

                <p className="p-4 px-0 font-extralight">Total balance: 00000000</p>
                
                <label className="block p-4 px-0 pb-1" >Address:</label>
                <input type="text"  className="inline-block w-full h-12 rounded-xl p-2 shadow-xl "/>

                <button className="block m-8 p-8 pt-4 pb-4 bg-gray-300 rounded-3xl shadow-xl hover:bg-gray-200 ">Deposit</button>
            </form>
        </div>
    )
}