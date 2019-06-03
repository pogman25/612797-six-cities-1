import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card.jsx';
import offers from '../../mocks/offers.js';

it(`OfferCard correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<OfferCard
    offer={offers[0]}
    key = {0}
    onCardHeaderClick={jest.fn()}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
