import { createContext, ReactNode, useContext } from "react";
import { mutate } from "swr";
import { v4 } from "uuid";
import { useFetch } from "../hooks/useFetch";
import { api } from "../services/api";

export const TasksContext = createContext({} as TasksContextType);

export type Task = {
  title: string;
  id: string;
  createdAt: string;
};

type TasksContextType = {
  tasks?: Task[];
  createNewTask: (title: string) => Promise<void>;
  removeTask: (id: string) => Promise<void>;
};

type TasksContextProviderProps = {
  children: ReactNode;
};

export const TasksContextProvider = (props: TasksContextProviderProps) => {
  const { children } = props;
  const { data } = useFetch<Task[]>("/tasks");

  const createNewTask = async (title: string) => {
    try {
      await api.post("/tasks", {
        id: v4(),
        title: title,
        createdAt: new Date().toISOString(),
      });

      mutate("/tasks");
    } catch {
      throw new Error("Failed to create");
    }
  };

  const removeTask = async (id: string) => {
    try {
      await api.delete(`/tasks/${id}`);
      mutate("/tasks");
    } catch {
      throw new Error("Failed to delete");
    }
  };

  return (
    <TasksContext.Provider value={{ tasks: data, createNewTask, removeTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const value = useContext(TasksContext);

  return value;
};
