import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";

const LoadingSkeleton = () => {
  return (
    <Box sx={{ p: "2rem" }}>
      <Typography component={"div"} textAlign={"center"}>
        Get weather by your current location or by any city name
      </Typography>
      <Skeleton variant="text" width={"100%"} height={40} />
      <Skeleton variant="text" width={"100%"} height={60} />
      <Box
        my={4}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
        gap={"1.2rem"}
      >
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rounded" width={40} height={40} />
        <Box>
          <Skeleton variant="text" width={170} height={60} />
          <Skeleton variant="text" width={170} height={60} />
          <Skeleton variant="text" width={170} height={60} />
        </Box>
      </Box>
      <Box
        display={"flex"}
        sx={{ justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}
      >
        <Skeleton variant="text" width={170} height={60} />
        <Skeleton variant="text" width={170} height={60} />
        <Skeleton variant="text" width={170} height={60} />
        <Skeleton variant="text" width={170} height={60} />
      </Box>
    </Box>
  );
};

export default LoadingSkeleton;
