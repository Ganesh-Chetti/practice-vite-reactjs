import { useState } from "react";

function Weather() {
  const [data, setData] = useState({});
  const [backgroundImage, setBackgroundImage] = useState("");

  const submitting = (event) => {
    event.preventDefault();
    const userInput = event.target[0].value;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=68d837276ac7b94fb6f61ed25b50e80d`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        
        const tempCelsius = res.main.temp - 273.15;
        if (tempCelsius >= 25) {
          setBackgroundImage(
            "https://www.shutterstock.com/image-photo/thermometer-showing-thirty-sky-background-260nw-41916673.jpg"
          );
        } else {
          setBackgroundImage(
            "https://www.shutterstock.com/image-photo/thermometer-over-30-degrees-celsius-260nw-2476079129.jpg"
          );
        }
      })
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "#fff",
      }}
    >
      <h1>Weather App</h1>
      <form onSubmit={submitting}>
        <input type="text" placeholder="Enter city name" />
        <input type="submit" value="Get Weather" />
      </form>
      {Object.keys(data).length > 0 && data.main ? (
        <>
          <h1>Temperature: {(data.main.temp - 273.15).toFixed(2)} &deg;C</h1>
          <h1>Pressure: {data.main.pressure} hPa</h1>
        </>
      ) : (
        <p>Enter a city to get the temperature and pressure details.</p>
      )}
    </div>
  );
}

export default Weather;
