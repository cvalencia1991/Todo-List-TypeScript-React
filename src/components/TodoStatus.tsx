import { TodoStatusProps } from "../interfaces/ITask";



const TodoStatus = ({tasks, activeTask,completedTask,allTask,clearCompleted}:TodoStatusProps) => {

    return (
        <>
        <div className={`container flex shadow-2xl text-[18px] font-josefin
            justify-between bg-[--very-light-gray] text-[--very-dark-grayish-blue]
            h-12 items-center px-4 relative desktop:w-[36em] mobile:w-80
            dark:bg-[--very-dark-desaturated-blue] dark:text-[--light-grayish-blue]
            ${tasks.length === 0 ? "rounded": "rounded-b"} `}>
            <div className="text-[18px] mobile:text-[14px] font-josefin">
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
                <button onClick={allTask}
                className='hover:text-[--bringt-blue]  mobile:text-[14px]'
                >All</button>
                <button
                className='hover:text-[--bringt-blue]  mobile:text-[14px]'
                onClick={activeTask}
                >Active</button>
                <button onClick={completedTask}
                className='hover:text-[--bringt-blue]  mobile:text-[14px]'
                >Completed</button>
            </div>
            <div>
                <button onClick={clearCompleted}
                className="font-josefin text-[18px]
                text-[--very-dark-grayish-blue]
                hover:text-[--bringt-blue] mobile:text-[14px]"
                >Clear Completed</button>
            </div>
        </div>
        <div>
          <p>Drag and drop to reorder the list</p>
        </div>
        </>
    );
};

export default TodoStatus;