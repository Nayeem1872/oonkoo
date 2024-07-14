import React from "react";

const CampaignDetails = () => {
  return (
    <div className="bg-white border rounded-lg p-8 lg:w-auto" style={{ width: '100%', maxWidth: '420px', height: 'auto', minHeight: '900px' }}>
      <div className="flex justify-between items-center">
        <span className="text-left text-black text-[24px] font-medium mb-4">
          Booked
        </span>
        <img
          src="/images/Ellipse 22.png"
          alt="Description"
          className="w-5 h-5"
        />
      </div>
      <div className="border-2 mt-3 border-[#FF7621] rounded-lg p-4 flex justify-between items-center">
  <div>
    <div className="flex items-center mb-2">
      <span className="inline-block w-2.5 h-2.5 bg-green-400 rounded-full mr-2"></span>
      <span className="text-black font-medium">7th June, 2024</span>
      <span className="text-gray-400 ml-2">(04:00 PM)</span>
    </div>
    <div className="flex items-center">
      <span className="inline-block w-2.5 h-2.5 bg-red-400 rounded-full mr-2"></span>
      <span className="text-black font-medium">9th June, 2024</span>
      <span className="text-gray-400 ml-2">(07:59 PM)</span>
    </div>
  </div>
  <div className="bg-[#FF7621] text-white rounded-lg px-3 py-3 text-center">
    <span className="font-bold text-lg">15</span>
    <span className="block text-sm">MIN</span>
  </div>
</div>
<div className="max-w-lg mx-auto mt-5">
  <div className="relative bg-blue-400 p-6 rounded-t-lg">
    <div className="flex justify-between items-center">
      <span className="text-white text-2xl font-bold">$50/min</span>
      <div className="bg-lime-300 text-black rounded-full px-2 py-1 text-sm font-bold">$$$</div>
    </div>
  </div>
  <div className="relative bg-black p-5 rounded-b-lg">
    <div className="flex justify-between items-center">
      <div>
        <span className="text-gray-400 block">Bought At</span>
        <span className="text-white text-2xl font-bold">$35/min</span>
      </div>
      <div className="relative">
        <img src="/images/Ellipse 25.png" alt="Profile" className="w-[37px] h-[37px] rounded-full " />
        <div className="absolute inset-0 w-10 h-10 rounded-full border-4 border-lime-300 animate-ping"></div>
      </div>
    </div>
  </div>
  <div className="flex mt-4 my-4">
    <span className="text-gray-400 text-sm">Set Your Bet</span>
  </div>
  <div className="flex justify-between items-center mb-4">
    <button className="text-2xl px-3  text-black rounded-full border border-black">-</button>
    <div className="text-6xl font-bold mx-4 text-black">$50</div>
    <button className="text-2xl px-3 text-black rounded-full border border-black">+</button>
  </div>
  <div className="text-center text-gray-500">CAD/Min</div>
</div>



<div className="max-w-lg mx-auto mt-3">
  <div className="text-gray-400 mb-2">Summary</div>
  <div className="bg-white p-4 rounded-lg border">
    <div className="mb-2">
      <div className="text-black">7th June - 9th June</div>
      <div className="text-orange-600 font-bold">$36,000 CAD</div>
    </div>
    <div className="bg-black text-white p-2 rounded-3xl flex items-center justify-center mt-5 mb-2">
      <span className="flex items-center">
        <span role="img" aria-label="fire">🔥</span>
        <span className="ml-1">Slot 2 (04:00PM - 07:59PM)</span>
      </span>
    </div>
    <div className="flex justify-between items-center">
      <div className="text-black font-bold">Peterborough</div>
      <div className="text-orange-600 font-bold">720min</div>
    </div>
  </div>
  <button className="w-full bg-orange-500 text-white py-2 rounded-lg mt-4">Place Bid</button>
  <div className="text-gray-500 text-center mt-2 text-xs">
    A notification will be sent to the <span className="font-bold">buyer</span> about your bid. You will get the slot only if the <span className="font-bold">buyer</span> agrees.
  </div>
</div>


    </div>
  );
};

export default CampaignDetails;
