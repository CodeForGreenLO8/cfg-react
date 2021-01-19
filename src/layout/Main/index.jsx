import React from "react";
import classes from "./index.module.scss";

const Main = ({ children }) => {
  return <main className={classes["main"]}>{children}</main>;
};
export default Main;
