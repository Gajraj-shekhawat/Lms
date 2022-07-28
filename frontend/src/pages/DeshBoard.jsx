import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { userData } from "../redux/Dashboard/actions";
import styles from "../styles/DeshBoard.module.css";
import ClassMap from "./ClassMap";

const DeshBoard = () => {
  const [showClass, setShowClass] = useState(false);

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
  const x = JSON.parse(localStorage.getItem("userId"));

  const dispatch = useDispatch();
  const store = useSelector((store) => store.dashboard);
  console.log("store:", store);

  useEffect(() => {
    if (x) {
      dispatch(userData(x));
    }
  }, []);

  if (!store.data) {
    return <div>lodinggg....</div>;
  }
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
                    showClass,
                    setShowClass,
                    lec: store?.data[`l${i + 1}`],
                    ass: store?.data[`a${i + 1}`],
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
            Classes score %
          </div>
        </div>
      </div>
    </>
  );
};

export default DeshBoard;
