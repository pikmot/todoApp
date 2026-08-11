import classes from "./Home.module.scss";

import Header from "../../components/Header/Header";
import TaskSection from "../../components/TaskSection/TaskSection";

import { useState, useRef, useEffect } from "react";

function Home() {
  //tasks
  const [task, setTask] = useState([]);

  //task status
  const [modalTaskStatus, setModalTaskStatus] = useState(undefined);

  //task counter
  const [taskID, setTaskID] = useState(0);

  //task title + description
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  // const [startColumn, setStartColumn] = useState([]);
  // const [pendingColumn, setPendingColumn] = useState([]);
  // const [finishColumn, setFinishColumn] = useState([]);

  //modal
  const [modalToggle, setModalToggle] = useState(false);
  const [modalData, setModalData] = useState([]);

  const modalElement = useRef(null);

  useEffect(() => {
    // console.log(task);
  }, [task, modalData]);

  return (
    <div className={classes.home}>
      <Header />
      <TaskSection
        task={task}
        setTask={setTask}
        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
        modalTaskStatus={modalTaskStatus}
        setModalTaskStatus={setModalTaskStatus}
        taskID={taskID}
        setTaskID={setTaskID}
        modalToggle={modalToggle}
        modalData={modalData}
        setModalToggle={setModalToggle}
        setModalData={setModalData}
        modalRef={modalElement}
      />
    </div>
  );
}

export default Home;
