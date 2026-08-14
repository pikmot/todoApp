import classes from "./TaskAddButtton.module.scss";

import { createTask } from "../../services/LoadData";

import { TaskAddButtonProps } from "../../pages/Home/Home";

import { fetchAllTasks } from "../../services/LoadData";

export default function TaskAddButtton({
  id,
  setid,
  task,
  setTask,
  taskCount,
  setTaskCount,
}: TaskAddButtonProps) {
  const handleClick = async () => {
    await createTask({
      title: `NEW TASK`,
      description: "NEW DESCRIPTION",
      status: "START",
    });

    // setTask([
    //   ...task,
    //   // {
    //   //   id: id,
    //   //   title: `NEW TASK`,
    //   //   description: "NEW DESCRIPTION",
    //   //   status: "START",
    //   // },
    // ]);

    // incrementID(+id);

    // setTaskCount(task.length);

    setTask(await fetchAllTasks());
  };

  const incrementID = (val: number) => {
    setid(val + 1);
  };

  return (
    <div onClick={handleClick} className={classes.container}>
      +
    </div>
  );
}
