import React from 'react'

const CampaignDetails = () => {
  return (
    <div className="bg-white border mx-3 rounded-lg p-4">
    <span className=" text-left text-black text-[24px] font-medium  mb-4">Booked</span>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Start Date</label>
        <input type="date" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"/>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">End Date</label>
        <input type="date" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"/>
      </div>
      <div className="flex items-center">
        <label className="block text-sm font-medium text-gray-700 mr-2">All Day</label>
        <input type="checkbox" className="form-checkbox"/>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Time Slot</label>
        <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
          <option>Slot 1 (04:00PM - 07:59PM)</option>
          <option>Slot 2 (08:00PM - 11:59PM)</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
          <option>Peterborough</option>
          <option>Toronto</option>
          <option>Vancouver</option>
        </select>
      </div>
      <div className="text-center">
        <span className="text-4xl font-bold">$50 CAD/Min</span>
      </div>
      <button className="w-full py-2 bg-orange-500 text-white rounded-md shadow-sm">Continue</button>
    </div>
  </div>
  )
}

export default CampaignDetails