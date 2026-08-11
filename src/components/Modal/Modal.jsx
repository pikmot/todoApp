import classes from "./Modal.module.scss";

import { useEffect, useEffectEvent, useState } from "react";

function Modal({
  task,
  setTask,
  taskTitle,
  setTaskTitle,
  taskDescription,
  setTaskDescription,
  modalTaskStatus,
  setModalTaskStatus,
  modalToggle,
  setModalToggle,
  modalData,
  setModalData,
  reference,
}) {
  //check if title or descriptiong being edited
  const [editingTitle, setEditingTitle] = useState(false);
  const [editingDescription, setEditingDescription] = useState(false);

  useEffect(() => {
    if (modalToggle) {
      reference.current.showModal();
    } else {
      reference.current.close();
    }
  }, [modalToggle, modalTaskStatus, taskTitle, taskDescription]);

  const handleClose = () => {
    //set and close
    setModalToggle(false);
    reference.current.close();

    //reset modal after close -> remove any changes

    setEditingTitle(false);
    setEditingDescription(false);

    setTaskTitle(modalData["title"]);
    setTaskDescription(modalData["description"]);

    //auto resets already for status
    // setModalTaskStatus(modalData["status"]);
  };

  const populateOtherStatus = (val) => {
    const status = ["START", "PENDING", "FINISHED"];

    let ls = [];

    for (const element of status) {
      if (element !== val) {
        ls.push(element);
      }
    }

    return ls;
  };

  const removeTask = () => {
    let newArr = [];

    //remove existing
    setTask(
      task.filter((val) => {
        if (val["taskID"] !== modalData["taskID"]) {
          newArr.push(val);
          return true;
        }
      }),
    );

    return newArr;
  };

  const handleTaskChange = () => {
    let newArr = removeTask();

    //add updated version
    setTask(
      newArr.concat([
        {
          taskID: modalData["taskID"],
          title: taskTitle,
          description: taskDescription,
          status: modalTaskStatus,
        },
      ]),
    );

    setEditingTitle(false);
    setEditingDescription(false);

    setModalToggle(false);
    reference.current.close();
  };

  const handleStatusEdit = () => {
    setModalTaskStatus(event.target.value);
  };

  const handleTitleEdit = () => {
    if (editingTitle) {
      // setEditingTitle(false);
    } else {
      setEditingTitle(true);
    }
  };

  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleDescriptionEdit = () => {
    if (editingDescription) {
    } else {
      setEditingDescription(true);
    }
  };

  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  return (
    <dialog ref={reference} className={classes.modal}>
      <div className={classes.modal__cross} onClick={handleClose}>
        X
      </div>

      <div className={classes.modal__title}>ID: {modalData["taskID"]}</div>

      {editingTitle ? (
        <input
          type="text"
          className={classes.modal__title__input}
          onClick={handleTitleEdit}
          onChange={handleTitleChange}
          placeholder={modalData["title"]}
        />
      ) : (
        <div className={classes.modal__title} onClick={handleTitleEdit}>
          Title: {modalData["title"]}
        </div>
      )}

      {editingDescription ? (
        <input
          type="text"
          className={classes.modal__body__input}
          onClick={handleDescriptionEdit}
          onChange={handleDescriptionChange}
          placeholder={modalData["description"]}
        />
      ) : (
        <div className={classes.modal__body} onClick={handleDescriptionEdit}>
          Description: {modalData["description"]}
        </div>
      )}

      <span>
        <label htmlFor="dropdown" className={classes.modal__dropdown}>
          Type:
        </label>
        <select
          id="dropdown"
          onChange={handleStatusEdit}
          className={classes.modal__dropdown__box}
          value={modalTaskStatus}
        >
          <option disabled>{modalTaskStatus}</option>
          {populateOtherStatus(modalData["status"]).map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
      </span>
      <button className={classes.modal__save} onClick={handleTaskChange}>
        SAVE
      </button>
    </dialog>
  );
}

export default Modal;
