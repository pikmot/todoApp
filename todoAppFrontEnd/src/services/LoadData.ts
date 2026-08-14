const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

import { couldStartTrivia } from "typescript/unstable/ast";
import { TaskData } from "../pages/Home/Home";

export type TaskResponse = {
  title?: string;
  description?: string;
  status?: string;
};

export const fetchAllTasks = async (): Promise<TaskData[]> => {
  let response: TaskData[] = await fetch(BACKEND_URL + "/tasks").then((res) =>
    res.json(),
  );

  // .then(console.log)
  // .catch(console.warn);

  return response;
};

export const createTask = async (data: TaskResponse) => {
  const response = await fetch(BACKEND_URL + "/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to Create TASK");
  }
  return (await response.json()) as TaskResponse;
};

export const deleteTask = async (id: number) => {
  console.log(id);

  //no return needed! delete only
  await fetch(BACKEND_URL + "/tasks/" + id, {
    method: "DELETE",
  });

  // if (!response.ok) {
  //   throw new Error("Failed to Create TASK");
  // }
  // return (await response.json()) as TaskResponse;
};

export const patchTask = async (id: number, data: TaskResponse) => {
  const response = await fetch(BACKEND_URL + "/tasks/" + id, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  // if (!response.ok) {
  //   throw new Error("Failed to Create TASK");
  // }
  // return data
};

// console.log("RUNNING TSX");

// createTask({ title: "TEST", description: "DESC", status: "START" });
// patchTask(2, { title: "TEST NEW NEW" });

fetchAllTasks();
// deleteTask(4);
// fetchAllTasks();
