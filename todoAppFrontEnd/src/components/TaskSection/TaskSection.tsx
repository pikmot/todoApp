import classes from "./TaskSection.module.scss";

import TaskAddButtton from "../TaskAddButton/TaskAddButtton";

import TaskStartColumn from "../TaskStartColumn/TaskStartColumn";
import TaskPendingColumn from "../TaskPendingColumn/TaskPendingColumn";
import TaskFinishColumn from "../TaskFinishColumn/TaskFinishColumn";

import Modal from "../Modal/Modal";

import { TaskSectionProps } from "../../pages/Home/Home";

export default function TaskSection({
  task,
  setTask,
  taskTitle,
  setTaskTitle,
  taskDescription,
  setTaskDescription,
  modalTaskStatus,
  setModalTaskStatus,
  id,
  setid,
  taskCount,
  setTaskCount,
  modalRef,
  modalToggle,
  modalData,
  setModalToggle,
  setModalData,
}: TaskSectionProps) {
  return (
    <div className={classes.container}>
      <TaskAddButtton
        id={id}
        setid={setid}
        taskCount={taskCount}
        setTaskCount={setTaskCount}
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
        taskCount={taskCount}
        setTaskCount={setTaskCount}
        modalTaskStatus={modalTaskStatus}
        setModalTaskStatus={setModalTaskStatus}
        id={id}
        setid={setid}
        modalToggle={modalToggle}
        modalData={modalData}
        setModalToggle={setModalToggle}
        setModalData={setModalData}
      />
      <TaskPendingColumn
        task={task}
        setTask={setTask}
        taskCount={taskCount}
        setTaskCount={setTaskCount}
        modalTaskStatus={modalTaskStatus}
        setModalTaskStatus={setModalTaskStatus}
        id={id}
        setid={setid}
        modalToggle={modalToggle}
        modalData={modalData}
        setModalToggle={setModalToggle}
        setModalData={setModalData}
      />
      <TaskFinishColumn
        task={task}
        setTask={setTask}
        taskCount={taskCount}
        setTaskCount={setTaskCount}
        modalTaskStatus={modalTaskStatus}
        setModalTaskStatus={setModalTaskStatus}
        id={id}
        setid={setid}
        modalToggle={modalToggle}
        modalData={modalData}
        setModalToggle={setModalToggle}
        setModalData={setModalData}
      />
    </div>
  );
}
