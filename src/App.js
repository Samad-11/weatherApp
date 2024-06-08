import { Box, Container, Skeleton, Typography } from "@mui/material";
import SearchInput from "./components/SearchInput";
import Time from "./components/Time";
import CityMainInfo from "./components/CityMainInfo";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { getWeatherStyles } from "./services/getWeatherStyles";
import { getUserCity } from "./services/getUserCity";
import LoadingSkeleton from "./components/LoadingSkeleton";

const App = () => {
  const [weather, setWeather] = useState();
  const [units, setUnit] = useState("metric");
  const [weatherStyle, setWeatherStyle] = useState({});

  const [query, setQuery] = useState({});

  useEffect(() => {
    document.title = query.q
      ? `${query.q.toUpperCase()} | Weather Today`
      : "Weather Today";

    if (query.q) {
      getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
        const style = getWeatherStyles(data.id);
        setWeatherStyle(style);
      });
    }
  }, [query, units]);

  // useEffect(() => {
  //   const fetchCity = async () => {
  //     try {
  //       const userCity = await getUserCity();
  //       setQuery({ q: userCity });
  //     } catch (err) {}
  //   };

  //   fetchCity();
  // }, []);

  useEffect(() => {}, [weather]);

  return (
    <Container>
      <Box sx={weatherStyle}>
        <SearchInput setQuery={setQuery} />
        {weather && (
          <Box sx={{ p: "2rem" }}>
            <Time weather={weather} />
            <CityMainInfo weather={weather} />
          </Box>
        )}
        {!weather && (
          <Typography>Get weather by city name or current location</Typography>
        )}
      </Box>
    </Container>
  );
};

export default App;
