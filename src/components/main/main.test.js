import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import offers from '../../mocks/offers';

it(`Main correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<Main
    offers={offers}
    onCityClick={jest.fn()}
    cities={[`City1`, `City2`, `City3`]}
    city={`Amsterdam`}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
