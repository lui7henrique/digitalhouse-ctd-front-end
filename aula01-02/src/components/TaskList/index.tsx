import { useTasks } from "../../contexts/TasksContext";
import { Task } from "../Task";

export const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <article>
      {tasks?.map((task, index) => (
        <Task task={task} key={task.id} index={index} />
      ))}
    </article>
  );
};
