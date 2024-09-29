"use client";

import { useRouter } from "next/navigation";

const STAKING_TYPES = [
  { stakeMode: "Soft Stake", percent: 0.7, remainDay: 0 },
  { stakeMode: "Hard Stake", percent: 0.5, remainDay: 10 },
];

export default function StakigView(props: any) {
  const { id } = props;
  const router = useRouter();

  return (
    <div className="flex bg-green-700/30 relative rounded-2xl mt-12 mb-8">
      <div className="flex flex-col w-[40%]  px-2 py-5  bg-green-700/30 rounded-2xl">
        <h1 className="text-orange-200 text-5xl text-center my-4 font-semibold">
          {STAKING_TYPES[id].stakeMode}
        </h1>
        <div
          onClick={() => {
            if (id == 0) router.push("/staking/soft/");
            else router.push("/staking/hard/");
          }}
          className="hover:cursor-pointer"
        >
          <h1 className="text-orange-500 text-3xl hover:text-4xl text-center my-4 pt-[20px]">
            Stake Now
          </h1>
        </div>
      </div>
      <div className="flex flex-col w-[60%] items-center my-6 px-[5px] py-5">
        {STAKING_TYPES[id].remainDay === 0 ? (
          <h1 className="text-orange-00 text-3xl my-4">No locks</h1>
        ) : (
          <h1 className="text-orange-00 text-3xl my-4">
            {STAKING_TYPES[id].remainDay} day(s) to unlock
          </h1>
        )}
        <h1 className="text-orange-00 text-3xl my-4">
          {STAKING_TYPES[id].percent} reward
        </h1>
      </div>
    </div>
  );
}
