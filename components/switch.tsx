import React from 'react';

const Switch: React.FC = () => {
  return (
    <div className='flex items-center justify-center gap-6 h-[200px]'>
        <button className="bg-transparent hover:bg-[#fb923c] text-white font-semibold hover:text-white py-2 px-4 border border-[#fb923c] hover:border-transparent rounded">Button</button>
        <button className="bg-transparent hover:bg-[#dc2626] text-white font-semibold hover:text-white py-2 px-4 border border-[#dc2626] hover:border-transparent rounded">Button</button>
        <button className="bg-transparent hover:bg-[#3b82f6] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Button</button>
        <button className="bg-transparent hover:bg-[#22c55e] text-white font-semibold hover:text-white py-2 px-4 border border-[#22c55e] hover:border-transparent rounded">Button</button>
    </div>
  );
}

export default Switch;
