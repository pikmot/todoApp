import classes from "./TaskFinishColumn.module.scss";

import Task from "../Task/Task";

export default function TaskFinishColumn() {
  return (
    <div className={classes.container}>
      <p className={classes.container__header}>FINISH</p>
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
