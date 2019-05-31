import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import offers from '../../mocks/offers.js';

const init = () => {
  const settings = {
    places: offers
  };

  ReactDOM.render(
      <App
        offers = {settings.places}
      />,
      document.querySelector(`#root`)
  );
};

init();
