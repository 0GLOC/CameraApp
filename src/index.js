import AppNavigator from './navigation/index';
import { Provider } from 'react-redux';
import { store } from './store';
import { StatusBar } from 'react-native';
import colors from './utils/colors';

export default function Route() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.four}/>
      <AppNavigator/>
    </Provider>
  )
}
