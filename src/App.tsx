import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";

import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Error from "./Pages/Error";
import FollowFollower from "./Pages/FollowFollower";
import Main from "./Pages/Main";
import Profile from "./Pages/Profile";
import Search from "./Pages/Search";
import Notification from "./Pages/Norification";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Intro from "./Pages/Intro";

declare global {
    interface IpostInterface {
        postNum: number;
        nickName: string;
        title: string;
        contents: string;
        img: string;
        date: Date;
        liked: string[];
        comments: number[];
    }

    interface IuserInterface {
        nickName: string;
        follower: string[];
        follow: string[];
        name: string;
        id: string;
        password: string;
        posts: number[];
        isLogin: boolean;
        profilePic: string;
        likedPosts: number[];
        likedComments: number[];
    }
}

function App() {
    return (
        <Router>
            <Header user={SampleUser} />
            <Box style={{ position: "fixed", top: "55px", width: "100%" }}>
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path=":username">
                        <Route index element={<Main user={SampleUser} />} />
                        <Route path="notification" element={<Notification />} />
                        <Route path=":isfollow" element={<FollowFollower />} />
                    </Route>
                    <Route path="profile" element={<Profile />} />
                    <Route path="search" element={<Search />} />
                    <Route path="signIn" element={<SignIn />} />
                    <Route path="signUp" element={<SignUp />} />
                    <Route path="/*" element={<Error />} />
                </Routes>
            </Box>
            <Footer />
        </Router>
    );
}

export default App;

const SampleUser: IuserInterface = {
    name: "김용민",
    id: "ryokuman",
    password: "1q2w3e4r",
    nickName: `ryokuman`,
    follower: ["김민수", "박민수", "이진형"],
    follow: ["김민수", "박민수", "이진형"],
    isLogin: true,
    profilePic:
        "https://preview.redd.it/2aoiyozxkn931.jpg?auto=webp&s=8b1060ef8b9a92d02cc785670a14d2890a0ddbf2",
    posts: [1, 2, 3],
    likedPosts: [1, 3],
    likedComments: [],
};
