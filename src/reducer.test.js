import {ActionCreator, reducer} from './reducer';
import offers from './mocks/offers.js';


describe(`Reducer works correctly`, () => {
  it(`returns initial state without parameters`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: `Amsterdam`,
      offers
    });
  });

  it(`Reducer should change city by a given value`, () => {
    expect(reducer({
      city: `Amsterdam`,
      offers: []
    }, {
      type: `CHANGE_CITY`,
      payload: `New City`,
    })).toEqual({
      city: `New City`,
      offers: []
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city correctly change it`, () => {
    expect(ActionCreator.onCityClick(`Amsterdam`)).toEqual({
      type: `CHANGE_CITY`,
      payload: `Amsterdam`
    });
  });

  it(`Action creator for change places correctly change it`, () => {
    expect(ActionCreator.getOffers()).toEqual({
      type: `GET_OFFERS`,
      payload: offers
    });
  });
});
