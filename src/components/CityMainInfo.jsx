import { Box, Typography } from "@mui/material";
import React from "react";
import { FaThermometerEmpty, FaWind } from "react-icons/fa";
import { FiArrowDown, FiArrowUp, FiSunrise, FiSunset } from "react-icons/fi";
import { MdWaterDrop } from "react-icons/md";

const CityMainInfo = ({ weather }) => {
  const sideInfoArray = [
    {
      icon: <FaThermometerEmpty />,
      name: "Real Feels",
      value: `${weather.feels_like}°`,
    },
    {
      icon: <MdWaterDrop />,
      name: "Humidity",
      value: `${weather.humidity}%`,
    },
    {
      icon: <FaWind />,
      name: "Wind Speed",
      value: `${weather.speed}km/h`,
    },
  ];
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", fontWeight: "700", mt: "2rem" }}
      >
        {weather.name}, {weather.country}
      </Typography>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", fontWeight: "500", my: "2rem" }}
      >
        {weather.main}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          my: "2rem",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <img src={weather.iconUrl} alt="weather-icon" />
        <Typography variant="h4">{weather.temp.toFixed()}°</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {sideInfoArray.map((info, i) => (
            <Box
              key={i}
              variant={"div"}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {info.icon}
              {info.name}: {info.value}
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2.3rem",
          flexWrap: "wrap",
          my: "5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
            flexWrap: "nowrap",
            justifyContent: "center",
          }}
        >
          <FiSunrise />
          Rise: {weather.sunrise}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
            flexWrap: "nowrap",
            justifyContent: "center",
          }}
        >
          <FiSunset />
          Set: {weather.sunset}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
            flexWrap: "nowrap",
            justifyContent: "center",
          }}
        >
          <FiArrowUp />
          Hign: {weather.temp_max}°
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
            flexWrap: "nowrap",
            justifyContent: "center",
          }}
        >
          <FiArrowDown />
          Low: {weather.temp_min}°
        </Box>
      </Box>
    </Box>
  );
};

export default CityMainInfo;
