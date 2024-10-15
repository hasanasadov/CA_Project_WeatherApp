
import axios from "axios";

const API_KEY = "c518171fb2d14d563926d4899d66f35e";

export const fetchWeather = async (cityName: string = "london") => {
    try {
        const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
        );
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

