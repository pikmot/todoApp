import classes from "./TaskSection.module.scss";

import TaskAddButtton from "../TaskAddButton/TaskAddButtton";

import TaskStartColumn from "../TaskStartColumn/TaskStartColumn";
import TaskPendingColumn from "../TaskPendingColumn/TaskPendingColumn";
import TaskFinishColumn from "../TaskFinishColumn/TaskFinishColumn";

import Modal from "../Modal/Modal";

import { useEffect, useEffectEvent, useState } from "react";

export default function TaskSection({
  task,
  setTask,
  taskTitle,
  setTaskTitle,
  taskDescription,
  setTaskDescription,
  modalTaskStatus,
  setModalTaskStatus,
  taskID,
  setTaskID,
  modalRef,
  modalToggle,
  modalData,
  setModalToggle,
  setModalData,
}) {
  return (
    <div className={classes.container}>
      <TaskAddButtton
        taskID={taskID}
        setTaskID={setTaskID}
        task={task}
        setTask={setTask}
      />

      <Modal
        task={task}
        setTask={setTask}
        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
        modalTaskStatus={modalTaskStatus}
        setModalTaskStatus={setModalTaskStatus}
        modalToggle={modalToggle}
        setModalToggle={setModalToggle}
        modalData={modalData}
        reference={modalRef}
      />

      <TaskStartColumn
        task={task}
        setTask={setTask}
        modalTaskStatus={modalTaskStatus}
        setModalTaskStatus={setModalTaskStatus}
        taskID={taskID}
        setTaskID={setTaskID}
        modalToggle={modalToggle}
        modalData={modalData}
        setModalToggle={setModalToggle}
        setModalData={setModalData}
      />
      <TaskPendingColumn
        task={task}
        setTask={setTask}
        modalTaskStatus={modalTaskStatus}
        setModalTaskStatus={setModalTaskStatus}
        taskID={taskID}
        setTaskID={setTaskID}
        modalToggle={modalToggle}
        modalData={modalData}
        setModalToggle={setModalToggle}
        setModalData={setModalData}
      />
      <TaskFinishColumn
        task={task}
        setTask={setTask}
        modalTaskStatus={modalTaskStatus}
        setModalTaskStatus={setModalTaskStatus}
        taskID={taskID}
        setTaskID={setTaskID}
        modalToggle={modalToggle}
        modalData={modalData}
        setModalToggle={setModalToggle}
        setModalData={setModalData}
      />
    </div>
  );
}
