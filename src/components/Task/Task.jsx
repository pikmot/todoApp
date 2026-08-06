import classes from "./Task.module.scss";

export default function Task() {
  return (
    <div className={classes.container}>
      <div className={classes.header}>TASK 1</div>
      <div className={classes.body}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora
        consectetur vero labore omnis ipsa impedit aut, quo ipsam ab quaerat
        optio non odio doloremque reprehenderit, iusto aliquam quos ex?
      </div>
    </div>
  );
}
