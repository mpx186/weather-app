import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "eaf3b3ced9c95ebda7a7abb45d46516d";

class App extends Component {
   state = {
      city: null,
      humidity: null,
      pressure: null,
      temp: null,
      tempMax: null,
      tempMin: null,
      country: null,
      description: null,
      wind: null,
      error: null
   };

   getWeather = async e => {
      e.preventDefault();
      const city = e.target.elements.city.value;

      if (city) {
         const api_call = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&appid=${API_KEY}&units=metric`
         );

         if (api_call.status === 200) {
            const data = await api_call.json();

            this.setState({
               city: city,
               humidity: data.main.humidity,
               pressure: data.main.pressure,
               temp: data.main.temp,
               tempMax: data.main.temp_max,
               tempMin: data.main.temp_min,
               description: data.weather[0].description,
               wind: data.wind.speed,
               country: data.sys.country,
               error: null
            });
         } else {
            this.setState({
               error:
                  "Nie znaleziono wskazanego miasta w bazie danych. Spróbuj jeszcze raz! Aby sprawdzić miasto znajdujące się poza terenem Polski użyj angielskiej nazwy"
            });
         }
      } else {
         this.setState({
            error: "Wprowadź nazwę miasta"
         });
      }
   };

   render() {
      return (
         <>
            <Header />
            <Form getWeather={this.getWeather} />
            <Weather state={this.state} />
         </>
      );
   }
}

export default App;
