import { useEffect, useState } from 'react';
import { getWeather } from '../api/weatherApi';

const MyCity = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather().then(data => setWeather(data));
  }, []);

  return (
    <section>
      <h1>Моє навчання місто — Київ</h1>
      <p>Київ — столиця України з багатою історією та культурою.</p>

      <h2>Поточна погода</h2>
      {weather && weather.main && weather.weather ? (
        <ul>
          <li>Місто: {weather.name}</li>
          <li>Температура: {weather.main.temp}°C</li>
          <li>Опис: {weather.weather[0].description}</li>
          <li>Координати: [{weather.coord.lat}, {weather.coord.lon}]</li>
        </ul>
      ) : (
        <p>Завантаження...</p>
      )}
    </section>
  );
};

export default MyCity;
