import { useRef } from "react";
import { useTasks } from "../../contexts/TasksContext";

export const TaskForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { createNewTask } = useTasks();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = ref.current?.value;

    if (title) {
      try {
        await createNewTask(title);

        ref.current!.value = "";
      } catch {
        alert("deu merda.");
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" ref={ref} placeholder="Task title" />
      <button type="submit">Submit</button>
    </form>
  );
};
