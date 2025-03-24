"use client"
import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/Sidebar";

const Home = () => {
    return (
        <>
            <Navbar name="Nahuel" picture="Hello" />
            <Sidebar />
            <h1>Welcome Home!</h1>
        </>
    );
}

export default Home;