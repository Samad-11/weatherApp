import { Typography } from "@mui/material";
import React from "react";

const Time = ({ weather }) => {
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
