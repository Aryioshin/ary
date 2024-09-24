"use client";

const STAKING_TYPES = [
  { month: 1, percent: 0.2 },
  { month: 3, percent: 0.5 },
  { month: 9, percent: 2 },
  { month: 12, percent: 3 },
  { month: 48, percent: 15 },
];

export default function StakigView(props: any) {
  const { id } = props;

  return (
    <div className="flex bg-green-700/30 relative rounded-2xl mt-4">
      <div className="flex flex-col w-[40%]  px-1 py-2 pl-[40px] bg-green-700/30 rounded-2xl">
        <h1 className="text-orange-200 text-3xl my-4 font-semibold">
          {STAKING_TYPES[id].month} MONTHS
        </h1>
        <h1 className="text-orange-200 text-2xl my-3">
          {STAKING_TYPES[id].percent}% APR
        </h1>
        <h1 className="text-orange-500 text-3xl my-4 pt-[15px]">- Stake Now -</h1>
      </div>
      <div className="flex flex-col px-[80px] py-5">
        <h1 className="text-orange-00 text-3xl my-4 pt-[10px]">You have staked</h1>
        <h1 className="text-orange-00 text-3xl my-4 pt-[5px]">No $CORGIAI staked</h1>
      </div>
    </div>
  );
}
