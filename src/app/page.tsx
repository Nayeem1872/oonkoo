import CampaignDetails from "./components/CampaignDetails";
import MainCalender from "./components/MainCalender";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className="min-h-screen px-3" style={{ backgroundColor: '#FFF6F0' }}>
      <Nav />
      <div className="py-5 text-left text-[48px] font-medium">
        <span style={{ color: '#9C9C9C' }}>Let’s </span>
        <span style={{ color: '#0D0500' }}>Create Your Campaign</span>
      </div>
      <main className="mt-8 grid grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="bg-white border rounded-lg p-4">
          <h2 className="text-2xl font-bold">Left Sidebar</h2>
          {/* Left Sidebar content goes here */}
        </div>
        <MainCalender/>
        <CampaignDetails />
      </main>
    </div>
  );
}
