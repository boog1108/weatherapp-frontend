import '../style/weathercomponent.css';

export const WeatherComponent = ({info}) => {

    return (
        <>
            <div className={'weather-block'}>
                <div className={'hour'}>{info.hour}</div>
                <div className={'temp'}>T: {info.main.temp} °C</div>
                {
                    info.weather.map(item =>
                        <div key={item.main + info.hour + info.main.temp}>
                            <img className={'weather-icon'} src={'https://openweathermap.org/img/wn/' + item.icon + '@2x.png'}/>
                            <div>{item.main}</div>
                        </div>
                    )

                }
            </div>

        </>
    )
}