
import React from 'react';
import renderer from 'react-test-renderer';

import AllCities from './all-cities.jsx';


it(`AlCities correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<AllCities
      onCityClick={jest.fn()}
      cities={[`Amsterdam`, `Amsterdam2`]}
      city={`Amsterdam`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
