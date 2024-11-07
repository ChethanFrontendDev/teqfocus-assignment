import React from 'react';

const SearchInput = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[257px] bg-[#F5F7F9] px-[8px] py-[10px] border-none rounded-[4px] outline-none overflow-hidden">
                <input 
                    type="text" 
                    className="w-full h-full pl-[28px] pr-[10px] bg-transparent text-[#2A2A2A]" // Added padding-left for space between icon and text
                    placeholder="Ask for your Engineering Insight"
                />
                <img 
                    className="w-[16px] absolute left-[8px] top-1/2 transform -translate-y-1/2" 
                    src="/images/Header_Images/search-normal.svg" alt="Search Icon"
                />
            </div>
        </div>
    );
};

export default SearchInput;
