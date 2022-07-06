import AppNavigator from './navigation/index';
import { Provider } from 'react-redux';
import { store } from './store';

export default function Route() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  )
}
