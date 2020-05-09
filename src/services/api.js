import { API_KEY } from '../../configurations/environment/env.json';


const setHeaderWithToken = (token) => {
  if (token) {
    this.api.setHeader('Authorization', 'Bearer ' + token)
  }
}


const getHolidayList='/Documents/Download/'

export default {
  getHolidayList

}