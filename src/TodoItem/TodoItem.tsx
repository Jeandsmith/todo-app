import React from "react";

import classes from "./TodoItem.module.css";

function TodoItem({ text }: { text: string }) {
  return (
    <div className={classes.item}>
      <span className={classes.opener}></span>
      <h4>{text}</h4>
    </div>
  );
}

export default TodoItem;
