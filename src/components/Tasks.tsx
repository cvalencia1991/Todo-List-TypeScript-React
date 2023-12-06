
import TaskCard from "./TaskCard";
import { DndContext,DragEndEvent, PointerSensor, closestCorners, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useAppSelector,useAppDispatch } from "../redux/hooks/hooks";
import { setTasks } from "../redux/features/tasks/tasksSlice";
import TodoStatus from "./TodoStatus";

const Tasks = () => {

    const tasks =  useAppSelector(state => state.tasks.tasks);
    const dispatch = useAppDispatch();

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
        dispatch(setTasks(newTasks));

    };

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 10 }}),);

  return (
    <div className="flex flex-col absolute rounded top-36 w-full">
      <ul>
        <DndContext collisionDetection={closestCorners} onDragEnd={handleDragend} sensors={sensors}>
          <SortableContext
          items={tasks.map((task) => task.id)}
          strategy={verticalListSortingStrategy}
          >
          {tasks.map((task,index) =>
          <li
            className={`flex items-center justify-between w-auto border-b px-4 bg-white h-12 desktop:h-16 font-josefin dark:bg-[--very-dark-desaturated-blue] text-[18px] dark:border-[--light-grayish-blue] touch-none ${index === 0 ? "first:rounded-t" : ""}`}
            key={task.id}>
            <TaskCard task={task} />
          </li>
          )}
          </SortableContext>
          <li><TodoStatus /></li>
          <li className="relative top-28"><p className="font-josefin flex text-center relative items-center justify-center dark:text-[--light-grayish-blue] text-[--very-dark-grayish-blue] text-[18px]">Drag and drop to reorder the list</p></li>
        </DndContext>
        </ul>
    </div>
  );
};

export default Tasks;
