/** @format */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen } from '../screens';

const HomeNavigation = () => {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name='HomeScreen' component={HomeScreen} />
		</Stack.Navigator>
	);
};

export default HomeNavigation;
