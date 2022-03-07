const GET_COUNTRIES = 'GET_COUNTRIES';

const getCountries = (payload) => ({
  type: GET_COUNTRIES,
  payload,
});

export const getCountriesFromAPI = () => async (dispatch) => {
  const date = new Date().toISOString().split('T')[0];
  const url = `https://api.covid19tracking.narrativa.com/api/${date}`;
  const dateString = date.toString();
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
