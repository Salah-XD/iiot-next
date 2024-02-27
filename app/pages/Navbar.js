import React from 'react';

export const Navbar = () => {
  return (
    <nav className='bg-slate-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <a href="/" className='text-white'></a>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <div className='ml-4 flex items-center space-x-2'>
                        <a href="/" className='text-green-600 font-thin'>Connected</a>
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
export default Navbar