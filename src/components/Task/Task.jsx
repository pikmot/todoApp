import classes from "./Task.module.scss";

import { useEffect } from "react";

export default function Task({
  taskID = "-1",
  title = "-1",
  description = "-1",
  status = "-1",
  modalTaskStatus,
  setModalTaskStatus,
  modalToggle,
  modalData,
  setModalToggle,
  setModalData,
}) {
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

  return (
    <div className={classes.container} onClick={handleClick}>
      <div className={classes.header}>{truncateText(taskID, 3)}</div>
      <div className={classes.header}>{truncateText(title, 15)}</div>
      <div className={classes.body}>{truncateText(description, 35)}</div>
    </div>
  );
}
