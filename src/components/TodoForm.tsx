import TaskForm from "./TaskForm";
import TaskTheme from "./TaskTheme";
import Tasks from "./Tasks";


const TodoForm = () => {

    return (
        <div className="flex flex-row items-center justify-center bg-no-repeat  h-72 w-screen bg-cover  bg-mobile-light  desktop:bg-desktop-light  dark:desktop:bg-desktop-dark dark:bg-mobile-dark">
            <div className="flex absolute  h-auto flex-col items-center justify-center gap-4 w-auto top-24 mobile:w-11/12 desktop:w-1/3">
                <TaskTheme/>
                <TaskForm />
                <Tasks />
            </div>
        </div>

    );
};


export default TodoForm;