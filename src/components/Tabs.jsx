import React, { useState } from 'react';

import Fliers from './Fliers';
import Logo from './Logo';
import BookCover from './BookCover'
import FieldWork from './FieldWork';
import Awards from './Awards';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="min-h-screen flex flex-col items-center pb-20">
            <div className='w-full mb-8 flex items-center justify-between px-10 gap-4 overflow-auto scroll-1'>
                <button
                    className={`text-sm p-2 text-center md:min-w-[190px] min-w-[100px] ${activeTab === 1 ? 'bg-[#e63946] text-[#f1faee]' : 'bg-[#f1faee] text-black' }  border-0 cursor-pointer rounded capitalize font-semibold duration-300`}
                    onClick={() => handleTabClick(1)}
                >
                    Fliers
                </button>
                <button
                    className={`text-sm p-2 text-center md:min-w-[190px] min-w-[100px] ${activeTab === 2 ? 'bg-[#e63946] text-[#f1faee]' : 'bg-[#f1faee] text-black' }  border-0 cursor-pointer rounded capitalize font-semibold duration-300`}
                    onClick={() => handleTabClick(2)}
                >
                    Logo
                </button>
                <button
                    className={`text-sm p-2 text-center md:min-w-[190px] min-w-[100px] ${activeTab === 3 ? 'bg-[#e63946] text-[#f1faee]' : 'bg-[#f1faee] text-black' }  border-0 cursor-pointer rounded capitalize font-semibold duration-300`}
                    onClick={() => handleTabClick(3)}
                >
                    Book Covers
                </button>
                
                <button
                    className={`text-sm p-2 text-center md:min-w-[190px] min-w-[100px] ${activeTab === 4 ? 'bg-[#e63946] text-[#f1faee]' : 'bg-[#f1faee] text-black' }  border-0 cursor-pointer rounded capitalize font-semibold duration-300`}
                    onClick={() => handleTabClick(4)}
                >
                    Field Work
                </button><button
                    className={`text-sm p-2 text-center md:min-w-[190px] min-w-[100px] ${activeTab === 5 ? 'bg-[#e63946] text-[#f1faee]' : 'bg-[#f1faee] text-black' }  border-0 cursor-pointer rounded capitalize font-semibold duration-300`}
                    onClick={() => handleTabClick(5)}
                >
                    Awards
                </button>
            </div>
            <div className="tab-content pt-10 md:px-10 h-[80vh] overflow-auto scroll-1">
                {activeTab === 1 && <Fliers />}
                {activeTab === 2 && <Logo/>}
                {activeTab === 3 && <BookCover />}
                {activeTab === 4 && <FieldWork />}
                {activeTab === 5 && <Awards />}
            </div>
        </div>
    );
};

export default Tabs;
