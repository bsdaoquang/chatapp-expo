/** @format */

import {
	ButtonComponent,
	Container,
	InputComponent,
	Row,
	Section,
	TextComponent,
} from '@/components';
import { colors } from '@/constants/colors';
import { fontFamilies } from '@/constants/fontFamilies';
import { auth } from '@/firebase/firebaseConfig';
import { globalStyles } from '@/styles/globalStyles';
import { PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import {
	Dimensions,
	StyleSheet,
	TextInput,
	TextInputProps,
} from 'react-native';

const ConfirmVerificationCode = ({ navigation, route }: any) => {
	const {
		vericationId,
		phoneNumber,
	}: { vericationId: string; phoneNumber: string } = route.params;

	const [isLoading, setIsLoading] = useState(false);
	const [numbersCode, setNumbersCode] = useState<string[]>([]);

	const inpRef1 = useRef<any>();
	const inpRef2 = useRef<any>();
	const inpRef3 = useRef<any>();
	const inpRef4 = useRef<any>();
	const inpRef5 = useRef<any>();
	const inpRef6 = useRef<any>();

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

	const handleChangeCode = (index: number, val: string) => {
		const items = [...numbersCode];
		items[index] = val;

		setNumbersCode(items);
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
					<TextInput
						maxLength={1}
						ref={inpRef1}
						style={[globalStyles.inputContent, styles.input]}
						value={numbersCode[0]}
						onChangeText={(val) => {
							handleChangeCode(0, val);
							val && inpRef2.current?.focus();
						}}
						onSubmitEditing={() => inpRef2.current?.focus()}
					/>
					<TextInput
						maxLength={1}
						ref={inpRef2}
						style={[globalStyles.inputContent, styles.input]}
						value={numbersCode[1]}
						onChangeText={(val) => {
							handleChangeCode(1, val);
							val && inpRef3.current?.focus();
						}}
						onSubmitEditing={() => inpRef3.current?.focus()}
					/>
					<TextInput
						ref={inpRef3}
						maxLength={1}
						style={[globalStyles.inputContent, styles.input]}
						value={numbersCode[2]}
						onChangeText={(val) => {
							handleChangeCode(2, val);
							val && inpRef4.current?.focus();
						}}
						onSubmitEditing={() => inpRef4.current?.focus()}
					/>
					<TextInput
						ref={inpRef4}
						maxLength={1}
						style={[globalStyles.inputContent, styles.input]}
						value={numbersCode[3]}
						onChangeText={(val) => {
							handleChangeCode(3, val);
							val && inpRef5.current?.focus();
						}}
						onSubmitEditing={() => inpRef5.current?.focus()}
					/>
					<TextInput
						maxLength={1}
						ref={inpRef5}
						style={[globalStyles.inputContent, styles.input]}
						value={numbersCode[4]}
						onChangeText={(val) => {
							handleChangeCode(4, val);
							val && inpRef6.current?.focus();
						}}
						onSubmitEditing={() => inpRef6.current?.focus()}
					/>
					<TextInput
						ref={inpRef6}
						maxLength={1}
						style={[globalStyles.inputContent, styles.input]}
						value={numbersCode[5]}
						onChangeText={(val) => handleChangeCode(5, val)}
					/>
				</Row>

				<ButtonComponent text='Verify' onPress={handleVerificationCode} />
			</Section>
		</Container>
	);
};

export default ConfirmVerificationCode;

const styles = StyleSheet.create({
	input: {
		flex: 1,
		color: colors.white,
		fontSize: 20,
		fontFamily: fontFamilies.bold,
		marginHorizontal: 6,
		textAlign: 'center',
	},
});
