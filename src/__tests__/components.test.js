import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
 useNavigate: () => mockedUsedNavigate,
}));

afterEach(cleanup);

describe('Snapshot of Covid19STAT component', () => {
  it('Renders the Loader Component', () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders the Navbar Component', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
