"use client"
import { useEffect, useState } from "react";
import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/Sidebar";
import Taskform from "@/src/components/Taskform";
import { useRouter } from "next/navigation";
import PageNotFound from "@/src/components/PageNotFound";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { logoutUser, setLoggedUser } from "@/store/slices/userSlice";
import { getLoggedUserByEmail } from "@/services/getLoggedUserByEmail";

const Home = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.loggedUser);
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const [token, setToken] = useState<string | null>(null); 
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [updateSidebar, setUpdateSidebar] = useState<boolean>(false);

    const fetchUser = async () => {
        if (!user || !user.email) return;
        try {
            const response = await getLoggedUserByEmail(user.email);
            if (response.success && typeof response.data !== 'string') {
                dispatch(setLoggedUser(response.data));
            } else {
                dispatch(logoutUser());
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            dispatch(logoutUser());
        }
    };

    const handleSetUser = () => {
        const storedToken = sessionStorage.getItem('token');
        if(!storedToken) return;
        setToken(storedToken);
        dispatch(setLoggedUser(user));
    };

    useEffect(() => {
        fetchUser();
        handleSetUser();
        setIsLoading(false);
    }, [tasks]);

    useEffect(() => {
        if (token === null && !isLoading) {
            router.push('/login');
        } else if (token !== null) {
            router.push('/home');
        }
    }, [token, isLoading, router]);

    if (isLoading) return null;

    return (
        <div>
            {!token ? (
                <PageNotFound />
            ) : (
                <div>
                    <Navbar name={user?.name} picture="" />
                    <Sidebar updateSidebar={updateSidebar}/>
                    <Taskform setUpdateSidebar={setUpdateSidebar}/>
                </div>
            )}
        </div>
    );
}

export default Home;
