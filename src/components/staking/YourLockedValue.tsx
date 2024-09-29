"use client";
import { formatEther } from 'viem';

export default function YourLockedValue(props: any) {
  const { value } = props;

  return (
    <div className="flex flex-col justify-center w-[100%]  px-2 py-8">
      <h1 className="text-orange-00 text-3xl text-center ">
        Your Locked Value
      </h1>
      <h1 className="text-orange-500 text-7xl text-center my-4 animate-pulse drop-shadow-lg">
        {formatEther(value)}
      </h1>
    </div>
  );
}
