import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';


class OfferCardsList extends PureComponent {
  constructor(props) {
    super(props);
    this.offers = props.offers;
    this.onCardHeaderClick = props.onCardHeaderClick;

  }

  render() {

    return (<div className="cities__places-list places__list tabs__content">
      {this.offers.map((it, key) => <OfferCard
        offer = {it}
        key = {key}
        onCardHeaderClick = {this.onCardHeaderClick}
      />
      )}
    </div>
    );
  }
}

OfferCardsList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    price: PropTypes.string,
    rate: PropTypes.number,
    src: PropTypes.string,
    premium: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number
  })),
  onCardHeaderClick: PropTypes.func
};

export default OfferCardsList;
