import classes from "./TaskFinishColumn.module.scss";

import Task from "../Task/Task";

export default function TaskFinishColumn({
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
    <div id="FinishColumn" className={classes.container}>
      <p className={classes.container__header}>FINISH</p>
      {task.map((item, index) => {
        if (item["status"] === "FINISHED") {
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
