import CampaignDetails from "./components/CampaignDetails";
import LeftSidebar from "./components/LeftSidebar";
import MainCalender from "./components/MainCalender";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className="min-h-screen px-11" style={{ backgroundColor: '#FFF6F0' }}>
      <Nav />
      <div className="py-5 text-left text-[48px] font-medium">
        <span style={{ color: '#9C9C9C' }}>Let’s </span>
        <span style={{ color: '#0D0500' }}>Create Your Campaign</span>
      </div>
      <main className="mt-8 flex flex-col lg:flex-row mx-auto gap-4 items-center justify-center">
  <LeftSidebar />
  <MainCalender />
  <CampaignDetails />
</main>

    </div>
  );
}
