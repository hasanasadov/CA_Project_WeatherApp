import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { fetchWeather } from "./services";
function App() {
    const [search, setSearch] = useState("");

    function fetchWeatherData() {
        console.log("anan",search);
        
        fetchWeather(search);
    }

    useEffect(() => {
        fetchWeatherData();
    }, []);
    return (
        <div className="flex gap-4 font-semibold flex-col items-center justify-center h-[100vh] bg-image bg-red-500">
            <SearchBar search={search} setSearch={setSearch} />
            <h1 className="text-4xl text-white">London</h1>
            <h2 className="text-2xl text-white">Clouds</h2>
            <h3 className="text-xl text-white">12 °C</h3>
            <div className="flex justify-evenly w-full ">
                <div className="rounded-xl h-24 w-72 flex-col bg-tr-op  flex justify-center items-center text-white">
                    <p>Hummidity</p>
                    <p className="text-2xl">84%</p>
                </div>
                <div className="rounded-xl h-24 w-72 flex-col bg-tr-op  flex justify-center items-center text-white">
                    <p>Wind</p>
                    <p className="text-2xl">4 km/h</p>
                </div>
                <div className="rounded-xl h-24 w-72 flex-col bg-tr-op  flex justify-center items-center text-white">
                    <p>Feels Like</p>
                    <p className="text-2xl">15 C</p>
                </div>
            </div>
        </div>
    );
}

export default App;
