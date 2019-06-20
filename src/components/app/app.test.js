import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import offers from '../../mocks/offers';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<App
    offers={offers}
    onCityClick={jest.fn()}
    cities={[`City1`, `City2`, `City3`]}
    city={`Amsterdam`}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
