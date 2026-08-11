import classes from "./TaskAddButtton.module.scss";

import { TaskAddButtonProps } from "../../pages/Home/Home";

export default function TaskAddButtton({
  taskID,
  setTaskID,
  task,
  setTask,
}: TaskAddButtonProps) {
  const handleClick = () => {
    setTask([
      ...task,
      {
        taskID: taskID,
        title: `NEW TASK`,
        description: "NEW DESCRIPTION",
        status: "START",
      },
    ]);

    incrementID(+taskID);
  };

  const incrementID = (val: number) => {
    setTaskID(val + 1);
  };

  return (
    <div onClick={handleClick} className={classes.container}>
      +
    </div>
  );
}
