import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import FourOhFour from '../pages/FourOhFour';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

afterEach(cleanup);

describe('Snapshot of Covid19STAT component', () => {
  it('Snapshot of the Loader Component', () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Snapshot of the Navbar Component', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Snapshot of the FourOhFour Component', () => {
    const tree = renderer.create(<FourOhFour />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
