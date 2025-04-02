import axios from "axios";
import '../style/searchcomponent.css'

export const SearchComponent = ({setWeatherData}) => {

    const host = process.env.REACT_APP_SERVER_HOST;
    const auth = process.env.REACT_APP_SERVER_AUTH;

    function search() {
        getWeather(document.querySelector(".search-input").value)
    }

    async function getWeather(location) {
        await axios.get(host + '/location?city=' + location, {
            headers: {
                Authorization: auth,
            }
        }).then(res => setWeatherData(res.data))
        .catch(err => manageError(err));
    }

    function manageError(err) {
        if (err && err.response && err.response.status) {
            switch (err.response.status) {
                case 400:
                    alert('Please insert a valid location');
                    break;
                case 404:
                    alert('Sorry, we couldn\'t find any location');
                    break;
                default:
                    alert('Unknown error occurred. Please try again later.');
            }
        } else {
            alert('Unknown error occurred. Please try again later.');
        }
    }

    return (
        <div className="searchComponent">
            <input
                type="search"
                className="search-input"
                placeholder="Input location..."
                onKeyUp={(e) => {
                    if (e.key === "Enter") {
                        search();
                    }
                }}
            />
            <button className="search-button"
                    onClick={() => search()}>SEARCH</button>
        </div>
    )
}