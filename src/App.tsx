import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { fetchWeather } from "./services";
import { WeatherData } from "./types";

function App() {
    const [search, setSearch] = useState("london");
    const [data, setData] = useState<WeatherData>();

    useEffect(() => {
        fetchWeather(search)
            .then((data) => {
                if (data) {
                    setData(data);
                }
            });
    }, [search]);

    console.log(data);

    return (
        <div className="flex gap-4 font-semibold flex-col items-center justify-center bg-image h-[100vh] ">
            <SearchBar setSearch={setSearch} />
            <div className="flex flex-col items-center space-y-4">
                <h1 className="text-5xl font-bold text-white">{data?.name}</h1>
                <h2 className="text-3xl text-gray-200">
                    {data?.weather[0]?.main}
                </h2>
                <div className="flex items-center justify-center">
                    <img
                        src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
                        alt="weather icon"
                    />

                    <h3 className="text-2xl text-gray-300">
                        {data?.main?.temp} °C
                    </h3>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-6 w-full max-w-4xl mx-4">
                <div className="rounded-lg shadow-lg bg-white/10 backdrop-blur-lg p-6 text-center">
                    <p className="text-lg text-gray-200">Humidity</p>
                    <p className="text-2xl font-semibold text-white">
                        {data?.main?.humidity} %
                    </p>
                </div>
                <div className="rounded-lg shadow-lg bg-white/10 backdrop-blur-lg p-6 text-center">
                    <p className="text-lg text-gray-200">Wind</p>
                    <p className="text-2xl font-semibold text-white">
                        {data?.wind?.speed} km/h
                    </p>
                </div>
                <div className="rounded-lg shadow-lg bg-white/10 backdrop-blur-lg p-6 text-center">
                    <p className="text-lg text-gray-200">Feels Like</p>
                    <p className="text-2xl font-semibold text-white">
                        {data?.main?.feels_like} °C
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
