"use client";

import { decrement, increment } from "@/redux/slices/counterSlice";
import { IRootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state: IRootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="text-xl text-pink-200">Counter: {count}</h1>

      <div className="flex gap-5">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(increment())}
        >
          Plus
        </button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(decrement())}
        >
          Minus
        </button>
      </div>
    </>
  );
}
