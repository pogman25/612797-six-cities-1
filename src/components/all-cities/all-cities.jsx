import React from 'react';
import PropTypes from 'prop-types';

const AllCities = (props) => {
  const {
    onCityClick,
    cities,
    city
  } = props;

  return <div className="cities tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((cityName, index) => <li className="locations__item" key={index}>
          <a
            className={`locations__item-link tabs__item ${city === cityName ? `tabs__item--active` : ``}`}
            href="#"
            onClick={(event) => {
              event.preventDefault();
              onCityClick(cityName);
            }}
          >
            <span>{cityName}</span>
          </a>
        </li>)}
      </ul>
    </section>
  </div>;
};

AllCities.propTypes = {
  onCityClick: PropTypes.func,
  cities: PropTypes.arrayOf(PropTypes.string),
  city: PropTypes.string
};

export default AllCities;
