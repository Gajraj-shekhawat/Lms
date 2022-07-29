import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import DashBoardNavbar from "../components/DashBoardNav";
import { getPersentange, userData } from "../redux/Dashboard/actions";
import styles from "../styles/DeshBoard.module.css";
import ClassMap from "./ClassMap";
import Loader from "../components/Loader";
import java from "../Data/java.json";
import js from "../Data/js.json";
import python from "../Data/python.json";
const DeshBoard = () => {
  const [showClass, setShowClass] = useState(false);

  const [showLec, setshowLec] = useState(false);
  const [assignments, setassignments] = useState(false);

  const x = JSON.parse(localStorage.getItem("userId"));

  const dispatch = useDispatch();
  const store = useSelector((store) => store.dashboard);

  let arr =
    store?.data?.course === "Java"
      ? java
      : store?.data?.course === "Java Script"
      ? js
      : python;

  useEffect(() => {
    if (x) {
      dispatch(userData(x));
      dispatch(getPersentange(x));
    }
  }, [dispatch, x]);

  if (!x) {
    return <Navigate to="/signin" />;
  }
  if (!store.data) {
    return <Loader />;
  }

  return (
    <>
      <DashBoardNavbar name={store.data.name} course={store.data.course} />
      <div style={{ display: "flex" }}>
        <div className={styles.LeftSection}>
          {arr.map((el, i) => {
            return (
              <div key={i}>
                <ClassMap
                  value={{
                    el,
                    i,
                    showLec,
                    setshowLec,
                    assignments,
                    setassignments,
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
            <table border="1">
              <thead>
                <tr>
                  <th>Total Assignments Submission</th>

                  <th>Total Classes Watched</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{(store?.totalassignments / 5) * 100} %</td>
                  <td>{(store?.totalClass / 5) * 100} %</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeshBoard;
