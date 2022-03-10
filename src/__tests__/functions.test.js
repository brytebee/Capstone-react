import countryMapSrc, { CountryCode } from "../redux/countries/countryCodes"

describe('Test the functions used', () => {
  it('Returns the correct URL to pics', () => {
    const country = 'Nigeria';
    const result = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/ng/vector.svg';

    expect(countryMapSrc(country)).toBe(result);
  })
  it('Returns the correct URL to pics', () => {
    const country = 'Albania';
    const result = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/al/vector.svg';

    expect(countryMapSrc(country)).toBe(result);
  })
  it('Returns the correct URL to pics', () => {
    const country = 'China';
    const result = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/cn/vector.svg';

    expect(countryMapSrc(country)).toBe(result);
  })
  it('Returns the correct URL to pics', () => {
    const country = 'Ethiopia';
    const result = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/et/vector.svg';

    expect(countryMapSrc(country)).toBe(result);
  })
  it('Returns the correct URL to pics', () => {
    const country = 'Greece';
    const result = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/gr/vector.svg';

    expect(countryMapSrc(country)).toBe(result);
  })
  it('Returns the correct URL to pics', () => {
    const country = `Korea, Democratic People's Republic of`;
    const result = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/kp/vector.svg';

    expect(countryMapSrc(country)).toBe(result);
  })
  it('Returns the correct URL to pics', () => {
    const country = 'Mongolia';
    const result = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/mn/vector.svg';

    expect(countryMapSrc(country)).toBe(result);
  })
  it('Returns the correct URL to pics', () => {
    const country = 'Rwanda';
    const result = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/rw/vector.svg';

    expect(countryMapSrc(country)).toBe(result);
  })
  it('Returns the correct URL to pics', () => {
    const country = `Saint Vincent and the Grenadines`;
    const result = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/vc/vector.svg';

    expect(countryMapSrc(country)).toBe(result);
  })
})