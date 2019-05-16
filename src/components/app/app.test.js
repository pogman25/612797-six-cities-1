import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<App
    places = {[]}
    onCardHeaderClick={jest.fn()}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
