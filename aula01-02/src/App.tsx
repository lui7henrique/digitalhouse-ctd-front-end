import { Count } from "./components/Count";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <main>
      <Count />

      <TaskForm />
      <TaskList />
    </main>
  );
}

export default App;
