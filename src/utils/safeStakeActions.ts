
import { readContract, writeContract } from '@wagmi/core';
import { config } from '../config/wagmi';
import { Address } from 'viem';
import { Abis } from '@/utils';
import { CONTRACT_ADDRESS, TOKEN_LIST, WCRO, VVS2Router, fee, } from '../config/safeStakeConfig';
import { CONTRACT_ABI_ARY, VVS2_ABI } from '@/utils';
import { getBalance } from 'wagmi/actions';
import { toast } from 'react-toastify';
import { Config } from "wagmi"

export const getAllowance = async (config: Config, tokenId: number, owner: Address, spender: Address = CONTRACT_ADDRESS) => {
    const token = TOKEN_LIST[tokenId];
    const tokenAddress = token.address;
    const abi = Abis[token.name]
    const allowance = await readContract(config, {
      abi,
      address: tokenAddress as Address,
      functionName: "allowance",
      args: [owner, spender],
    });
    return allowance;
  }