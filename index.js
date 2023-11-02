import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { registerRootComponent } from 'expo';
/**
 * @IMPORTANT If you pretend to use the react-native CLI to run the app, uncomment the line below 
 * AppRegistry.registerComponent(appName, () => App);
*/
//-=========================================-//
/**
 * @IMPORTANT If you pretend to use the expo CLI to run the app, uncomment the line below
*/
registerRootComponent(App);
