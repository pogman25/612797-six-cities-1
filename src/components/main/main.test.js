import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

it(`Main correctly renders after relaunch`, () => {
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
  .create(<Main
    offers = {[]}
    onCardHeaderClick={jest.fn()}
    leaflet = {leaflet}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
