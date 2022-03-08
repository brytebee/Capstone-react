const GET_COUNTRY = 'GET_COUNTRY';

const getCountry = (payload) => ({
  type: GET_COUNTRY,
  payload,
});

export const fetchCountryData = (country) => async (dispatch) => {
  const date = new Date().toISOString().split('T')[0];
  const url = `https://api.covid19tracking.narrativa.com/api/${date}/country/${country}`;
  // const dateString = date.toString();
  const req = await fetch(url);
  console.log(req);
  // const res = await req.json();
  // const data = Object.values(res.dates[dateString].countries);
  dispatch(getCountry(req));
};

const country = (state = [], action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return action.payload;
    default:
      return state;
  }
};

export default country;
