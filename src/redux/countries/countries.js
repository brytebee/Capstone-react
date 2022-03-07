const GET_COUNTRIES = 'GET_COUNTRIES';

const getCountries = (payload) => ({
  type: GET_COUNTRIES,
  payload,
});

export const getCountriesFromAPI = () => async (dispatch) => {
  const date = new Date().toISOString().split('T')[0];
  const dateString = date.toString();
  const req = await fetch(
    `https://api.covid19tracking.narrativa.com/api/${date}`,
  );

  const data = await req.json();
  const res = Object.values(data.data.dates[dateString].countries).join();
  console.log(res);
  dispatch(getCountries(res));
};

const countries = (state = [], action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default countries;
