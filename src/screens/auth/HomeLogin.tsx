/** @format */

import { Ionicons } from '@expo/vector-icons';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import {
	ButtonComponent,
	Container,
	InputComponent,
	Section,
	TextComponent,
} from '../../components';
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';
import { auth, firebaseConfig } from '../../firebase/firebaseConfig';
import { globalStyles } from '../../styles/globalStyles';
import { TouchableOpacity } from 'react-native';

const HomeLogin = () => {
	const [phoneNumber, setPhoneNumber] = useState('328323686');
	const [vericationId, setVericationId] = useState('');

	const recaptchaVerifier = useRef<any>(null);

	const handleLoginWithPhone = async () => {
		try {
			const provider = new PhoneAuthProvider(auth);
			const vericationId = await provider.verifyPhoneNumber(
				`+84${phoneNumber}`,
				recaptchaVerifier.current
			);

			setVericationId(vericationId);
		} catch (error) {
			console.log(error);
		}
	};

	const confirmcode = async () => {
		try {
			const credential = PhoneAuthProvider.credential(vericationId, '123456');

			await signInWithCredential(auth, credential).then((user) =>
				console.log(user)
			);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container isScroll={false}>
			<FirebaseRecaptchaVerifierModal
				ref={recaptchaVerifier}
				firebaseConfig={firebaseConfig}
			/>

			<TouchableOpacity onPress={confirmcode}>
				<TextComponent text='login' />
			</TouchableOpacity>
			<Section styles={[globalStyles.center, { paddingTop: '15%' }]}>
				<TextComponent
					text='Login'
					type='title'
					size={48}
					font={fontFamilies.medium}
				/>
			</Section>
			<Section styles={[globalStyles.center, { flex: 1 }]}>
				<InputComponent
					value={phoneNumber}
					onChange={(val) => setPhoneNumber(val)}
					placeholder='Phone number'
					title='Phone number'
					affix={<Ionicons name='call' size={18} color={colors.gray} />}
					clear
					keyboardType='phone-pad'
				/>
			</Section>
			<Section>
				<ButtonComponent text='Login' onPress={handleLoginWithPhone} />
			</Section>
		</Container>
	);
};

export default HomeLogin;
