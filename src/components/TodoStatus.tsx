import { TodoStatusProps } from "../interfaces/ITask";



const TodoStatus = ({tasks}:TodoStatusProps) => {
    return (
        <div className="container flex border justify-between h-12 items-center px-4 desktop:w-[40em] mobile:w-80">
            <div className="text-[14px] font-josefin">
                <p >{tasks.length} items left</p>
            </div>
            <div className="flex gap-2 font-josefin text-[14px]">
                <button >All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <div>
                <button className="font-josefin text-[14px]">Clear Completed</button>
            </div>
        </div>
    );
};

export default TodoStatus;