import React from "react";
import { projects } from "src/assets";
import Link from "next/link";
import classes from "./index.module.scss";
function Projects() {
  return (
    <section>
      <h2>Nasze projekty</h2>
      <div className={classes.box}>
        {projects.map(([path, title, descr]) => (
          <Link href={path} key={path}>
            <a title={title} className={classes.item}>{descr}</a>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
