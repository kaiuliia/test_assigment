import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useEffect, useState} from "react";
import axios from 'axios';
import {data} from "autoprefixer";


export default function CreateNewPost({ auth }) {
    const [posts, setPosts] = useState([]);

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch("http://127.0.0.1:8000/api/posts", {
    //             method: "GET",
    //         });
    //
    //         if (!response.ok) {
    //             console.log('Error:', response.statusText);
    //             return;
    //         }
    //
    //         const data = await response.json();
    //         setPosts(data);
    //         console.log('Data:', data);
    //     } catch (error) {
    //         console.error('Fetch error:', error);
    //     }
    // };
    //
    // useEffect(() => {
    //     fetchData();
    // }, []);




    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Blog Post</h2>}
        >

<div>
    Create New Post
</div>
        </AuthenticatedLayout>
    );
}
