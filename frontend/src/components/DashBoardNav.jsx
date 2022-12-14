import React from "react";
import styles from "../styles/navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
const DashBoardNavbar = ({ name, course }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.nav}>
      <div
        onClick={() => {
          navigate("/");
        }}
        style={{cursor:"pointer"}}
      >
        <img
          className={styles.tir}
          src="https://cdn.dribbble.com/users/1997933/screenshots/9179992/media/ac886a84b6ae93ab9fcc3a21ec468d7f.jpg?compress=1&resize=950x300"
          alt="1"
        />
      </div>
      <div>
        <h4 style={{ color: "#ff9400", fontWeight: "bold" }}>
          Course Name: {course}
        </h4>
      </div>
      <div className={styles.Register}>
        <div>
          <span>{name}</span>
          <br></br>
          <Link
            onClick={() => {
              localStorage.removeItem("userId");
              localStorage.setItem("status", false);
            }}
            to="/"
          >
            <button className={styles.btn}>Logout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashBoardNavbar;
