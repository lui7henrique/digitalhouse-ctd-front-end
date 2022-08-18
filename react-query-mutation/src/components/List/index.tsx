import { useFetch } from "../../hooks/useFetch";

export type Task = {
  id: string;
  createdAt: string;
  title: string;
};

type GetTasks = Array<Task>;

export const List = () => {
  const { data, isLoading, error } = useFetch<GetTasks>(["tasks"], "/tasks");

  if (!data) {
    return <h1>no data :(</h1>;
  }

  if (isLoading) {
    return <h1>loading...... :)</h1>;
  }

  if (error) {
    return <h1>error :(</h1>;
  }

  return (
    <div>
      {data.map((task) => {
        return (
          <div>
            <h1>{task.title}</h1>
            <button>delete</button>
          </div>
        );
      })}
    </div>
  );
};
