import React from "react";
// import { Routes, Route } from "react-router-dom";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import Feed from "../components/Feed";
import ProfileSection from "../components/ProfileSection";
// import FollowingFollowers from "../FollowingFollowersPage/FollowingFollowers";

function HomePage() {
    return (
        <div className="flex h-screen w-screen bg-black text-white overflow-hidden justify-center">

            {/* Left Sidebar */}
                <LeftSideBar />

            {/* Main Content */}
            <div className="w-[600px]">
                {/* <Feed /> */}
                <ProfileSection />
            </div>

            {/* Right Sidebar - hide on smaller screens */}
            <div className="hidden lg:block">
                <RightSideBar />
            </div>

        </div>
    );
}

export default HomePage;
