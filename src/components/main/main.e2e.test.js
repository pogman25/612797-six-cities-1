import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({adapter: new Adapter()});

it(`Main correctly renders after relaunch`, () => {
  const clickHandler = jest.fn();
  const main = shallow(<Main
    places={[]}
    onCardHeaderClick = {clickHandler}
  />);

  const cardHeader = main.find(`.place-card__name--test`);
  cardHeader.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
