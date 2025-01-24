"use client";

import { useRouter } from "next/navigation";
import { format } from "path";
import { formatEther } from "viem";
import { formatUnits } from "viem";
const STAKING_TYPES = [
  { stakeMode: "Soft Stake", remainDay: 0 },
  { stakeMode: "LP Stake", remainDay: 10 },
  { stakeMode: "Fam.Choice", remainDay: 10 },
  { stakeMode: "FEE recharge", remainDay: 10 },
];

export default function StakingChoice(props: any) {
  const { id, percent } = props;
  const router = useRouter();

  const formatAPR = (val: any) => {
    return val / 100;
  };

  return (
    <div
         onClick={() => {
        if (id == 0) router.push("/staking/soft/");
        if (id == 1) router.push("/staking/");
        if (id == 2) router.push("/staking/");
        if (id == 3) router.push("/staking/hard/");
      }}
     className="flex bg-green-700/30 relative rounded-2xl sm:mt-12 mt-2 sm:mb-8 mb-2 hover:cursor-pointer">
      <div className="flex flex-col w-[40%] place-items-center justify-center px-2 py-2  bg-green-700/30 rounded-2xl">
        <h1 className="text-orange-200 sm:text-3xl text-2xl text-center sm:my-4 my-2 font-semibold">
          {STAKING_TYPES[id].stakeMode}
        </h1>
      </div>
      <div className="flex flex-col w-[60%] items-center my-2 px-[5px] py-2">
        <h1 className="text-orange-00 sm:text-3xl text-2xl sm:my-4 my-2">
          {id != 3 ? <>{formatUnits(percent, 2)}% reward</>  : <></> }
        </h1>
      </div>
    </div>
  );
}
