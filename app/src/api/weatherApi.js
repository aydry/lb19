export const getWeather = async () => {
    const API_KEY = 'your_api_key_here';
    const city = 'Kyiv';
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ua`);
    return res.json();
  };
  