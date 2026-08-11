import classes from "./TaskPendingColumn.module.scss";

import Task from "../Task/Task";

export default function TaskPendingColumn({
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
            />
          );
        }
      })}
    </div>
  );
}
