import React from "react";
import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.navlogo}><img className={styles.tir} 
      src="https://cdn.dribbble.com/users/1997933/screenshots/9179992/media/ac886a84b6ae93ab9fcc3a21ec468d7f.jpg?compress=1&resize=950x300" alt="1"/>Coding Institute</div>
      <div className={styles.head}>Think Twice CODE Once!</div>
      <div className={styles.Register}>
        <Link to="/signin">
          <button className={styles.btn}>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
