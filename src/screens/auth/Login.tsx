/** @format */

import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		console.log(email, password);

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log(userCredential);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<View>
			<TextInput
				value={email}
				onChange={(val) => setEmail(val.nativeEvent.text)}
				placeholder='fafsaf'
			/>
			<TextInput
				value={password}
				onChange={(val) => setPassword(val.nativeEvent.text)}
				placeholder='fafsaf'
			/>
			<Button title='login' onPress={handleLogin} />
		</View>
	);
};

export default Login;
