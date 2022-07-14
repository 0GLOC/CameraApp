import AppNavigator from './navigation/index';
import { Provider } from 'react-redux';
import { store } from './store';
import { init } from './db/index.js'
import { StatusBar } from 'react-native';
import colors from './utils/colors';

init()
  .then(() => {
    console.log("DB initialized");
  })
  .catch((err) => {
    console.log(err);
});

export default function Route() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.four}/>
      <AppNavigator/>
    </Provider>
  )
}
