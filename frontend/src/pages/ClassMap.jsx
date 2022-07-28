import React, { useState } from "react";
import styles from "../styles/DeshBoard.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsCheckCircle } from "react-icons/bs";

import { Link } from "react-router-dom";
const ClassMap = (props) => {
  
  let el = props.value.el;
  let i = props.value.i;
  let open = props.value.open;
  let l= props.value.l;
  let a= props.value.l;
  
  let SetOpen = props.value.SetOpen;
  
  const [see, Setsee] = useState(l);

  const handleScroe = () => {
    
    Setsee(i + 1);
  };
  return (
    <div onClick={() => SetOpen(i + 1)} style={{ cursor: "pointer" }}>
      <div className={styles.classDiv}>
        <p>day{i + 1}</p>
        <div>
          <IoMdArrowDropdown />
        </div>

        <div>
          <BsCheckCircle style={{ color: see === i + 1 ? "green" : "black" }} />
        </div>
      </div>
      {open === i + 1 && (
        <div style={{ display: open === i + 1 ? "block" : "none" }}>
          <p onClick={handleScroe}>
            {see === i + 1 && (
              <video
                className={styles.videoApp}
                src={el.class}
                allowfullScree
                title="video"
                controls
              />
            )}
            class
          </p>
        </div>
      )}
    </div>
  );
};

export default ClassMap;
