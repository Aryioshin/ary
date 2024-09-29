import { readContract, writeContract } from '@wagmi/core';
import { Address } from 'viem';
import { Abis } from '@/utils';
import { CONTRACT_ADDRESS, TOKEN_LIST, WCRO, VVS2Router, fee, } from '../config/safeStakeConfig';
import { CONTRACT_ABI_ARY, VVS2_ABI, ABI } from '@/utils';
import { getBalance } from 'wagmi/actions';
import { toast } from 'react-toastify';
import { Config } from "wagmi"
import { waitForTransactionReceipt } from 'wagmi/actions';
import { parseEther } from 'viem'
import { config } from '@/config/config';

export const getAllowance = async (config: Config, tokenId: number, owner: Address, spender: Address = CONTRACT_ADDRESS) => {
    const token = TOKEN_LIST[tokenId];
    const tokenAddress = token.address;
    const allowance = await readContract(config, {
      abi : Abis[token.name],
      address: tokenAddress as Address,
      functionName: "balanceOf",
      args: [spender],
    });
    return allowance;
  }

  export const getTotalStaked = async () => {
    try {
      console.log(config, "AAAAAAAAAAAAAAAA");
      const totalStaked = await readContract(config, {
        abi : CONTRACT_ABI_ARY,
        address: CONTRACT_ADDRESS as Address,
        functionName: "totalStaked",
      });
      console.log(totalStaked, "SADAAAAAAAAAAAAAA")
      return totalStaked;
    } catch (error) {
      console.log("EEEEEEEEEEEEE", error);
    }
    
  }

  export const approve = async (config: Config, tokenId: number, amount: any, spenderAddress: Address = CONTRACT_ADDRESS) => {
    toast.warning('Please wait');
    console.log(amount + "---------------------");
    console.log(spenderAddress + "--------------------");
    const token = TOKEN_LIST[tokenId];
    const tokenAddress = token.address;
    const abi = Abis[token.name]
    const appr = await writeContract(config, {
      abi,
      functionName: "approve",
      address: tokenAddress as Address, args: [spenderAddress, amount]
    }).then(async (hash) => {
      console.log("Approve Tx:", hash);
      toast.warning('Please wait');
      await waitForTransactionReceipt(config, {
        hash,
      });
      toast.success("approve success");
      return true
    }).catch((reason) => {
      console.log("Approve faild:", reason);
      toast.error("approve failed");
      return false;
    });
    

    return appr

  }

  export const deposit = async (config: Config, amount: number, address: Address | undefined) => {
    const approveRes = await approve(config, 2, amount, address);
    if(!approveRes) return false;
    try {
      const res = await writeContract(config, {
        abi: CONTRACT_ABI_ARY,
        address: CONTRACT_ADDRESS as Address,
        functionName: 'deposit',
        args: [amount],
      }).then(async (hash) => {
        console.log("Approve Tx:", hash);
        toast.warning('Please wait');
        await waitForTransactionReceipt(config, {
          hash,
        });
        return true
      })
        .catch((reason) => {
          console.log("Approve faild:", reason);
          toast.error("deposit failed");
          return false
        });
      console.log(res)
      toast.success("deposit success");
      return res
    } catch (error) {
      console.log(error)
      toast.error("Transcation failed");
      return false;
    }
  }