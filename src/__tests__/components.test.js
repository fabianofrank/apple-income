import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Details from '../components/details';
import Home from '../components/home';

describe('Test Components', () => {
  test('Home', () => {
    const tree = render(<Provider store={store}><Home /></Provider>);
    expect(tree).toMatchSnapshot();
  });

  test('Details', () => {
    const tree = render(<Provider store={store}><Details /></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
