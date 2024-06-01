import { ethers } from "ethers";
import savingsAbi from "./savingsAbi.json";
import usdtAbi from "./usdtAbi.json";
import daoAbi from "./daoAbi.json";
import prizeDistribution from "./prizeDistributionAbi.json";
import regulatoryComplianceAbi from "./RegulatoryComplianceAbi.json";
import blzAbi from "./blzAbi.json";
import nftAbi from "./nftAbi.json";


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

    export const getRegulatoryComplianceContract = (providerOrSigner) =>
    new ethers.Contract(
      process.env.NEXT_PUBLIC_REGULATORY_COMPLIANCE_CONTRACT,
      regulatoryComplianceAbi,
      providerOrSigner,
    );

    export const getBLZContract = (providerOrSigner) =>
      new ethers.Contract(
        process.env.NEXT_PUBLIC_BLZ_CONTRACT,
        blzAbi,
        providerOrSigner
      );

    export const getNFTContract = (providerOrSigner) =>
      new ethers.Contract(
        process.env.NEXT_PUBLIC_NFT_CONTRACT,
        nftAbi,
        providerOrSigner
      );