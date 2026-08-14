import classes from "./TaskFinishColumn.module.scss";

import Task from "../Task/Task";

import { TaskColumnProps } from "../../pages/Home/Home";

export default function TaskFinishColumn({
  task = [],
  setTask,
  modalTaskStatus,
  setModalTaskStatus,
  modalToggle,
  modalData,
  setModalToggle,
  setModalData,
  taskCount,
  setTaskCount,
}: TaskColumnProps) {
  return (
    <div id="FinishColumn" className={classes.container}>
      <p className={classes.container__header}>FINISH</p>
      {task.map((item, index) => {
        if (item["status"] === "FINISHED") {
          return (
            <Task
              key={index}
              id={item["id"]}
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
              taskCount={taskCount}
              setTaskCount={setTaskCount}
            />
          );
        }
      })}
    </div>
  );
}
