import React from "react";

const Form = props => (
  <form className="form-form" onSubmit={props.getWeather}>
    <input
      className="form-input"
      type="text"
      name="city"
      placeholder="Wpisz nazwę miasta..."
    />
    <button className="form-button">Sprawdź</button>
  </form>
);

export default Form;
