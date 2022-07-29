import React, { useState } from "react";
import styles from "../styles/DeshBoard.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsCheckCircle } from "react-icons/bs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toggleStatus } from "../redux/Dashboard/actions";
const ClassMap = (props) => {
  const {
    el,
    i,
    showClass,
    setShowClass,
    ass,
    lec,
    assignments,
    setassignments,
    showLec,
    setshowLec,
    setShowTable,
  } = props.value;

  const dispatch = useDispatch();

  return (
    <div>
      <div
        className={styles.classDiv}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{marginTop:"18px"}}>Day {i + 1}</p>
        <div>
          <IoMdArrowDropdown
            onClick={() => {
              setShowClass((prv) => {
                if (prv === i) {
                  return false;
                } else {
                  return i;
                }
              });
              setShowTable((prev) => {
                return !prev;
              });
            }}
          />
        </div>

        <div>
          {showClass !== i && (
            <BsCheckCircle
              style={
                lec && ass
                  ? { color: "green" }
                  : ass || lec
                  ? { color: "#800040" }
                  : { color: "red" }
              }
            />
          )}
        </div>
      </div>
      {showClass === i && (
        <div>
          <p
            style={{
              color: "#183962",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={() => {
              dispatch(toggleStatus("l", lec, i));
              setshowLec(i);
              setassignments(false);
              setShowTable(false);
            }}
          >
            {el.name}
            <BsCheckCircle style={{ color: lec ? "green" : "red" }} />
          </p>
          {showLec === i && (
            <video
              className={styles.videoApp}
              src={el.class}
              // allowfullScree
              title="video"
              controls
            />
          )}
          <p
            style={{
              color: "#183962",
              cursor: "pointer",
              marginTop: "27px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={() => {
              setassignments(i);
              setshowLec(false);
              setShowTable(false);
            }}
          >
            Assignments
            <BsCheckCircle style={{ color: ass ? "green" : "red" }} />
          </p>
          {assignments === i && (
            <button
              className={styles.videoApp}
              style={{
                width: "fit-content",
                cursor: "pointer",
                top: "50%",
                left: "34%",
                paddingRight: "1.5rem",
                paddingLeft: "1.5rem",
                paddingTop: ".75rem",
                paddingBottom: ".75rem",
                borderRadius: "0.375rem",
                color: "white",
                background: "rgb(31 41 55)",
              }}
              onClick={() => dispatch(toggleStatus("a", ass, i))}
            >
              {ass ? "Mark as pending" : "  Mark as done"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ClassMap;
