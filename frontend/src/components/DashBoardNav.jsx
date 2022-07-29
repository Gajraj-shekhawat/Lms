import React from "react";
import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";
const DashBoardNavbar = ({ name, course }) => {
  return (
    <div className={styles.nav}>
      <div>Logo</div>
      <div>
        <h4 style={{ color: "red" }}>Course Name: {course}</h4>
      </div>
      <div className={styles.Register}>
        <div>
          <span>{name}</span>
          <br></br>
          <Link
            onClick={() => {
              localStorage.removeItem("userId");
            }}
            to="/"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashBoardNavbar;
