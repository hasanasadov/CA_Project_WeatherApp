"https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c518171fb2d14d563926d4899d66f35e&units=metric";

import axios from "axios";

const API_KEY = "c518171fb2d14d563926d4899d66f35e";

export const fetchWeather = async (cityName: string) => {
    try {
        const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
        );
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
};
