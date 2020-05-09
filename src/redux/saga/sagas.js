import { LIST_LOADING_INITIATE, LIST_LOADING_SUCCESS, LOAD_USERS_FAILED} from "../actions/homeActions";
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

// import Apisauce from '../api';

async function fetchAsync(func) {  
    const response = await func();
   if (response.ok) {       return await response.json();   }
   throw new Error("Unexpected error!!!")
}

function* fetchHolidaysList() { 
    try {
        const users = yield fetchAsync(Api.getUsers);
       yield put({type: LOAD_USERS_SUCCESS, data: users});  
    } catch (e) {
        yield put({type: LOAD_USERS_ERROR, error: e.message});
    }}
    
    export function* fetchDataSource() {   // Allows concurrent fetches of users   
        yield takeEvery(LOAD_USERS_LOADING, fetchUser);    
    export default usersSaga;