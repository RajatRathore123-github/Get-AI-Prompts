"use client";

import Profile from "@components/Profile";
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react";

export default function UserProfile({ params }){
    const searchParams = useSearchParams();
    const userName = searchParams.get("name");

    const [userPosts, setUerPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params?.id}/posts`);
            const data = await response.json();

            setUerPosts(data);
        }

        if(params?.id) fetchPosts();
    },[params.id]);

    return(
        <Profile
        name={userName}
        desc={`Welcome to ${userName}'s personlized profile page`}
        data={userPosts}/>
    )
}