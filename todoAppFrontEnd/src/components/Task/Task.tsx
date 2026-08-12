import classes from "./Task.module.scss";

import { useEffect } from "react";

import { TaskProps } from "../../pages/Home/Home";

export default function Task({
  taskID = -1,
  title = "-1",
  description = "-1",
  status = "-1",
  modalTaskStatus,
  setModalTaskStatus,
  modalToggle,
  modalData,
  setModalToggle,
  setModalData,
  task,
  setTask,
}: TaskProps) {
  useEffect(() => {}, [modalData]);

  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.slice(0, limit - 3) + "...";
    } else {
      return text;
    }
  };

  const handleClick = () => {
    if (modalToggle) {
      setModalToggle(false);
    } else {
      //change if Modal being opened
      setModalData({
        taskID: taskID,
        title: title,
        description: description,
        status: status,
      });

      setModalTaskStatus(status);
      setModalToggle(true);
    }
  };

  const handleDelete = (e) => {
    //remove task from overall list

    setTask(
      task.filter((val) => {
        return val["taskID"] !== taskID;
      }),
    );
  };

  return (
    <div className={classes.container} onClick={handleClick}>
      <div className={classes.container__button} onClick={handleDelete}>
        X
      </div>
      <div className={classes.container__header}>
        ID: {truncateText(taskID, 3)}
      </div>

      <div className={classes.container__header}>{truncateText(title, 15)}</div>
      <div className={classes.container__body}>
        {truncateText(description, 35)}
      </div>
    </div>
  );
}
