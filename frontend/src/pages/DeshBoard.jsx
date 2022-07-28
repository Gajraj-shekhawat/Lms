import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/DeshBoard.module.css";
import ClassMap from "./ClassMap";

const DeshBoard = () => {
  const [open, SetOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [count, setcount] = useState(0);
  const classes = [
    {
      class:
        "https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/31010/saPXCiBxjCj8cxFFu2kthzx6AAq2dT46Kc9cGoDL.mp4",
      assignments: "",
    },
    {
      class:
        "https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/27139/ZclH1gfUiBDEHKBb1zMYRo7DC2ioZ0EXvXDXv9yJ.mp4",
      assignments: "",
    },
    {
      class:
        "https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/31010/saPXCiBxjCj8cxFFu2kthzx6AAq2dT46Kc9cGoDL.mp4",
      assignments: "",
    },
    {
      class:
        "https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/31010/saPXCiBxjCj8cxFFu2kthzx6AAq2dT46Kc9cGoDL.mp4",
      assignments: "",
    },
    {
      class:
        "https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/31010/saPXCiBxjCj8cxFFu2kthzx6AAq2dT46Kc9cGoDL.mp4",
      assignments: "",
    },
    {
      class:
        "https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/31010/saPXCiBxjCj8cxFFu2kthzx6AAq2dT46Kc9cGoDL.mp4",
      assignments: "",
    },
  ];
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div className={styles.LeftSection}>
          {classes.map((el, i) => {
            return (
              <div key={i}>
                <ClassMap
                  value={{
                    el,
                    i,
                    SetOpen,
                    open,
                    setScore,
                    score,
                    classes,
                    count,
                    setcount,
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.RightDiv}>
          <div
            style={{
              display: "flex",
              justifyContent: "right",

              height: "20px",
              marginRight: "100px",
              fontSize: "27px",
            }}
          >
            Classes score {score} %
          </div>
        </div>
      </div>
    </>
  );
};

export default DeshBoard;
