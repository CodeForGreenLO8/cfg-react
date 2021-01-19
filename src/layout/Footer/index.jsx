import React from "react";
import classes from "./index.module.scss";
import Icon from "./lo8.jsx";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      Code for Green jest autorskim programem Fundacji Forum Inicjatyw
      Społecznych. <br />
      Finansowany jest ze środków fundacji "Terre des hommes" oraz "Volkswagen
      Belegschaftsstiftung"
      <br />
      Copyright © 2020 Code for Green
      <br />
      <a
        href="https://facebook.com/codeforgreenlo8"
        className={classes.icon}
        target="_blank"
        title="FB"
      >
        <FaFacebook />
      </a>
      <a
        href="http://lo8.poznan.pl/"
        className={classes.icon}
        target="_blank"
        title="LO8"
      >
        <Icon />
      </a>
    </footer>
  );
};
export default Footer;
