"use client";

import { useCallback, useEffect, useState } from "react";
import VolumeTable from "@/components/competition/VolumeTable";
import PrizeTable from "@/components/competition/PrizeTable";
import StakingView from "@/components/staking/StakingView";
import YourLockedValue from "@/components/staking/YourLockedValue";
import { getVolumes, volumeSort } from "@/utils/actions";
import { IVolume } from "@/utils/actions";
import { useRouter } from "next/navigation";
import { useAccount, useConfig } from "wagmi";
import { swapTokens, getQuote } from "@/utils/actions";
import { toast } from "react-toastify";
import { readContract, writeContract } from "@wagmi/core";
import { CONTRACT_ADDRESS } from "@/config/safeStakeConfig";
import { getAllowance } from "@/utils/safeStakeActions";
import { deposit } from "@/utils/safeStakeActions";
import { Address } from "viem";
import { CloudCog } from "lucide-react";
import { config } from '@/config/config';

export default function Page() {
  const router = useRouter();
  const [userVolume, setUserVolume] = useState<Array<IVolume>>([]);
  const [yourValue, setYourValue] = useState(0);
  const numberOfStaking = 2;
  // const config = useConfig();
  const { address } = useAccount();
  const [amount, setAmount] = useState(0);
  const config1 = useConfig();

  useEffect(() => {
    const load = async () => {
      const res: any = await getAllowance(
        config,
        2,
        address as Address,
        CONTRACT_ADDRESS
      );
      setYourValue(res);
      console.log("aaaaaaaaaaaa" + res)
    };
    if (address && config) load();
  }, [config, address]);

  // const newDeposit = (useCallback(async () => {
  //   if (baseToken == quoteToken) return;
  //   setIsSwapping(true);
  //   const res: boolean = await swapTokens(config, baseToken, quoteToken, baseAmount, address)
  //   if (res) {
  //     swapChange();
  //     toast.success("Transaction successfully finished");
  //   }
  //   setIsSwapping(false);
  // }, [baseAmount, address]))

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value * Math.pow(10, 18);
    setAmount(value);
    console.log("chchchch:" + value);
  };

  const depositNew = () => {
    console.log("let's deposit");
    const res = deposit(config1, amount, CONTRACT_ADDRESS);
    console.log(amount, "mamamamam")
    router.refresh();
    if (!res) return;

  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh] text-green-200 pt-[100px]">
      <div className="relative w-[calc(100%-10px)] md:w-[700px] bg-green-950/80 px-5 pt-10 pb-4 mx-4 shadow-3xl shadow-green-600/70 rounded-3xl backdrop-blur-sm">
        <div className="flex justify-between items-baseline mb-4 px-8">
          <div
            className="text-2xl text-gray-400 hover:text-blue-400 hover:cursor-pointer hover:scale-125 hover:bottom-4 bottom-0 transition-all duration-100"
            onClick={() => {
              router.push("/swap");
            }}
          >
            SWAP
          </div>
          <div
            className="text-2xl text-gray-400 hover:text-blue-400 hover:cursor-pointer hover:scale-125 hover:bottom-4 bottom-0 transition-all duration-100"
            onClick={() => {
              router.push("/competition");
            }}
          >
            BATTLE
          </div>
          <div
            className="text-3xl hover:cursor-pointer font-bold"
            onClick={() => {
              router.push("/staking");
            }}
          >
            STAKING
          </div>
        </div>

        <div className="flex flex-row">
          <YourLockedValue value={yourValue} />
          <div className="flex flex-col w-[40%] h-[85%] border-l-8 border-green-1">
            <input
              className="bg-transparent text-right focus:outline-2 outline-2 outline-green-1 font-bold mt-5 mx-10 text-3xl text-center px-3 h-12 z-20 text-white"
              placeholder="Input amount..."
              // disabled={disabled}
              onChange={handleAmountChange}
            />
            <div
              onClick={depositNew}
              className="relative text-3xl mr-10 hover:cursor-pointer font-medium text-orange-200 text-center z-10 pt-[50px]"
            >
              Deposit
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <button
            onClick={() => {
              console.log("soft-all claimed!!!");
            }}
            type="button"
            className="flex justify-center items-center w-full py-3 bg-green-1 rounded-xl hover:shadow-button hover:shadow-blue-400 tracking-widest"
          >
            <div className="relative text-2xl font-medium text-orange-00 text-center z-10">
              All Claim ( 55 )
            </div>
          </button>

          <div className="flex items-center mt-12">
            {/* <input
                className="bg-transparent w-full text-right focus:outline-0 font-bold pr-2 text-5xl px-3 h-12 z-20 text-white"
                // value={amount ? amount : ""}
                placeholder="0"
                // disabled={disabled}
                // onChange={handleAmountChange}
              /> */}
          </div>
        </div>
        <div className="flex flex-row gap-7">
          <button
            onClick={() => {
              console.log("soft-all claimed!!!");
            }}
            type="button"
            className="flex justify-center items-center w-[40%] py-3 bg-green-1 rounded-xl hover:shadow-button hover:shadow-blue-400 tracking-widest"
          >
            <div className="relative text-2xl font-medium text-orange-00 text-center z-10">
              Withdraw
            </div>
          </button>
          <button
            onClick={() => {
              console.log("soft-all claimed!!!");
            }}
            type="button"
            className="flex justify-center items-center w-[60%] py-3 bg-green-1 rounded-xl hover:shadow-button hover:shadow-blue-400 tracking-widest"
          >
            <div className="relative text-2xl font-medium text-orange-00 text-center z-10">
              Emergency Withdraw
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  // return <>hello</>;
}
