import { useState, useEffect } from "react";
import Link from "next/link";
import classes from "./index.module.scss";
import cn from "classnames";

const Logo = (props) => {
  return (
    <Link href="/">
      <a {...props} title="Wróć na stronę główną">
        <img src="/img/logo.png" alt="CFG logo" />
      </a>
    </Link>
  );
};
const Header = () => {
  const [isUnderHeader, setIsUnderHeader] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isUnder = window.scrollY >= window.innerHeight;
      if (isUnder != isUnderHeader) {
        setIsUnderHeader((v) => !v);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isUnderHeader]);
  return (
    <header className={classes.header}>
      <Logo className={cn(
          classes.logo,
          isUnderHeader && classes.logo_acitve
        )} />
      <Logo
        className={cn(
          classes.logo_fixed,
          isUnderHeader && classes.logo_fixed_acitve
        )}
      />
    </header>
  );
};
export default Header;
