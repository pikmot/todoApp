import classes from "./TaskStartColumn.module.scss";

import Task from "../Task/Task";

export default function TaskStartColumn() {
  return (
    <div className={classes.container}>
      <p className={classes.container__header}>Start</p>

      <Task></Task>
      <Task></Task>
      <Task></Task>
      <Task></Task>
      <Task></Task>
      <Task></Task>
      <Task></Task>
      <Task></Task>
      <Task></Task>
    </div>
  );
}
