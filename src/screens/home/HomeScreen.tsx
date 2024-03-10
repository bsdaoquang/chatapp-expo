/** @format */

import React from 'react';
import {
	Avatar,
	ButtonComponent,
	Container,
	Row,
	Section,
	SpaceComponent,
	TextComponent,
} from '../../components';
import { fontFamilies } from '../../constants/fontFamilies';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { globalStyles } from '../../styles/globalStyles';
import { Platform, StatusBar } from 'react-native';

const HomeScreen = () => {
	return (
		<Container>
			<Section
				styles={{
					marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
				}}>
				<Row>
					<Avatar photoUrl='https://i.pinimg.com/236x/85/43/a4/8543a4f149305799fd122e882b3c4a80.jpg' />
					<SpaceComponent width={12} />
					<TextComponent
						text='Hello world!!!'
						type='title'
						size={24}
						styles={{ textTransform: 'capitalize' }}
						font={fontFamilies.medium}
						flex={1}
					/>
				</Row>
			</Section>
			<Section>
				<Row>
					<Row
						styles={[
							globalStyles.inputContainer,
							{
								flex: 1,
								justifyContent: 'flex-start',
								paddingHorizontal: 0,
								paddingLeft: 12,
							},
						]}>
						<TextComponent text='Search' flex={1} />
						<ButtonComponent
							color='#565E70'
							icon={<Ionicons name='search' size={24} color={colors.white} />}
							onPress={() => {}}
						/>
					</Row>
					<SpaceComponent width={16} />
					<ButtonComponent
						icon={<Ionicons name='add' color={colors.white} size={24} />}
						onPress={() => {}}
					/>
				</Row>
			</Section>
		</Container>
	);
};

export default HomeScreen;
