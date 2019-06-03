import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import offers from './mocks/offers.js';


const init = (offerList) => {
  ReactDOM.render(
      <App
        offers = {offerList}
      />,
      document.querySelector(`#root`)
  );
};

init(offers);
