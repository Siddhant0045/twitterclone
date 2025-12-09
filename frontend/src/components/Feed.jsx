import React from "react";
import { FaRegComment, FaRetweet, FaHeart, FaShare } from "react-icons/fa";

function Feed() {
  return (
    <main className="w-[600px] h-screen bg-black text-white border-x border-[#2f3336] overflow-y-scroll">

      {/* Tabs */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-black/60 flex justify-around border-b border-[#2f3336] bg-black ">
        <button className="flex-1 p-4 font-bold text-base hover:bg-[#16181c]">
          For you
        </button>
        <button className="flex-1 p-4 font-bold text-base hover:bg-[#16181c]">
          Following
        </button>
      </div>

      {/* TweetBox placeholder */}
      <div className="border-b border-[#2f3336] p-4">
        <p className="text-[#71767b]">TweetBox (UI placeholder)</p>
      </div>

      {/* Tweet List */}
      <div className="flex flex-col">
  {Array.from({ length: 50 }).map((_, i) => (
    <div key={i} className="flex p-4 border-b border-[#2f3336]">

      {/* Left side - avatar */}
      <div className="mr-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-[#2f3336]">
          <img src="/images/default.png" alt="avatar" />
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1">

        {/* Header */}
        <div className="flex items-center gap-1 text-[15px] text-[#d9d9d9] whitespace-nowrap overflow-hidden">
          <span className="font-semibold text-white truncate">
            Username {i + 1}
          </span>

          <span className="ml-1 text-[#71767b] text-[14px] truncate">
            @userhandle
          </span>

          <span className="ml-1 text-[#71767b]">· Jan 10</span>
        </div>

        {/* Content */}
        <p className="mt-2 mb-3 text-[15px] leading-[1.4]">
          This is example tweet #{i + 1}. Just UI. No functionality.
        </p>

        {/* Image */}
        <img
          src="https://via.placeholder.com/400x300"
          alt="Tweet"
          className="w-[90%] max-h-[400px] object-cover rounded-lg mt-2"
        />

        {/* Actions */}
        <div className="flex justify-between text-[#71767b] text-[18px] max-w-[350px] mt-3">
          <FaRegComment className="cursor-pointer hover:text-white" />
          <FaRetweet className="cursor-pointer hover:text-white" />
          <div className="flex gap-1 items-center cursor-pointer hover:text-white">
            <FaHeart />
            <span className="text-sm">12</span>
          </div>
          <FaShare className="cursor-pointer hover:text-white" />
        </div>

      </div>
    </div>
  ))}
</div>


    </main>
  );
}

export default Feed;
