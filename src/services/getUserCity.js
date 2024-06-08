// utils.js

const API_KEY = process.env.REACT_APP_API_KEY;

export async function getUserCity() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch city data");
          }
          const data = await response.json();
          console.log(data);
          const city = data.name;
          resolve(city);
        } catch (error) {
          reject(error);
        }
      }, reject);
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}
