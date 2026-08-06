import classes from "./Home.module.scss";

import Header from "../../components/Header/Header";
import TaskSection from "../../components/TaskSection/TaskSection";

function Home() {
  return (
    <div className={classes.home}>
      <Header />
      <TaskSection />
    </div>
  );
}

export default Home;
