import React, { useState } from 'react';

import Fliers from './Fliers';
import Logo from './Logo';
import BookCover from './BookCover'
import Product from './Product';
import OtherDesigns from './OtherDesigns';
import FieldWork from './FieldWork';
import Awards from './Awards';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="min-h-screen flex flex-col items-center pb-20">
            <div className='w-full mb-8 flex items-center justify-between gap-4 overflow-auto'>
                <button
                    className={`text-sm p-1 md:p-2 text-center md:min-w-[190px] min-w-[100px] ${activeTab === 1 ? 'bg-cyan text-white' : 'bg-white text-cyan' }  border-0 cursor-pointer rounded capitalize font-semibold duration-300`}
                    onClick={() => handleTabClick(1)}
                >
                    Fliers
                </button>
                <button
                    className={`text-sm p-1 md:p-2 text-center md:min-w-[190px] min-w-[100px] ${activeTab === 2 ? 'bg-cyan text-white' : 'bg-white text-cyan' }  border-0 cursor-pointer rounded capitalize font-semibold duration-300`}
                    onClick={() => handleTabClick(2)}
                >
                    Logo
                </button>
                <button
                    className={`text-sm p-1 md:p-2 text-center md:min-w-[190px] min-w-[100px] ${activeTab === 3 ? 'bg-cyan text-white' : 'bg-white text-cyan' }  border-0 cursor-pointer rounded capitalize font-semibold duration-300`}
                    onClick={() => handleTabClick(3)}
                >
                    Book Covers
                </button>
                <button
                    className={`text-sm p-1 md:p-2 text-center md:min-w-[190px] min-w-[100px] ${activeTab === 4 ? 'bg-cyan text-white' : 'bg-white text-cyan' }  border-0 cursor-pointer rounded capitalize font-semibold duration-300`}
                    onClick={() => handleTabClick(4)}
                >
                    Products
                </button>
                <button
                    className={`text-sm p-1 md:p-2 text-center md:min-w-[190px] min-w-[100px] ${activeTab === 5 ? 'bg-cyan text-white' : 'bg-white text-cyan' }  border-0 cursor-pointer rounded capitalize font-semibold duration-300`}
                    onClick={() => handleTabClick(5)}
                >
                    Other Designs
                </button><button
                    className={`text-sm p-1 md:p-2 text-center md:min-w-[190px] min-w-[100px] ${activeTab === 6 ? 'bg-cyan text-white' : 'bg-white text-cyan' }  border-0 cursor-pointer rounded capitalize font-semibold duration-300`}
                    onClick={() => handleTabClick(6)}
                >
                    Field Work
                </button><button
                    className={`text-sm p-1 md:p-2 text-center md:min-w-[190px] min-w-[100px] ${activeTab === 7 ? 'bg-cyan text-white' : 'bg-white text-cyan' }  border-0 cursor-pointer rounded capitalize font-semibold duration-300`}
                    onClick={() => handleTabClick(7)}
                >
                    Awards
                </button>
            </div>
            <div className="tab-content pt-10 md:px-20">
                {activeTab === 1 && <Fliers />}
                {activeTab === 2 && <Logo/>}
                {activeTab === 3 && <BookCover />}
                {activeTab === 4 && <Product />}
                {activeTab === 5 && <OtherDesigns />}
                {activeTab === 6 && <FieldWork />}
                {activeTab === 7 && <Awards />}
            </div>
        </div>
    );
};

export default Tabs;
