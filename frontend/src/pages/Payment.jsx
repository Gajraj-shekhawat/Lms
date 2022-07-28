import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "../styles/payment.module.css";
import { Link } from "react-router-dom";
import { IoMdLock } from 'react-icons/io';
import { MdOutlineSendToMobile } from 'react-icons/md';
import OtpPage from "../components/OtpPage";
const Payment = () => {
  const name="Gajraj"
  const num =4444
  const [OTP,setOTP]=useState("")
  return (
    <div className={styles.main_container}>
      <div className={styles.conatiner}>
        <form className={styles.form}>
          <div>
            <TextField
              id="outlined-basic"
              label="Card Number"
              variant="outlined"
              fullWidth
              required
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              id="outlined-basic"
              label="Expiry date"
              variant="outlined"
              required
            />
            <TextField
              required
              id="outlined-basic"
              label="CVV"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Name on Card"
              variant="outlined"
              fullWidth
              required
            />
          </div>
          <div>
            <button type="submit">SUBMIT</button>
          </div>
        </form>
        <div>
          <div className={styles.containerOtp}>
            <div>
              <h2>Welcome, {name} </h2>
              <h2>
                <IoMdLock />
                Let's keep your account secure
              </h2>
            </div>
            <div className={styles.innerpart}>
              <div>
                <MdOutlineSendToMobile style={{ fontSize: "60px" }} />
              </div>
              <div>
                <h5>Enter the code we sent to (XXXXXX{num})</h5>
              </div>
              <div className={styles.inputotp}>
                {/* <input type="password" placeholder="Enter four digit OTP" /> */}
                <OtpPage otp={OTP} setOTP={setOTP} length={4} per_box={1}/>
              </div>
              <div className={styles.errorDiv}>
                <p>Didn't get a code ? </p>
                <Link to="#">Send Again</Link>
              </div>
              <div className={styles.errorDiv}>
                <p>Wrong number ? </p>

                <Link to="#">Update here</Link>
              </div>
              <div className={styles.verifybtn}>
                <Link to="#">
                  <button className={styles.verify}>Verify</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
