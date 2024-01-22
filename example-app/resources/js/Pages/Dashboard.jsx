import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useEffect, useState} from "react";
import {data} from "autoprefixer";


export default function Dashboard({ auth }) {
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/posts", {
                method: "GET",
            });

            if (!response.ok) {
                console.log('Error:', response.statusText);
                return;
            }

            const data = await response.json();
            setPosts(data);
            console.log('Data:', data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    const create = (e) => {
        e.preventDefault();
      (route('password.request'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Blog Post</h2>}
        >


            <div className="py-12">

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div>
                        <PrimaryButton  onClick={create} >
                         Create new post
                        </PrimaryButton>
                    </div>
                    <div>
                        <h1>Posts</h1>
                        {posts.length > 0 ? (
                            <ul>
                                {posts.map((post) => (
                                    <div className='bg-gray-200 border border-transparent rounded-md'>
                                    <li key={post.id}>
                                        <h2 className="font-bold">{post.title}</h2>
                                        <p>{post.content}</p>
                                        <p>{post.created_at}</p>
                                    </li>
                                    </div>
                                ))}
                            </ul>

                        ) : (
                            <p>Nothing to post yet. Create your first one!</p>
                        )}
                        <br></br>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
