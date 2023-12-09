

import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { clearCompleted,completedTask, allTask, activeTask } from "../redux/features/tasks/tasksSlice";

const TodoStatus = () => {

    const tasks =  useAppSelector(state => state.tasks.tasks);
    const dispatch = useAppDispatch();

    return (

        <div className={`grid grid-cols-2 grid-rows-1 shadow-2xl w-full text-base font-josefin justify-items-center place-items-center bg-[--very-light-gray] text-[--very-dark-grayish-blue] h-12 relative desktop:flex desktop:justify-around desktop:h-auto desktop:bg-none dark:bg-[--very-dark-desaturated-blue] desktop:grid-rows-3 dark:text-[--light-grayish-blue]
            ${tasks.length === 0 ? "rounded": "rounded-b"} `}>
            <div className="text-base font-josefin desktop:flex desktop:items-center desktop:justify-center">
                <p >{tasks.length} items left</p>
            </div>
            <div className="row-start-2 col-span-2 flex  text-base  absolute top-12 h-12 items-center gap-4 border-solid bg-white  shadow-xl rounded-md justify-center w-full desktop:static desktop:w-auto desktop:shadow-none desktop:bg-transparent desktop:items-center desktop:justify-center dekstop:top-0 dark:bg-[--very-dark-desaturated-blue]">
                <button
                aria-label="Select All Tasks"
                onClick={() => dispatch(allTask())}
                className='hover:text-[--bringt-blue]   text-base'
                >All</button>
                <button
                className='hover:text-[--bringt-blue]   text-base'
                aria-label="Select All Active Tasks"
                onClick={() => dispatch(activeTask())}
                >Active</button>
                <button onClick={() => dispatch(completedTask())}
                aria-label="Select All Completed Tasks"
                className='hover:text-[--bringt-blue]   text-base'
                >Completed</button>
            </div>
            <div className="col-start-2 desktop:flex ">
                <button onClick={() => dispatch(clearCompleted())}
                aria-label="Clear Completed Tasks"
                className="font-josefin  text-base
                text-[--very-dark-grayish-blue]
                hover:text-[--bringt-blue]
                dark:text-[--light-grayish-blue] dark:hover:text-[--bringt-blue]"
                >Clear Completed</button>
            </div>
        </div>
    );
};

export default TodoStatus;