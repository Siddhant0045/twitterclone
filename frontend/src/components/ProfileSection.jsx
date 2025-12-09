export default function ProfileSection() {
    return (
        <main className="w-[600px] border-x border-[#2f3336] h-full bg-black text-white overflow-y-scroll 
        scrollbar-thin scrollbar-thumb-[#444] scrollbar-track-[#121212]">

            {/* Header */}
            <div className="flex items-center h-[55px] px-4">
                <div className="cursor-pointer text-xl w-10 h-10 flex items-center justify-center hover:bg-[#181818] rounded-full">
                    ←
                </div>
                <h6 className="ml-5 text-lg font-semibold">Username</h6>
            </div>

            {/* Banner */}
            <img
                className="h-[200px] w-full object-cover"
                src="/images/image.png"
                alt="banner"
            />

            {/* Profile Info */}
            <div className="flex flex-col p-5">

                <div className="relative w-full mb-4">
                    <img
                        className="absolute -top-[90px] left-0 w-[130px] h-[130px] rounded-full border-[5px] border-black object-cover"
                        src="/images/default.jpg"
                        alt="profile"
                    />
                    
                    <button className="ml-[436px] bg-black text-white px-4 py-2 rounded-full border border-[#536471] font-bold text-[15px]">
                        Edit profile
                    </button>
                </div>

                <h4 className="text-[20px] font-semibold">User Name</h4>
                <h4 className="text-[15px] text-[#71767b] font-medium">@username</h4>

                <p className="text-[15px] mt-4">This is a bio section. No bio available.</p>

                <div className="flex gap-5 text-[#71767b] text-[14px] mt-3">
                    <span><strong>123</strong> Following</span>
                    <span><strong>456</strong> Followers</span>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-10 border-b border-[#2f3336]">
                <div className="w-[300px] text-center font-semibold pb-3 pt-2 relative cursor-pointer">
                    Posts
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[4px] bg-[#1d9bf0] rounded"></span>
                </div>

                <div className="w-[300px] text-center font-semibold pb-3 pt-2 relative cursor-pointer">
                    Likes
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[4px] bg-[#1d9bf0] rounded"></span>
                </div>
            </div>

            {/* A sample tweet */}
            <div className="border-b border-[#2f3336] p-4 flex cursor-pointer hover:bg-[#080808] transition">
                <img
                    src="/images/default.jpg"
                    className="w-12 h-12 rounded-full mr-3 object-cover"
                />

                <div className="flex-1">
                    <div className="font-semibold text-sm mb-1">
                        Username <span className="text-[#536471] font-normal">@handle</span>{" "}
                        <span className="text-[#536471] ml-2">· Jan 10</span>
                    </div>

                    <p className="text-[15px] mb-2">
                        This is sample tweet content for UI preview.
                    </p>

                    <img
                        src="https://via.placeholder.com/500"
                        className="w-full max-h-[300px] rounded-xl object-cover"
                    />
                </div>
            </div>

            {/* Repeat tweets as needed */}

        </main>
    );
}
