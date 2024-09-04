import React from 'react';

const TabMenu = ({ activeTab, tabs, setActiveTab }) => {
    return (
        <div className='rounded-lg flex flex-col'>
            <div className="bg-white rounded-lg">
                <ul className="flex list-none p-1 mx-2" data-tabs="tabs" role="list">
                    {tabs.map((tab, index) => (
                        <li key={index} className="flex text-center">
                            <a
                                className={`flex items-center justify-center w-full py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-black ${
                                    activeTab === tab ? 'bg-black text-white' : 'bg-inherit'
                                }`}
                                data-tab-target=""
                                role="tab"
                                aria-selected={activeTab === tab ? "true" : "false"}
                                onClick={() => setActiveTab(tab)}
                            >
                                <span className="px-6">{tab}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TabMenu;
