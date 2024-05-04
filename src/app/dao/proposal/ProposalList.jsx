import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { ProposalCard } from "@/components/dao/proposal-card";

import { getDAOContract } from "@/constants/contracts";
import { getProvider } from "@/constants/providers";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";

import Loading from "@/components/shared/Loading";



export default function ProposalList() {
  const router = useRouter();
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(false);

  const { walletProvider } = useWeb3ModalProvider();

  const readWriteProvider = getProvider(walletProvider);

  useEffect(() => {
    // Function to fetch all proposals
    const fetchProposals = async () => {
      setLoading(true);
      try {
        
      const signer = readWriteProvider
      ? await readWriteProvider.getSigner()
      : null;

    const daoContract = getDAOContract(signer);

        const proposalCount = await daoContract.proposalCount(); // Get the total number of proposals
        
        // Iterate over each proposal ID and fetch its details
        const fetchedProposals = [];
        for (let id = 1; id <= proposalCount; id++) {
          const proposal = await daoContract.proposals(id); // Fetch proposal details
          fetchedProposals.push(proposal);
        }
        
        setProposals(fetchedProposals);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching proposals:', error);
        setLoading(false);
        toast.error('Error fetching proposals');
      }
    };

    fetchProposals(); // Fetch proposals when component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  // Function to handle card click and navigate to proposal details page
  const handleProposalClick = (id) => {
    // Navigate to proposal details page with the proposal id
    router.push(`/dao/proposal/${id}`);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {proposals.map((proposal, index) => (
            <ProposalCard
              key={index}
              id={index + 1}
              name={proposal.proposer}
              description={proposal.description}
              status={proposal.active}
              endDate={proposal.endTime}
              onClick={() => handleProposalClick(index + 1)} // Pass proposal ID to handle click function
            />
          ))}
        </div>
      )}
    </div>
  );
}

export { ProposalList };