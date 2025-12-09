import React from "react";

function LeftSidebar() {
    return (
        <aside className="w-[250px] pr-5 box-border flex flex-col mt-5 text-white">

            {/* Logo */}
            <div className="text-[30px] font-bold mb-6 pl-5">
                Twixter
            </div>

            {/* Navigation */}
            <nav>
                <ul className="list-none p-0 m-0">
                    <li className="mb-3">
                        <button className="flex items-center gap-3 py-2.5 px-4 bg-black text-white rounded-[25px] text-[16px] h-[50px] w-full hover:bg-[#181818]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                className="bi bi-house-door-fill" viewBox="0 0 16 16">
                                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 
                                    5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 
                                    1.146a.5.5 0 0 0-.708 0l-6 
                                    6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 
                                    .5.5h4a.5.5 0 0 0 .5-.5"/>
                            </svg>
                            <span className="mr-1 text-[20px]">Home</span>
                        </button>
                    </li>

                    <li className="mb-3">
                        <button className="flex items-center gap-3 py-2.5 px-4 bg-black text-white rounded-[25px] text-[16px] h-[50px] w-full hover:bg-[#181818]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 
                                            4-1 1-1 1zm5-6a3 3 0 1 0 
                                            0-6 3 3 0 0 0 0 6"/>
                            </svg>
                            <span className="mr-1 text-[20px]">Profile</span>
                        </button>
                    </li>

                    <li className="mb-3">
                        <button className="flex items-center gap-3 py-2.5 px-4 bg-black text-white rounded-[25px] text-[16px] h-[50px] w-full hover:bg-[#181818]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 
                                    1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 
                                    1 1 0-3 1.5 1.5 0 0 1 0 3m5 
                                    0a1.5 1.5 0 1 1 0-3 1.5 1.5 
                                    0 0 1 0 3"/>
                            </svg>
                            <span className="mr-1 text-[20px]">Log Out</span>
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Profile Section */}
            <div className="mt-auto pt-4 mb-5">
                <button className="flex items-center gap-3 p-2 text-left text-white hover:bg-[#181818] rounded-full w-[200px]">
                    <img
                        src="/images/default.jpg"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-col">
                        <span className="font-bold text-[0.95rem]">User Name</span>
                        <span className="text-[0.8rem] text-gray-500">@username</span>
                    </div>
                </button>
            </div>
        </aside>
    );
};

export default LeftSidebar;
