import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {offers, onCardHeaderClick} = props;
  return <Main offers={offers} onCardHeaderClick={onCardHeaderClick} />;
};

App.propTypes = {
  offers: PropTypes.array,
  onCardHeaderClick: PropTypes.func
};

export default App;
