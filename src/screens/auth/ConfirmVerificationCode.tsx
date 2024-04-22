/** @format */

import { View, Text, TextInput } from 'react-native';
import React, { useRef, useState } from 'react';
import {
	ButtonComponent,
	Container,
	InputComponent,
	Row,
	Section,
	TextComponent,
} from '@/components';
import {
	PhoneAuthProvider,
	signInWithCredential,
	signInWithPhoneNumber,
} from 'firebase/auth';
import { auth } from '@/firebase/firebaseConfig';
import { colors } from '@/constants/colors';
import { fontFamilies } from '@/constants/fontFamilies';
import { globalStyles } from '@/styles/globalStyles';

const ConfirmVerificationCode = ({ navigation, route }: any) => {
	const {
		vericationId,
		phoneNumber,
	}: { vericationId: string; phoneNumber: string } = route.params;

	const [isLoading, setIsLoading] = useState(false);
	const [numbersCode, setNumbersCode] = useState<string[]>([]);

	const inpRef1 = useRef<TextInput>();

	const handleVerificationCode = async () => {
		let code = ``;

		if (numbersCode.length === 6) {
			numbersCode.forEach((num) => (code += num));

			try {
				const creadential = PhoneAuthProvider.credential(vericationId, code);
				await signInWithCredential(auth, creadential).then((user) => {
					console.log(user);
				});
			} catch (error) {
				console.log(error);
			}
		} else {
		}
	};

	return (
		<Container back title='Verication'>
			<Section>
				<TextComponent text='Enter the OTP to ' type='title' size={28} />
				<TextComponent text={phoneNumber} />

				<Row
					styles={{
						flex: 1,
						justifyContent: 'space-between',
						marginVertical: 16,
					}}>
					{Array.from({ length: 6 }).map((input, index) => (
						<InputComponent
							value={numbersCode[index]}
							onChange={(val) => {
								const items = [...numbersCode];
								items[index] = val;

								setNumbersCode(items);
							}}
							inputStyles={{
								fontSize: 20,
								color: colors.white,
								textAlign: 'center',
								fontFamily: fontFamilies.bold,
								padding: 0,
							}}
							containerStyle={{
								flex: 1,
								marginRight: index < 5 ? 12 : 0,
								padding: 0,

								// borderWidth: 1,
								// borderColor: colors.white,
								// borderRadius: 8,
							}}
						/>
					))}
				</Row>

				<ButtonComponent text='Verify' onPress={handleVerificationCode} />
			</Section>
		</Container>
	);
};

export default ConfirmVerificationCode;
