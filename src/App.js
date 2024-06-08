import { Box, Container } from "@mui/material";
import SearchInput from "./components/SearchInput";
import Time from "./components/Time";
import CityMainInfo from "./components/CityMainInfo";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";

const App = () => {
  const [query, setQuery] = useState({ q: "New Delhi" });
  const [weather, setWeather] = useState();
  const [units, setUnit] = useState("metric");

  useEffect(() => {
    document.title = `${query.q.toUpperCase()} | Weather Today`;

    getFormattedWeatherData({ ...query, units }).then((data) => {
      console.log("check\n", data);
      setWeather(data);
    });
  }, [query]);

  useEffect(() => {}, [weather]);

  return (
    <Container>
      <Box sx={{ bgcolor: "darkorange", color: "white" }}>
        <SearchInput setQuery={setQuery} />
        {weather && (
          <Box sx={{ p: "2rem" }}>
            <Time weather={weather} />
            <CityMainInfo weather={weather} />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default App;
