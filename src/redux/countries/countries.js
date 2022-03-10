import { date, dateString } from './countryCodes';

const GET_COUNTRIES = 'GET_COUNTRIES';

const getCountries = (payload) => ({
  type: GET_COUNTRIES,
  payload,
});

export const getCountriesFromAPI = () => async (dispatch) => {
  const url = `https://api.covid19tracking.narrativa.com/api/${date}`;
  const req = await fetch(url);
  const res = await req.json();
  const data = Object.values(res.dates[dateString].countries);
  dispatch(getCountries(data));
};

const countries = (state = [], action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default countries;
