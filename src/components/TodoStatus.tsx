import { TodoStatusProps } from "../interfaces/ITask";



const TodoStatus = ({tasks, activeTask,completedTask,allTask,clearCompleted}:TodoStatusProps) => {

    return (
        <div className="container flex border justify-between text-[--very-dark-grayish-blue]
        h-12 items-center px-4 desktop:w-[40em] mobile:w-80 dark:bg-[--very-dark-desaturated-blue] dark:text-[--light-grayish-blue]">
            <div className="text-[18px] font-josefin">
                <p >{tasks.length} items left</p>
            </div>
            <div className="flex gap-2 font-josefin text-[18px] text-[--very-dark-grayish-blue]">
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