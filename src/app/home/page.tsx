"use client"
import { useEffect, useState } from "react";
import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/Sidebar";
import Taskform from "@/src/components/Taskform";
import { useRouter } from "next/navigation";
import PageNotFound from "@/src/components/PageNotFound";

const Home = () => {
    const router = useRouter();
    const [token, setToken] = useState<string | null>(null); 
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const storedToken = sessionStorage.getItem('token');
        setToken(storedToken);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (token === null && !isLoading) router.push('/login');
        else router.push('/home')
    }, [token, isLoading, router]);

    if (isLoading) return null;

    return (
        <div>
            {!token ? (
                <PageNotFound/>
            ) : (
                <div>
                    <Navbar name="Nahuel" picture="" />
                    <Sidebar />
                    <Taskform />
                </div>
            )}
        </div>
    );
}

export default Home;
