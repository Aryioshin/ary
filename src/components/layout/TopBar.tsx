"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IVolume, getVolumes, volumeSort } from "@/utils/actions";
import { useAccount } from "wagmi";
import { config } from "@/config/config";
import {
  getUserInfo,
  getUserInfoHard,
  convertBignitToString,
  getUserReward,
  getUserVolumeHard,
} from "@/utils/safeStakeActions";
import { Address } from "viem";
import { formatEther } from "viem";

function TopBar() {
  const openBridge = () => {
    window.open("https://ary-frontend.vercel.app/", "_blank");
  };

  const { address } = useAccount();
  const [rank, setRank] = useState<number>(0);
  const [value, setValue] = useState<string>("");
  const [fee, setFee] = useState<string>("");
  const [claim, setClaim] = useState<string>("");

  useEffect(() => {
    const load = async () => {
      const res: any | never = await getVolumes();
      if (res) {
        const res_vol: any = volumeSort(res);
        for (let i = 0; i < res_vol.length; i++) {
          if (res_vol[i].user.toLowerCase() == address?.toLowerCase())
            setRank(i + 1);
        }
      }

      const res1: any = await getUserInfo(config, address as Address);
      let [user_amount, user_reward] = res1.toString().split(",");
      const res2: any = await getUserInfoHard(config, address as Address);
      const totalValue = user_amount + res2[0];
      const valueInt = parseFloat(formatEther(totalValue)).toFixed(0);
      const test = convertBignitToString(valueInt);
      setValue(test);

      const rewardRes: any = await getUserReward(config, address as Address);

      let maxDepo: any = await getUserVolumeHard(config, address as Address);
      let r: any = parseFloat(maxDepo);
      const r1: any = parseFloat(formatEther(res[0]));
      if (r1 > 0) r -= r1;
      const hardClaim: any = (Number(res2[1]) - Number(r)) * 300 / 100000 / 2;

      const totalClaim = convertBignitToString((Number(rewardRes) + Number(hardClaim)) / 10 ** 18);
      const hardClaimString = convertBignitToString(Number(hardClaim) / 10 ** 18)
      setClaim(totalClaim)

      setFee(hardClaimString)
    };
    setTimeout(() => {
      if(address) load();
    }, 1000);
    // setUserVolume(volumeSort(list));
  }, [address, rank, value, claim, fee]);

  return (
    <div className="flex min-[520px]:flex-row flex-col gap-6 w-full  justify-between items-center px-8 py-2 z-50">
      {/* <div className="flex justify-center rounded-full w-32 h-32 bg-green-700/50 backdrop-blur-sm border-8 border-green-500"> */}
      <div className="relative h-[150px] aspect-[680/517] ">
        <Image className="scale-125" src="/logo.png" fill alt="" />
      </div>
      {/* </div> */}
      <div className="bg-green-700/50 w-[300px] h-[100px] rounded-lg text-green-200 text-2xl justify-center items-center p-2 py-4 grid grid-cols-2 grid-rows-2 gap-4">
        <h1 className="text-center">Rank : {rank}</h1>
        <h1 className="text-center">Value : {value}</h1>
        <h1 className="text-center">Fee : {fee}</h1>
        <h1 className="text-center">Claim : {claim}</h1>
      </div>
      <div className="flex gap-8">
        <button
          onClick={openBridge}
          className="bg-blue-600 h-[40px] w-[80px] rounded-xl text-white font-semibold py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Bridge
        </button>
        <div className="h-8">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
