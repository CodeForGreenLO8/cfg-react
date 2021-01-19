import React from "react";
import classes from "./index.module.scss";
import {
  FaReact,
  FaPhp,
  FaCss3Alt,
  FaHtml5,
  FaPython,
  FaRaspberryPi,
} from "react-icons/fa";
import { SiNextDotJs, SiJavascript, SiMysql, SiArduino } from "react-icons/si";
import { Tooltip } from "@material-ui/core";

const technologies = [
  ["#F0DB4F", "JavaScript", <SiJavascript color="#323330" />],
  ["#787CB5", "PHP", <FaPhp color="#000000" />],
  ["#3366cc", "CSS", <FaCss3Alt color="#ffffff" />],
  ["#ff3300", "HTML", <FaHtml5 color="#ffffff" />],
  ["#0099ff", "MySQL", <SiMysql color="#ffffff" />],
  ["#D91A4A", "Raspberry Pi", <FaRaspberryPi color="#000" />],
  ["#3775a8", "Python", <FaPython color="#fece3e" />],
  ["#009789", "Arduino", <SiArduino color="#fff" />],
  ["#222222", "React", <FaReact color="#00d9ff" />],
  ["#111", "Next.js", <SiNextDotJs color="#fff" />],
];

function Technologies() {
  return (
    <section>
      <h2>Używane technologie</h2>
      <div className={classes.box}>
        {technologies.map(([bgc, name, icon]) => (
          <Tooltip key={name} title={name}>
            <div style={{ backgroundColor: bgc }}>
              {icon}
            </div>
          </Tooltip>
        ))}
      </div>
    </section>
  );
}

export default Technologies;
