import React from "react";
import classes from "./index.module.scss";
import { sponsors } from "src/assets";

const Item = ({ name, url, img }) => {
  return (
    <a href={url} className={classes.item}>
      <img src={img} alt={name} />
    </a>
  );
};
function Sponsors() {
  return (
    <section className={classes.section}>
      <h2>Sponsorzy</h2>
      <div className={classes.box}>
        {sponsors
          .filter((v) => v.isLong)
          .map((props) => (
            <Item key={props.name} {...props} />
          ))}
      </div>
      <div className={classes.box}>
        {sponsors
          .filter((v) => !v.isLong)
          .map((props) => (
            <Item key={props.name} {...props} />
          ))}
      </div>
    </section>
  );
}

export default Sponsors;
