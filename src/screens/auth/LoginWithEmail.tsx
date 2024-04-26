/** @format */

import Ionicons from '@expo/vector-icons/build/Ionicons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Container, InputComponent, Section } from '../../components';
import { colors } from '../../constants/colors';
import { auth } from '../../firebase/firebaseConfig';

const LoginWithEmail = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log(userCredential);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Container>
			<Section
				styles={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
				<InputComponent
					affix={<Ionicons name='mail-outline' size={20} color={colors.gray} />}
					value={email}
					keyboardType='email-address'
					clear
					placeholder='email'
					onChange={(val) => setEmail(val)}
					title='Phone number'
				/>
				<InputComponent
					affix={<Ionicons name='mail-outline' size={20} color={colors.gray} />}
					value={password}
					password
					placeholder='password'
					onChange={(val) => setPassword(val)}
					title='Password'
				/>
			</Section>
		</Container>
	);
};

export default LoginWithEmail;
