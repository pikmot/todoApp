import classes from "./TaskSection.module.scss";

import TaskStartColumn from "../TaskStartColumn/TaskStartColumn";
import TaskPendingColumn from "../TaskPendingColumn/TaskPendingColumn";
import TaskFinishColumn from "../TaskFinishColumn/TaskFinishColumn";

export default function TaskSection() {
  return (
    <div className={classes.container}>
      <TaskStartColumn />
      <TaskPendingColumn />
      <TaskFinishColumn />
    </div>
  );
}
