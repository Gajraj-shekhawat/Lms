import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "../styles/payment.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoMdLock } from "react-icons/io";
import { MdOutlineSendToMobile } from "react-icons/md";
import OtpPage from "../components/OtpPage";
const Payment = () => {
  const num = 4444;
  const [OTP, setOTP] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOtp(true);
  };
  // const navigate = useNavigate();

  // const otpvalidator = () => {
  //   if (OTP.length === 4) {
  //     navigate("/dashboard");
  //   }
  // };

  if (OTP.length === 4) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className={styles.main_container}>
      <div className={styles.conatiner}>
        {!showOtp && (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <TextField
                id="outlined-basic"
                label="Card Number"
                variant="outlined"
                fullWidth
                required
                type="text"
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
                type="number"
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Name on Card"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        )}
        {showOtp && (
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
                  <OtpPage otp={OTP} setOTP={setOTP} length={4} per_box={1} />
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
                  {/* <button onClick={otpvalidator} className={styles.verify}>
                      Verify
                    </button> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
