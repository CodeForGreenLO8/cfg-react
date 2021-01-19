import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaHome, FaUserGraduate } from "react-icons/fa";
import { RiFileMarkLine } from "react-icons/ri";
import { AiFillFolderOpen } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import classes from "./index.module.scss";
import cn from "classnames";

const links = [
  ["/", "Strona Główna", <FaHome />],
  ["/projekty", "Projekty", <AiFillFolderOpen />],
  ["/o-nas", "O nas", <RiFileMarkLine />],
  ["/bioroznorodnosc", "Bioróżnorodność", <FaUserGraduate />],
];

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    const handle = () => {
      setIsNavOpen(false);
    };
    window.addEventListener("click", handle);
    return () => {
      window.removeEventListener("click", handle);
    };
  }, []);
  return (
    <>
      <button
        title="Otwórz menu"
        className={cn(classes.button, isNavOpen && classes.button_open)}
        onClick={(e) => {
          e.stopPropagation();
          setIsNavOpen(!isNavOpen);
        }}
      >
        <HiOutlineMenu />
      </button>
      <nav className={cn(classes.nav, isNavOpen && classes.nav_open)}>
        {links.map(([path, name, icon]) => (
          <Link key={name} href={path} scroll={false}>
            <a title={name} className={classes.item} >
              {icon}
              {` `}
              {name}
            </a>
          </Link>
        ))}
      </nav>
    </>
  );
};
export default Nav;
