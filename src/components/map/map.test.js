import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import offers from '../../mocks/offers.js';

it(`Map correctly renders after relaunch`, () => {
  const leaflet = {
    map() {
      return {
        setView: jest.fn(),
      };
    },
    icon: jest.fn(),
    tileLayer() {
      return {
        addTo: jest.fn(),
      };
    },
    marker() {
      return {
        addTo: jest.fn(),
      };
    },
  };

  const tree = renderer
    .create(<Map
      offers={offers[0]}
      leaflet={leaflet}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
