import classes from "./TaskPendingColumn.module.scss";

import Task from "../Task/Task";

export default function TaskPendingColumn() {
  return (
    <div className={classes.container}>
      <p className={classes.container__header}>PENDING</p>
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
