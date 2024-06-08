import { Typography } from "@mui/material";
import React from "react";

const Time = ({ weather }) => {
  console.log("==========hehe==========================");
  console.log(weather);
  console.log("====================================");
  return (
    <Typography
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        my: "8px",
        textAlign: "center",
      }}
    >
      {weather.formattedLocalTime}
    </Typography>
  );
};

export default Time;
