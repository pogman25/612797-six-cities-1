import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

const App = (props) => {
  const {
    offers,
    onCityClick,
    cities,
    city
  } = props;
  return <Main
    offers={offers}
    onCityClick={onCityClick}
    cities = {cities}
    city = {city}
  />;
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offers: state.offers,
  //cities: Array.from(new Set(state.offers.map((offer) => offer.city))).slice(0, 4)
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => {
    dispatch(ActionCreator.onCityClick(city));
  }
});

App.propTypes = {
  offers: PropTypes.array,
  onCityClick: PropTypes.func,
  cities: PropTypes.arrayOf(PropTypes.string),
  city: PropTypes.string,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
