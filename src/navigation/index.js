import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import HomeBottomNavigator from './homeBottomTabNavigator'

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={
                { headerShown: false }
            }>
                <Stack.Screen name="Search" component={HomeBottomNavigator} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default RootNavigation;