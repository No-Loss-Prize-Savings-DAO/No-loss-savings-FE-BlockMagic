import { ethers } from "ethers";
import savingsAbi from "./savingsAbi.json";
import usdtAbi from "./usdtAbi.json";
import daoAbi from "./daoAbi.json";
import prizeDistribution from "./prizeDistributionAbi.json";


export const getSavingsContract = (providerOrSigner) =>
  new ethers.Contract(
    process.env.NEXT_PUBLIC_SAVINGS_CONTRACT,
    savingsAbi,
    providerOrSigner,
  );

export const getUSDTContract = (providerOrSigner) =>
  new ethers.Contract(
    process.env.NEXT_PUBLIC_MOCK_USDT_CONTRACT,
    usdtAbi,
    providerOrSigner,
  );

  export const getDAOContract = (providerOrSigner) =>
  new ethers.Contract(
    process.env.NEXT_PUBLIC_DAO_CONTRACT,
    daoAbi,
    providerOrSigner,
  );

  export const getPrizeDistributionContract = (providerOrSigner) =>
    new ethers.Contract(
      process.env.NEXT_PUBLIC_PRIZE_DISTRIBUTION_CONTRACT,
      prizeDistribution,
      providerOrSigner,
    );