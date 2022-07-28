import React from "react";
import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div>Logo</div>
      {/* <div>Welcome to new way to Learn</div> */}
      <div className={styles.Register}>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
