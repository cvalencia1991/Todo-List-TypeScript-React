import { TaskItem } from "../interfaces/ITask";
import TaskCard from "./TaskCard";
import TodoStatus from "./TodoStatus";
import { DndContext, DragEndEvent, PointerSensor, closestCorners, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";



const Taskview = ({ tasks,setTaskState, setTasks, activeTask, completedTask,allTask,clearCompleted, handleDelete, handleDone }: TaskItem) => {

  const handleDragend = (e: DragEndEvent): void => {
    const {active, over} = e;
    if(!over) {return;}
    const activeId = active.id;
    const overId = over.id;
    const activeIndex = tasks.findIndex((task) => task.id === Number(activeId));
    const overIndex = tasks.findIndex((task) => task.id === Number(overId));
    const newTasks = [...tasks];
    const [removed] = newTasks.splice(activeIndex, 1);
    newTasks.splice(overIndex, 0, removed);
    setTasks(newTasks);
    setTaskState(newTasks);

  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
        },
      }),
  );

  return (
    <div className="flex items-center flex-col ">
      <DndContext
      collisionDetection={closestCorners}
      onDragEnd={handleDragend}
      sensors={sensors}
      >

      <ul className="rounded">
        <SortableContext
        items={tasks.map((task) => task.id)}
        strategy={verticalListSortingStrategy}
        >
        {tasks.map((task,index) =>
        <li
          className={`flex items-center justify-between border-b px-4 bg-white h-12  font-josefin
          desktop:w-[36em] mobile:w-80 dark:bg-[--very-dark-desaturated-blue] text-[18px]
          dark:border-[--light-grayish-blue] touch-none ${index === 0 ? "first:rounded-t" : ""}`}
          key={task.id}>
          <TaskCard handleDelete={handleDelete}
          handleDone={handleDone}
          task={task} />
        </li>
        )}
        </SortableContext>
      </ul>
    </DndContext>
      <TodoStatus
      activeTask={activeTask}
      completedTask={completedTask}
      allTask={allTask}
      clearCompleted={clearCompleted}
      tasks={tasks}
      />
    </div>
  );
};

export default Taskview;
