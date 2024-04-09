/** @format */

import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {
	ButtonComponent,
	Container,
	InputComponent,
	Row,
	Section,
	SocialLogin,
	SpaceComponent,
	TextComponent,
} from '../../components';
import { globalStyles } from '../../styles/globalStyles';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';

const HomeLogin = () => {
	const [phoneNumber, setPhoneNumber] = useState('');

	return (
		<Container isScroll={false}>
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
				<SocialLogin />
			</Section>
			<Section>
				<ButtonComponent text='Login' onPress={() => {}} />
				<SpaceComponent height={12} />
				<Row>
					<TextComponent text={`Dont't have an account? `} />
					<TouchableOpacity>
						<TextComponent text='Register' color={colors.blue} />
					</TouchableOpacity>
				</Row>
			</Section>
		</Container>
	);
};

export default HomeLogin;
