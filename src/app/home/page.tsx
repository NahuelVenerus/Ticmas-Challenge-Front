"use client"
import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/Sidebar";
import Taskform from "@/src/components/Taskform";

const Home = () => {
    return (
        <>
            <Navbar name="Nahuel" picture="Hello" />
            <Sidebar />
            <Taskform />
        </>
    );
}

export default Home;