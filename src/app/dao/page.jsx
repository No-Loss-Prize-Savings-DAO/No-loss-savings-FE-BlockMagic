import { Button } from "@/components/dao/ui/button"
import { SearchBar } from "@/components/dao/search-bar"
import { ProposalCard } from "@/components/dao/proposal-card"

export default function DaoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center h-70">
          <h1 className="text-xl font-bold text-gray-900">Dao Governance</h1>
          <div class="flex gap-4">
          <Button variant="outline" className="rounded-full">Connect wallet</Button>
          <Button variant="outline" className="text-black py-5 px-4 rounded-full">...</Button>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-5xl mx-auto py-6 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-4">Proposals</h2>
        </div>

        <div className="flex gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between">
          <SearchBar/>
          <Button variant="outline" className="rounded-full">Create new proposal</Button>
        </div>

{/* Proposal list */}
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            
          
            <div className="grid gap-4">
                <ProposalCard
                iconUrl="https://cdn.stamp.fyi/avatar/eth:0x28dF6625EF078Dc816423AE27830733Ee0aDd3da?s=40"
              name="victor.eth"
              status="Open"
              title="Increase the minimum deposit amount"
              description="Summary: This No Loss Savings Raffle Project should increase the minimum deposit amount so as to accomodate only whales with big money, small users don't matter."
              onClick=''
              />
              
              <ProposalCard
                iconUrl="https://cdn.stamp.fyi/avatar/eth:0x28dF6625EF078Dc816423AE27830733Ee0aDd3da?s=40"
              name="victor.eth"
              status="Open"
              title="Incentive Program for Referrals"
              description="Introducing a referral incentive program to incentivize existing participants to refer new users to our platform. Participants who successfully refer new users will receive rewards, fostering community growth and engagement in our no-loss saving prize raffle project."
              onClick=''
              />

<ProposalCard
                iconUrl="https://cdn.stamp.fyi/avatar/eth:0x28dF6625EF078Dc816423AE27830733Ee0aDd3da?s=40"
              name="victor.eth"
              status="Open"
              title="Enhanced User Experience"
              description="This proposal aims to enhance the user experience of our platform by implementing user-friendly interfaces, streamlined registration processes, and intuitive navigation. Improving user experience will encourage more participants to join our no-loss saving prize raffle project."
              onClick=''
              />

<ProposalCard
                iconUrl="https://cdn.stamp.fyi/avatar/eth:0x28dF6625EF078Dc816423AE27830733Ee0aDd3da?s=40"
              name="victor.eth"
              status="Open"
              title="Integration with External Platforms"
              description="Exploring opportunities to integrate our platform with external financial services and platforms to provide additional benefits and functionality to participants. Integration with popular financial apps and services will enhance the utility of our no-loss saving prize raffle project."
              onClick=''
              />

<ProposalCard
                iconUrl="https://cdn.stamp.fyi/avatar/eth:0x28dF6625EF078Dc816423AE27830733Ee0aDd3da?s=40"
              name="victor.eth"
              status="Open"
              title="Expansion to New Markets"
              description="Proposing the expansion of our project to new geographical markets to reach a wider audience and increase participation. Targeting new markets will diversify our participant base and drive growth in our no-loss saving prize raffle project."
              onClick=''
              />

<ProposalCard
                iconUrl="https://cdn.stamp.fyi/avatar/eth:0x28dF6625EF078Dc816423AE27830733Ee0aDd3da?s=40"
              name="victor.eth"
              status="Closed"
              title="Governance Framework Enhancement"
              description="Background: Enhancing the governance framework of our DAO to improve decision-making processes, transparency, and accountability. A robust governance framework will ensure the effective management and evolution of our no-loss saving prize raffle project."
              onClick=''
              />

<ProposalCard
                iconUrl="https://cdn.stamp.fyi/avatar/eth:0x28dF6625EF078Dc816423AE27830733Ee0aDd3da?s=40"
              name="victor.eth"
              status="Closed"
              title="Smart Contract Audit and Security"
              description="Establishing a research and development fund to support the exploration of innovative features, technologies, and methodologies for our platform. Investing in research and development will drive continuous improvement and innovation in our no-loss saving prize raffle project."
              onClick=''
              />

            </div>
               
        </div>
      </main>
    </div>
  );
}
