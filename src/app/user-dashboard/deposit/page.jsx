export default function Deposit(){
    return (
        <div className="p-24 m-80 mt-40 mb-0 bg-gray-100" id="deposit">
            <form>
                <h3 className="font-bold text-xl">Deposit</h3>

                <label className="block p-4 px-0 pb-1">Token:</label>
                <select className="inline-block w-full h-12">
                    <option value="1">BTC  </option>
                    <option value="2">ETH </option>
                    <option value="3">BNB </option>
                    <option value="4">MET</option>
                </select>
                <p>Total balance: 1234455</p>
                <label className="block p-4 px-0 pb-1" >Address:</label>
                <input type="text"  className="inline-block w-full h-12"/>

                <button className="block m-8 p-8 pt-4 pb-4 bg-gray-200">Deposit</button>
            </form>
        </div>
    )
}