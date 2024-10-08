"use client";
import { formatEther } from "viem";

export default function YourLockedValue(props: any) {
  const { value } = props;

  return (
    <div className="flex justify-center w-[100%]">
      <div className="flex flex-col justify-center px-2 py-8">
        <h1 className="text-orange-00 text-4xl text-center ">Value</h1>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-orange-00 text-3xl text-center items-center my-6 ml-[40px] animate-pulse drop-shadow-lg">
          {parseFloat(formatEther(value)).toFixed(0)}
        </h1>
      </div>
    </div>
  );
}
