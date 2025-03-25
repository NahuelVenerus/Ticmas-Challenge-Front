"use client"
import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/Sidebar";
import Taskform from "@/src/components/Taskform";
import { TaskDTO } from "@/src/DTOs/taskDTO";

const Home = () => {
    return (
        <>
            <Navbar name="Nahuel" picture="" />
            <Sidebar />
            <Taskform />
        </>
    );
}

export default Home;