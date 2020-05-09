export const LIST_LOADING_INITIATE = 'LIST_LOADING_INITIATE';
export const LIST_LOADING_SUCCESS = 'LIST_LOADING_SUCCESS';
export const LOAD_USERS_FAILED = 'LOAD_USERS_FAILED';

export const loadHolidayList = () => dispatch => {
  dispatch({type: LIST_LOADING_INITIATE});
};
