import classes from "./TaskSection.module.scss";

import TaskAddButtton from "../TaskAddButton/TaskAddButtton";

import TaskStartColumn from "../TaskStartColumn/TaskStartColumn";
import TaskPendingColumn from "../TaskPendingColumn/TaskPendingColumn";
import TaskFinishColumn from "../TaskFinishColumn/TaskFinishColumn";

export default function TaskSection() {
  return (
    <div className={classes.container}>
      <TaskAddButtton />
      <TaskStartColumn />
      <TaskPendingColumn />
      <TaskFinishColumn />
    </div>
  );
}
