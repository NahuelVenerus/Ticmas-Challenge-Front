"use client"
import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/Sidebar";
import Taskform from "@/src/components/Taskform";
import { EditTaskDTO } from "@/src/DTOs/taskDTO";

const Home = () => {
    const exampleTasks: EditTaskDTO[] = [
        {title: "Tarea 1", description: "Descripción de Tarea 1", isArchived: false, isCompleted: false},
        {title: "Tarea 2", description: "Descripción de Tarea 2", isArchived: true, isCompleted: false},
        {title: "Tarea 3", description: "Descripción de Tarea 3", isArchived: false, isCompleted: true},
        {title: "Tarea 4", description: "Descripción de Tarea 4", isArchived: true, isCompleted: true},
    ]
    return (
        <>
            <Navbar name="Nahuel" picture="Hello" />
                <Sidebar tasks={exampleTasks}/>
            <Taskform />
        </>
    );
}

export default Home;