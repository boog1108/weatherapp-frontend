import React from "react";
import {SearchComponent} from "./components/SearchComponent";
import {useState} from "react";
import {DayComponent} from "./components/DayComponent";
import './style/daycomponent.css';


function App() {
    const [weatherData, setWeatherData] = useState(null);

    React.useEffect(() => {
    }, [weatherData]);

    return (
    <>
        <div className={"title"}>WEATHER APP</div>
        <SearchComponent setWeatherData={(data) => setWeatherData(data)} />
        {
            weatherData &&
            <div className={"city-block"}>
                {weatherData.city.name}, {weatherData.city.country}
            </div>
        }
        {
            weatherData &&
            <div className={"day-block"}>
                {
                    weatherData.days.map(day => {
                            return (
                            <DayComponent day={day} key={day.date}/>
                        )
                    })
                }
            </div>
        }
    </>
    );
}

export default App;
