import classes from "./Home.module.scss";

import Header from "../../components/Header/Header";
import TaskSection from "../../components/TaskSection/TaskSection";

import { useState, useRef, useEffect, RefObject } from "react";

import { fetchAllTasks } from "../../services/LoadData";

export interface TaskData {
  id: number;
  title: string;
  description: string;
  status: string;
}

export interface ModalProps {
  task: TaskData[];
  setTask: (task: TaskData[]) => void;
  taskTitle: string;
  setTaskTitle: (title: string) => void;
  taskDescription: string;
  setTaskDescription: (description: string) => void;
  modalTaskStatus: string | undefined;
  setModalTaskStatus: (status: string) => void;
  modalToggle: boolean;
  setModalToggle: (title: boolean) => void;
  modalData: TaskData;
  setModalData: (modalData: TaskData) => void;
  reference: RefObject<HTMLDialogElement | null>;
}

export interface TaskProps {
  id: number;
  title: string;
  description: string;
  status: string;
  modalTaskStatus: string;
  setModalTaskStatus: (status: string) => void;
  modalToggle: boolean;
  modalData: TaskData;
  setModalToggle: (value: boolean) => void;
  setModalData: (data: TaskData) => void;
  task: TaskData[];
  setTask: (task: TaskData[]) => void;
}

export interface TaskAddButtonProps {
  id: number;
  setid: (ID: number) => void;
  task: TaskData[];
  setTask: (task: TaskData[]) => void;
}

export interface TaskColumnProps {
  task: TaskData[];
  setTask: (task: TaskData[]) => void;
  modalTaskStatus: string;
  setModalTaskStatus: (status: string) => void;
  id: number;
  setid: (ID: number) => void;
  modalToggle: boolean;
  setModalToggle: (title: boolean) => void;
  modalData: TaskData;
  setModalData: (modalData: TaskData) => void;
}

export interface TaskSectionProps {
  task: TaskData[];
  setTask: (task: TaskData[]) => void;
  taskTitle: string;
  setTaskTitle: (title: string) => void;
  taskDescription: string;
  setTaskDescription: (description: string) => void;
  modalTaskStatus: string;
  setModalTaskStatus: (status: string) => void;
  id: number;
  setid: (ID: number) => void;
  modalToggle: boolean;
  setModalToggle: (title: boolean) => void;
  modalData: TaskData;
  setModalData: (modalData: TaskData) => void;
  modalRef: RefObject<HTMLDialogElement | null>;
}

function Home() {
  //tasks
  const [task, setTask] = useState<TaskData[]>([]);

  //task status
  const [modalTaskStatus, setModalTaskStatus] = useState<string>("");

  //task counter
  const [id, setid] = useState(1);

  //task number
  const [taskCount, setTaskCount] = useState(1);

  //task title + description
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  // const [startColumn, setStartColumn] = useState([]);
  // const [pendingColumn, setPendingColumn] = useState([]);
  // const [finishColumn, setFinishColumn] = useState([]);

  //modal
  const [modalToggle, setModalToggle] = useState(false);
  const [modalData, setModalData] = useState<TaskData>({
    id: 0,
    title: "",
    description: "",
    status: "",
  });

  const modalElement = useRef<HTMLDialogElement | null>(null);

  const getTasks = async () => {
    const tasks = await fetchAllTasks();
    setTask(tasks);
  };

  //run once during instatnioatoin and every time task added
  useEffect(() => {
    console.log(task);

    getTasks();

    console.log(task);
  }, [taskCount]);

  //run during run time
  useEffect(() => {
    // getTasks();
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
        id={id}
        setid={setid}
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
