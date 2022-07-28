import React, { forwardRef } from "react";
import { GoDash } from "react-icons/go";
const OtpLIst = forwardRef(
  ({ onChange, per_box, onKeyDown, length, index }, ref) => {
    return (
      <>
        <input
          type="text"
          ref={ref}
          onChange={onChange}
          maxLength={per_box}
          onKeyUp={onKeyDown}
        />
        {index + 1 !== length && <GoDash />}
      </>
    );
  }
);

export default OtpLIst;
