import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import offers from '../../mocks/offers.js';

it(`Map correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Map
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
