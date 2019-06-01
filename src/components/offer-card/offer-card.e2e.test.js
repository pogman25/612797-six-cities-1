import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card';

Enzyme.configure({adapter: new Adapter()});

it(`Simulating click to offer card title`, () => {
  const onClick = jest.fn();
  const card = shallow(<OfferCard
    offer={[]}
    key={0}
    onCardHeaderClick={onClick}
  />);
  const cardTitle = card.find(`.place-card__name a`);
  cardTitle.simulate(`click`);
  expect(onClick).toHaveBeenCalledTimes(1);
});
