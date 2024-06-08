export function getWeatherStyles(weatherCode) {
  if (weatherCode >= 200 && weatherCode < 300) {
    return { backgroundColor: "#4a5568", color: "#ffffff" };
  } else if (weatherCode >= 300 && weatherCode < 400) {
    return { backgroundColor: "#b2f5ea", color: "#333333" };
  } else if (weatherCode >= 500 && weatherCode < 600) {
    return { backgroundColor: "#3182ce", color: "#ffffff" };
  } else if (weatherCode >= 600 && weatherCode < 700) {
    return { backgroundColor: "#e6f7ff", color: "#333333" };
  } else if (weatherCode >= 700 && weatherCode < 800) {
    return { backgroundColor: "#e2e8f0", color: "#333333" };
  } else if (weatherCode === 800) {
    return { backgroundColor: "darkOrange", color: "#333333" };
  } else if (weatherCode === 801) {
    return { backgroundColor: "#bee3f8", color: "#333333" };
  } else if (weatherCode === 802) {
    return { backgroundColor: "#90cdf4", color: "#333333" };
  } else if (weatherCode === 803) {
    return { backgroundColor: "#a0aec0", color: "#ffffff" };
  } else if (weatherCode === 804) {
    return { backgroundColor: "#718096", color: "#ffffff" };
  } else {
    return { backgroundColor: "#ffffff", color: "#333333" };
  }
}
