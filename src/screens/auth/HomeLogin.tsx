/** @format */

import { Ionicons } from '@expo/vector-icons';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { PhoneAuthProvider } from 'firebase/auth';
import React, { useRef, useState } from 'react';

import { colors } from '@/constants/colors';
import { fontFamilies } from '@/constants/fontFamilies';
import { auth, firebaseConfig } from '@/firebase/firebaseConfig';
import { globalStyles } from '@/styles/globalStyles';
import Container from '@/components/Container';
import Section from '@/components/Section';
import TextComponent from '@/components/TextComponent';
import InputComponent from '@/components/InputComponent';
import ButtonComponent from '@/components/ButtonComponent';
import { LoadingModal } from '@/modals';
import { Row, SpaceComponent } from '@/components';
import { View } from 'react-native';

const HomeLogin = ({ navigation }: any) => {
	const [phoneNumber, setPhoneNumber] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [errorText, setErrorText] = useState('');

	const recaptchaVerifier = useRef<any>(null);

	const handleLoginWithPhone = async () => {
		// setIsLoading(true);
		try {
			const provider = new PhoneAuthProvider(auth);

			const vericationId = await provider.verifyPhoneNumber(
				`+84${phoneNumber}`,
				recaptchaVerifier.current
			);

			navigation.navigate('ConfirmVerificationCode', {
				vericationId,
				phoneNumber: `+84${phoneNumber}`,
			});
		} catch (error: any) {
			console.log(error);
			setErrorText(error.message);
			setIsLoading(false);
		}
	};

	return (
		<Container isScroll={false}>
			<FirebaseRecaptchaVerifierModal
				ref={recaptchaVerifier}
				firebaseConfig={firebaseConfig}
			/>
			<Section styles={[globalStyles.center, { paddingTop: '15%' }]}>
				<TextComponent
					text='Login'
					type='title'
					size={48}
					font={fontFamilies.medium}
				/>
			</Section>
			<Section styles={[globalStyles.center, { flex: 1 }]}>
				<Row>
					<View style={{ flex: 1 }}>
						<InputComponent
							title=' '
							value='+84'
							onChange={(val) => console.log(val)}
						/>
					</View>
					<SpaceComponent width={12} />
					<View style={{ flex: 4 }}>
						<InputComponent
							value={phoneNumber}
							onChange={(val) => setPhoneNumber(val)}
							placeholder='Phone number'
							title='Phone number'
							affix={<Ionicons name='call' size={18} color={colors.gray} />}
							clear
							keyboardType='phone-pad'
						/>
					</View>
				</Row>

				{errorText && <TextComponent text={errorText} color={colors.danger} />}
			</Section>
			<Section>
				<ButtonComponent text='Login' onPress={handleLoginWithPhone} />
			</Section>

			<LoadingModal visible={isLoading} />
		</Container>
	);
};

export default HomeLogin;
