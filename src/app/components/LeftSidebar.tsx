import React from 'react'

const LeftSidebar = () => {
  return (
    <div className="flex flex-col gap-4">
    <div className="bg-white border rounded-lg p-4" style={{ width: '420px', height: '180px' }}>
      <h2 className="text-2xl font-bold">Top Section</h2>
      {/* Top section content goes here */}
    </div>
    <div className="bg-white border rounded-lg p-4" style={{ width: '420px', height: '180px' }}>
      <h2 className="text-2xl font-bold">Middle Section</h2>
      {/* Middle section content goes here */}
    </div>
    <div className="bg-white border rounded-lg p-4" style={{ width: '420px', height: '500px' }}>
      <h2 className="text-2xl font-bold">Bottom Section</h2>
      {/* Bottom section content goes here */}
    </div>
  </div>
  )
}

export default LeftSidebar