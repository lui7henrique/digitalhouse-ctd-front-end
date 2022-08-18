import { AxiosResponse } from "axios";
import { FormEvent, useCallback, useRef } from "react";
import { useMutation } from "react-query";
import { v4 } from "uuid";
import { api } from "../../api";
import { client } from "../../main";
import { Task } from "../List";

export const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const mutation = useMutation(async (newTask: Task) => {
    return await api.post("/tasks", newTask);
  }, {});

  const handleCreateTask = useCallback(
    async (title: string) => {
      const task = {
        title,
        id: v4(),
        createdAt: new Date().toISOString(),
      };

      await mutation.mutateAsync(task);
    },
    [mutation]
  );

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const title = inputRef?.current?.value;

      if (title) {
        handleCreateTask(title);
      }
    },
    [inputRef]
  );

  return (
    <form action="" onSubmit={onSubmit}>
      <input type="text" ref={inputRef} placeholder="task title" />
      <button type="submit">submit</button>
    </form>
  );
};
