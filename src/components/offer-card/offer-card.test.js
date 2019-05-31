import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card.jsx';

it(`OfferCard correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<OfferCard
    offer = {[]}
    key = {0}
    onCardHeaderClick={jest.fn()}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
