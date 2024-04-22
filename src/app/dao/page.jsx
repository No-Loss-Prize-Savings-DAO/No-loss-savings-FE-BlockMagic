import { Button } from "@/components/dao/ui/button"
import { SearchBar } from "@/components/dao/search-bar"

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

        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow sm:rounded-lg">
            <div className="p-6">
              {/* Padded Container */}
              <div className="container mx-auto px-4">
                {/* Your content here */}
                <p>This is your Dao Page content. You can add your content here.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
