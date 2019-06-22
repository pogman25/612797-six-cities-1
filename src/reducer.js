import offers from './mocks/offers.js';

const initialState = {
  city: `Amsterdam`,
  offers
};


const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`
};

const ActionCreator = {
  onCityClick: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),

  getOffers: () => ({
    type: ActionType.GET_OFFERS,
    payload: offers
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload
      });

    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
      });
  }

  return state;
};


export {
  ActionCreator,
  reducer
};
