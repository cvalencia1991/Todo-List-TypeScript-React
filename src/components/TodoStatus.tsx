import { TodoStatusProps } from "../interfaces/ITask";



const TodoStatus = ({tasks, activeTask,completedTask,allTask,clearCompleted}:TodoStatusProps) => {

    return (
        <div className={`container flex shadow-2xl
            justify-between bg-[--very-light-gray] text-[--very-dark-grayish-blue]
            h-12 items-center px-4 relative desktop:w-[40em] mobile:w-80
            dark:bg-[--very-dark-desaturated-blue] dark:text-[--light-grayish-blue]
            ${tasks.length === 0 ? "rounded": "rounded-b"} `}>
            <div className="text-[18px] font-josefin">
                <p >{tasks.length} items left</p>
            </div>
            <div
            className="flex gap-2
                font-josefin text-[18px]
                text-[--very-dark-grayish-blue]
                absolute left-1/2 transform -translate-x-1/2
                mobile:top-[4em] w-[18em] justify-center h-10 rounded shadow-xl
                desktop:shadow-none
                desktop:top-1 desktop:border-transparent
                dark:text-[--light-grayish-blue]
                dark:mobile:bg-[--very-dark-desaturated-blue]
                ">
                <button onClick={allTask}
                className='hover:text-[--bringt-blue]'
                >All</button>
                <button
                className='hover:text-[--bringt-blue]'
                onClick={activeTask}
                >Active</button>
                <button onClick={completedTask}
                className='hover:text-[--bringt-blue]'
                >Completed</button>
            </div>
            <div>
                <button onClick={clearCompleted}
                className="font-josefin text-[18px]
                text-[--very-dark-grayish-blue]
                hover:text-[--bringt-blue]"
                >Clear Completed</button>
            </div>
        </div>
    );
};

export default TodoStatus;