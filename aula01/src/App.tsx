import { useRef } from "react";
import { Task } from "./components/Task";
import { useTasks } from "./contexts/TasksContext";

function App() {
  const ref = useRef<HTMLInputElement>(null);
  const { createNewTask, tasks } = useTasks();

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
    <main>
      <form onSubmit={onSubmit}>
        <input type="text" ref={ref} placeholder="Task title" />
        <button type="submit">Submit</button>
      </form>

      <article>
        {tasks?.map((task, index) => (
          <Task task={task} key={task.id} index={index} />
        ))}
      </article>
    </main>
  );
}

export default App;
