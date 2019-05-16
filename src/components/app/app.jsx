import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';


const App = (props) => {
  const {places, onCardHeaderClick} = props;
  return (<Main
    places = {places}
    onCardHeaderClick = {onCardHeaderClick}
  />);
};

App.propTypes = {
  places: PropTypes.array,
  onCardHeaderClick: PropTypes.func
};

export default App;
