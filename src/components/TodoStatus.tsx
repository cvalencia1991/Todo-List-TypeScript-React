

import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { clearCompleted,completedTask, allTask, activeTask } from "../redux/features/tasks/tasksSlice";

const TodoStatus = () => {

    const tasks =  useAppSelector(state => state.tasks.tasks);
    const dispatch = useAppDispatch();

    return (

        <div className={`grid grid-cols-2 grid-rows-2 mobile:grid shadow-2xl w-full text-[18px] font-josefin justify-items-center bg-[--very-light-gray] text-[--very-dark-grayish-blue] h-12 p-4 relative  desktop:flex desktop:justify-around desktop:h-auto desktop:bg-none dark:bg-[--very-dark-desaturated-blue] dark:text-[--light-grayish-blue]
            ${tasks.length === 0 ? "rounded": "rounded-b"} `}>
            <div className=" text-[18px] font-josefin desktop:flex desktop:items-center desktop:justify-center">
                <p >{tasks.length} items left</p>
            </div>
            <div className="row-start-2 col-span-2 flex  absolute top-12 h-12 items-center gap-4 rounded-md justify-center w-full bg-[--very-dark-desaturated-blue] desktop:static desktop:w-auto desktop:bg-transparentn desktop:items-center desktop:justify-center dekstop:top-0">
                <button
                aria-label="Select All Tasks"
                onClick={() => dispatch(allTask())}
                className='hover:text-[--bringt-blue]  text-[18px]'
                >All</button>
                <button
                className='hover:text-[--bringt-blue]  text-[18px]'
                aria-label="Select All Active Tasks"
                onClick={() => dispatch(activeTask())}
                >Active</button>
                <button onClick={() => dispatch(completedTask())}
                aria-label="Select All Completed Tasks"
                className='hover:text-[--bringt-blue]  text-[18px]'
                >Completed</button>
            </div>
            <div className="col-start-2 desktop:flex ">
                <button onClick={() => dispatch(clearCompleted())}
                aria-label="Clear Completed Tasks"
                className="font-josefin text-[18px]
                text-[--very-dark-grayish-blue]
                hover:text-[--bringt-blue]
                dark:text-[--light-grayish-blue] dark:hover:text-[--bringt-blue]"
                >Clear Completed</button>
            </div>
        </div>
    );
};

export default TodoStatus;