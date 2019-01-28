import React from "react";

const Weather = props => {
   const {
      city,
      temp,
      humidity,
      pressure,
      wind,
      tempMax,
      tempMin,
      description,
      country,
      error
   } = props.state;

   let descriptionPL = null;

   switch (description) {
      case "clear sky":
         descriptionPL = "Dziś niebo jest czyste!";
         break;
      case "few clouds":
         descriptionPL = "Lekkie zachmurzenie";
         break;
      case "scattered clouds":
         descriptionPL = "Zachmurzenie umiarkowane";
         break;
      case "broken clouds":
         descriptionPL = "Mocne zachmurzenie";
         break;
      case "shower rain":
         descriptionPL = "Może delikatnie padać";
         break;
      case "rain":
         descriptionPL = "Deszczowo. Może się przydać parasol";
         break;
      case "thunderstorm":
         descriptionPL = "Możliwe burze!";
         break;
      case "snow":
         descriptionPL = "Śnieg";
         break;
      case "mist":
         descriptionPL = "Mgła";
         break;
      default:
         descriptionPL = "Brak danych podogowych";
   }

   return (
      <div className="weather-wrapper">
         {city && !error && (
            <div className="weather-container">
               <table>
                  <tbody>
                     <tr>
                        <td>Miasto:</td>
                        <td>{city.toUpperCase()}</td>
                     </tr>
                     <tr>
                        <td>Temperatura:</td>
                        <td>{temp} st.C</td>
                     </tr>
                     <tr>
                        <td>Wilgotność:</td>
                        <td>{humidity} %</td>
                     </tr>
                     <tr>
                        <td>Ciśnienie:</td>
                        <td>{pressure} hPa</td>
                     </tr>
                     <tr>
                        <td>Prędkość wiatru:</td>
                        <td>{wind} m/sec</td>
                     </tr>
                     <tr>
                        <td>Temperatura MAX</td>
                        <td>{tempMax} st.C</td>
                     </tr>
                     <tr>
                        <td>Temperatura MIN:</td>
                        <td>{tempMin} st.C</td>
                     </tr>
                     <tr>
                        <td>Warunki pogodowe:</td>
                        <td>{descriptionPL}</td>
                     </tr>
                     <tr>
                        <td>Kraj:</td>
                        <td>{country}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         )}
         {error && <p className="weather-error">{error}</p>}
      </div>
   );
};

export default Weather;
