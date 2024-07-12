import React from 'react'

const MainCalender = () => {
  return (
    <div className="bg-white border rounded-lg p-4 lg:col-span-1.5">
          <div className="flex justify-between items-center mb-4">
            <button className="text-xl font-bold">&lt;</button>
            <div className="text-xl font-bold">July 2024</div>
            <button className="text-xl font-bold">&gt;</button>
          </div>
          <div className="flex justify-between mb-4">
            <button className="py-1 px-3 bg-gray-200 rounded">Month</button>
            <button className="py-1 px-3 bg-gray-200 rounded">Week</button>
            <button className="py-1 px-3 bg-gray-200 rounded">Day</button>
            <button className="py-1 px-3 bg-gray-200 rounded">List</button>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="font-bold">{day}</div>
            ))}
            {[...Array(31)].map((_, i) => (
              <div key={i} className={`p-2 border rounded ${i % 3 === 0 ? 'bg-red-100 text-red-500' : ''}`}>
                <div className="text-sm">{i + 1}</div>
                {i % 3 === 0 ? (
                  <div className="text-xs">All Day</div>
                ) : (
                  <div className="text-xs">$200/min</div>
                )}
              </div>
            ))}
          </div>
        </div>
  )
}

export default MainCalender