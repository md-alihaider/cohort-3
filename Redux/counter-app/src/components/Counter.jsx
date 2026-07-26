import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement,incrementByamount,resetCount } from "../app/feature/counterSlice";


const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [amount, setAmount] = useState("")
  const handleAddAmount = () => {
    if(amount ==="") return
    dispatch(incrementByamount(Number(amount)))
    setAmount("")
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Redux Counter</h1>

        <div className="text-center mb-8">
          <p className="text-gray-500 text-lg">Current Count</p>

          <h2 className="text-6xl font-bold text-indigo-600 mt-2">{count}</h2>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => dispatch(decrement())}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
          >
            -
          </button>

          <button
            onClick={() => dispatch(increment())}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition"
          >
            +
          </button>
        </div>
        <button
          onClick={() => dispatch(resetCount())}
          className="w-full mb-6 bg-gray-800 hover:bg-black text-white py-3 rounded-lg font-semibold transition"
        >
          Reset
        </button>

        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            onClick={handleAddAmount}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 rounded-lg font-semibold transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
