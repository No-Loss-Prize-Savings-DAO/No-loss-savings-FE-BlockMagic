export default function Deposit(){
    return (
        <div className="deposit">
            <form>
                <h3>Deposit</h3>

                <label>Token:</label>
                <select>
                    <option value="1">BTC  </option>
                    <option value="2">ETH </option>
                    <option value="3">BNB </option>
                    <option value="4">MET</option>
                </select>
                <p>Total balance: 1234455</p>
                <label >Address:</label>
                <input type="text" />


                <button>Deposit</button>
            </form>
        </div>
    )
}