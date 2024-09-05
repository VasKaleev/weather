type Props = {
    temp: number;
    description: string;
    country: string;
}
/* interface WeatherProps {
    temp: number;
    description: string;
    country: string;
} */

export const Weather = ({ temp, description, country }:Props) => {
    return (
        <div className="weather">
            <p>Temperature: {temp} °C</p>
            <p>Weather: {description}</p>
            <p>Country: {country}</p>
        </div>
    );
};