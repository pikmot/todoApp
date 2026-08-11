import classes from "./TaskStartColumn.module.scss";

import Task from "../Task/Task";

import { useEffect } from "react";

export default function TaskStartColumn({
  task = [],
  setTask,
  modalTaskStatus,
  setModalTaskStatus,
  taskID,
  setTaskID,
  modalToggle,
  modalData,
  setModalToggle,
  setModalData,
}) {
  useEffect(() => {}, [modalData]);
  return (
    <div id="StartColumn" className={classes.container}>
      <p className={classes.container__header}>START</p>
      {task.map((item, index) => {
        if (item["status"] === "START") {
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
