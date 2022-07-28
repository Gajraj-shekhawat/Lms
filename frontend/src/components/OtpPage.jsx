import React, { useRef, useState } from "react";
import OtpLIst from "./OtpList";

import styles from "../styles/otpPage.module.css";

const OtpPage = ({ length, per_box, otp, setOTP }) => {
  const inputRef = useRef([]);
  const [pin, setPin] = useState(new Array(length).fill(""));

  const onChange = (e, index) => {
    pin[index] = e.target.value;
    setPin([...pin]);
    setOTP(pin.join(""));
    if (index < length - 1 && e.target.value.length >= per_box)
      inputRef.current[index + 1].focus();
  };

  const onKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !pin[index]) {
      inputRef.current[index - 1].focus();
      inputRef.current[index - 1].select();
    }
    if (pin[index].length >= per_box && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
  };

  return (
    <>
      
      <div className={styles.container}>
        {new Array(length).fill("").map((el, index) => (
          <OtpLIst
            onKeyDown={(e) => {
              onKeyDown(e, index);
            }}
            per_box={per_box}
            onChange={(e) => onChange(e, index)}
            key={index}
            ref={(el) => {
              if (el) {
                inputRef.current[index] = el;
              }
            }}
            length={length}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default OtpPage;
