import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Details from './pages/Details';
import List from './pages/List';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
    },
    Details: {
        screen: Details,
    },
    List: {
        screen: List,
    },
},
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#129e08',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    });

export default Router = createAppContainer(AppNavigator);