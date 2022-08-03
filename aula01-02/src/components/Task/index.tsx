import { Task as TaskType, useTasks } from "../../contexts/TasksContext";

type TaskProps = {
  task: TaskType;
  index: number;
};

export const Task = (props: TaskProps) => {
  const { index, task } = props;
  const { removeTask } = useTasks();

  const realIndex = String(index + 1).padStart(2, "0");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "1rem 0",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
        }}
      >
        {realIndex}.
      </h1>

      <div>
        <h4>{task.title}</h4>

        <sub
          style={{
            cursor: "pointer",
          }}
          onClick={() => removeTask(task.id)}
        >
          Delete task
        </sub>
      </div>
    </div>
  );
};
