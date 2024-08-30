import {
    AnimatedTabBarNavigator,
    DotSize,
    TabElementDisplayOptions,
    TabButtonLayout,
    IAppearanceOptions
} from 'react-native-animated-nav-tab-bar'


import Icon from 'react-native-vector-icons/Feather';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import SavedScreen from '../screens/SavedScreen';

const Tabs = AnimatedTabBarNavigator();


const BottomTab = () => {
    return (
        <Tabs.Navigator
            appearance={{
                floating: true,
                tabBarBackground: 'black',
                activeTabBackgrounds: '#4CAF50'
            }}
            tabBarOptions={{
                activeTintColor: "#000",
                inactiveTintColor: "#fff"
            }}
        >
            <Tabs.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }: any) => (
                        <Icon
                            name="home"
                            size={size ? size : 24}
                            color={focused ? color : "#fff"}
                        />
                    )
                }}
            />

            <Tabs.Screen
                name="Saved"
                component={SavedScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }: any) => (
                        <Icon
                            name="bookmark"
                            size={size ? size : 24}
                            color={focused ? color : "#fff"}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="About"
                component={AboutScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }: any) => (
                        <Icon
                            name="user"
                            size={size ? size : 24}
                            color={focused ? color : "#fff"}
                        />
                    )
                }}
            />
        </Tabs.Navigator>
    )
}

export default BottomTab;


