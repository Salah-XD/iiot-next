import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className='bg-[#0D162B]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <a href="/" className='text-white font-semibold text-3xl'>Luzon</a>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <div className='ml-4 flex items-center space-x-2'>
                        <a href="/" className='text-green-600 font-regular'>Connected</a>
                        <div className="flex items-center justify-center h-screen ">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  );    
}

export default Navbar;
