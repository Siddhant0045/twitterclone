import React from "react";

function RightSideBar() {
    return (
        <aside
            className="w-[350px] ml-0 mt-5 pl-5 pr-5 box-border flex-shrink overflow-y-scroll overflow-x-hidden
        hidden lg:block scrollbar-thin scrollbar-thumb-[#444] scrollbar-track-[#121212]
      "
        >
            {/* Search Box */}
            <div className="mb-4 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[16px] text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg></span>
                <input
                    type="text"
                    placeholder="Search Twitter"
                    className="
            w-[310px] pl-9 pr-3 py-2 rounded-full bg-[#1a1a1a] text-white outline-none
            h-[35px]
          "
                />
            </div>

            {/* Trending Box */}
            <div className="bg-black p-4 rounded-xl border border-[#2f3336]">
                <h3 className="text-xl font-semibold mb-4">What's happening</h3>

                <ul className="space-y-4">
                    {[
                        { cat: "Trending in Computer Science", name: "#ReactJS", count: "120K Tweets" },
                        { cat: "Trending in Computer Science", name: "#OpenAI", count: "89K Tweets" },
                        { cat: "Trending in India", name: "#VITians", count: "34K Tweets" },
                        { cat: "Trending in India", name: "#TechNews", count: "57K Tweets" },
                        { cat: "Trending in India", name: "#SiddhantShindeIsTheBest", count: "10K Tweets" },
                    ].map((t, i) => (
                        <li key={i}>
                            <div className="flex flex-col gap-1 overflow-hidden text-ellipsis whitespace-nowrap">
                                <span className="text-gray-400 text-[13px]">{t.cat}</span>
                                <span className="font-bold text-white text-[15px]">{t.name}</span>
                                <span className="text-gray-500 text-[13px]">{t.count}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Who to Follow */}
            <div className="bg-black rounded-xl p-4 mt-5 border border-[#2f3336] shadow">
                <h3 className="text-lg font-bold mb-3">Who to follow</h3>

                <ul>
                    <li>
                        <div className="flex items-center justify-between py-3 border-b border-gray-700 last:border-none">
                            <img
                                src="/images/default.jpg"
                                alt="Siddhant Shinde"
                                className="w-12 h-12 rounded-full object-cover mr-3"
                            />

                            <div className="flex-1 overflow-hidden mr-3">
                                <span className="font-semibold text-[15px] block truncate">Siddhant Shinde</span>
                                <span className="text-gray-500 text-[13px] block truncate">@siddhant_codes</span>
                            </div>

                            <button
                                className="
                  bg-[#1da1f2] hover:bg-[#0d8ddb] text-white font-semibold 
                  px-4 py-2 rounded-full transition
                "
                            >
                                Follow
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default RightSideBar;
