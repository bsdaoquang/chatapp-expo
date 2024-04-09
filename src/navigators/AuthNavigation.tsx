/** @format */

import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginWithEmail } from '../screens';
import HomeLogin from '../screens/auth/HomeLogin';

const AuthNavigation = () => {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name='HomeLogin' component={HomeLogin} />
		</Stack.Navigator>
	);
};

export default AuthNavigation;
