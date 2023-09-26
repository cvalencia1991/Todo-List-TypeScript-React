import { TodoStatusProps } from "../interfaces/ITask";



const TodoStatus = ({tasks, activeTask,completedTask,allTask,clearCompleted}:TodoStatusProps) => {

    return (
        <div className={`container flex shadow-2xl  font-josefin
            justify-between bg-[--very-light-gray] text-[--very-dark-grayish-blue]
            h-12 items-center px-4 relative desktop:${tasks.length === 0 ? "w-[40em]": "w-full"}
            dark:bg-[--very-dark-desaturated-blue] dark:text-[--light-grayish-blue]
            ${tasks.length === 0 ? "rounded": "rounded-b"} `}>
            <div className="text-[18px] font-josefin">
                <p >{tasks.length} items left</p>
            </div>
            <div
            className="flex gap-2
                font-josefin
                text-[--very-dark-grayish-blue]
                absolute left-1/2 transform -translate-x-1/2
                mobile:top-[4em] w-[18em] justify-center h-10 rounded shadow-xl
                desktop:shadow-none
                desktop:top-1 desktop:border-transparent
                dark:text-[--light-grayish-blue]
                dark:mobile:bg-[--very-dark-desaturated-blue]
                ">
                <button
                aria-label="Select All Tasks"
                onClick={allTask}
                className='hover:text-[--bringt-blue]  text-[18px]'
                >All</button>
                <button
                className='hover:text-[--bringt-blue]  text-[18px]'
                aria-label="Select All Active Tasks"
                onClick={activeTask}
                >Active</button>
                <button onClick={completedTask}
                aria-label="Select All Completed Tasks"
                className='hover:text-[--bringt-blue]  text-[18px]'
                >Completed</button>
            </div>
            <div>
                <button onClick={clearCompleted}
                aria-label="Clear Completed Tasks"
                className="font-josefin text-[18px]
                text-[--very-dark-grayish-blue]
                hover:text-[--bringt-blue]"
                >Clear Completed</button>
            </div>
        </div>
    );
};

export default TodoStatus;