import classes from "./TaskAddButtton.module.scss";

import { useState } from "react";

export default function TaskAddButtton({ taskID, setTaskID, task, setTask }) {
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

    incrementID(taskID);
  };

  const incrementID = (val) => {
    setTaskID(val + 1);
  };

  return (
    <div onClick={handleClick} className={classes.container}>
      +
    </div>
  );
}
