import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';
import offers from '../../mocks/offers.js';

const OfferCardsList = (offers, onCardHeaderClick) => {
  //const {offer, onCardHeaderClick} = props;


  return (<div className="cities__places-list places__list tabs__content">
    {offers.map((it, i) => OfferCard(it, onCardHeaderClick))}
    </div>
  );
}

export default OfferCardsList;
