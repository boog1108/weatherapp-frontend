import {WeatherComponent} from "./WeatherComponent";
import '../style/daycomponent.css';


export const DayComponent = ({day}) => {

    return (
        <>
            <div className="day">
                <div className={"day-date"}>{day.date}</div>
                {
                    day.info.map(info => <WeatherComponent info={info} key={info.temp + info.hour + day.date} />)
                }
            </div>
        </>
    )
}