import React from 'react';
import renderer from 'react-test-renderer';
import OfferCardsList from './offer-list.jsx';

it(`OfferCardsList correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<OfferCardsList
    offers= {[]}
    onCardHeaderClick={jest.fn()}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
