import {HOME_INITIATE} from '../constants/index';

const initialState = {
  loader: false,
};

export function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case HOME_INITIATE: {
      return {
        ...state,
        loading: true,
      };
    }

    default:
      return state;
  }
}
