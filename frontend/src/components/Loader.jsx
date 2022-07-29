import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularUnderLoad() {
  return (
    <CircularProgress
      disableShrink
      style={{ margin: "40vh 50vw", width: "65px" }}
    />
  );
}
