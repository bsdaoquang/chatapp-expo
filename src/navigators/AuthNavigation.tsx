/** @format */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ConfirmVerificationCode } from '../screens';
import HomeLogin from '../screens/auth/HomeLogin';

const AuthNavigation = () => {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name='HomeLogin' component={HomeLogin} />
			<Stack.Screen
				name='ConfirmVerificationCode'
				component={ConfirmVerificationCode}
			/>
		</Stack.Navigator>
	);
};

export default AuthNavigation;
