import React from "react";
import styles from "../styles/navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div>Logo</div>
      {/* <div>Welcome to new way to Learn</div> */}
      <div className={styles.Register}>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
