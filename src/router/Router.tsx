/** @format */

import { NavigationContainer } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import AuthNavigation from '../navigators/AuthNavigation';
import HomeNavigation from '../navigators/HomeNavigation';

const Router = () => {
	const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setIsLogin(true);
			} else {
				setIsLogin(false);
			}
		});
	}, []);
	return (
		<NavigationContainer>
			{isLogin ? <HomeNavigation /> : <AuthNavigation />}
		</NavigationContainer>
	);
};

export default Router;
