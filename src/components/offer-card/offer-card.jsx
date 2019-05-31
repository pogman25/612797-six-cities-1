import React from 'react';
import PropTypes from 'prop-types';

const OfferCard = (offer, key, onCardHeaderClick) => {
  offer = offer.offer;
  const premium = offer.premium === `yes` ?
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
    : ``;
  return (<article className="cities__place-card place-card" key={key}>
    {premium}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${offer.rating * 20}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name place-card__name--test">
        <a href="#" onClick={() => onCardHeaderClick()}>{offer.description}</a>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
  );
};

OfferCard.propTypes = {
  /* offer: PropTypes.shape({
    type: PropTypes.string,
    price: PropTypes.string,
    rate: PropTypes.number,
    src: PropTypes.string,
    premium: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number
  }),*/
  offer: PropTypes.array,
  onCardHeaderClick: PropTypes.func
};

export default OfferCard;
