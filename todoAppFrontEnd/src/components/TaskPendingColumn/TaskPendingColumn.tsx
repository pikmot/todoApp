import classes from "./TaskPendingColumn.module.scss";

import Task from "../Task/Task";

import { TaskColumnProps } from "../../pages/Home/Home";

export default function TaskPendingColumn({
  task = [],
  setTask,
  modalTaskStatus,
  setModalTaskStatus,
  modalToggle,
  modalData,
  setModalToggle,
  setModalData,
}: TaskColumnProps) {
  return (
    <div id="PendingColumn" className={classes.container}>
      <p className={classes.container__header}>PENDING</p>
      {task.map((item, index) => {
        if (item["status"] === "PENDING") {
          return (
            <Task
              key={index}
              taskID={item["taskID"]}
              title={item["title"]}
              description={item["description"]}
              status={item["status"]}
              modalTaskStatus={modalTaskStatus}
              setModalTaskStatus={setModalTaskStatus}
              modalData={modalData}
              modalToggle={modalToggle}
              setModalToggle={setModalToggle}
              setModalData={setModalData}
              task={task}
              setTask={setTask}
            />
          );
        }
      })}
    </div>
  );
}
