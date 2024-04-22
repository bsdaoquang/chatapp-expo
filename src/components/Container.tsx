/** @format */

import {
	View,
	Text,
	StyleProp,
	ViewStyle,
	SafeAreaView,
	ScrollView,
	Dimensions,
} from 'react-native';
import React, { ReactNode } from 'react';
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../constants/colors';
import Row from './Row';
import { FontAwesome } from '@expo/vector-icons';
import ButtonComponent from './ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import TextComponent from './TextComponent';
import { fontFamilies } from '@/constants/fontFamilies';

interface Props {
	children: ReactNode;
	styles?: StyleProp<ViewStyle>;
	isScroll?: boolean;
	title?: string;
	back?: boolean;
	right?: ReactNode;
}

const Container = (props: Props) => {
	const { children, styles, isScroll, title, back, right } = props;

	const navigation = useNavigation();

	const renderHearder = () => {
		return title || back || right ? (
			<Row
				styles={{
					paddingHorizontal: 16,
					paddingVertical: 12,
				}}>
				{back && (
					<ButtonComponent
						type='text'
						icon={
							<FontAwesome name='angle-left' size={32} color={colors.white} />
						}
						onPress={() => navigation.goBack()}
					/>
				)}
				<View
					style={{
						flex: 1,
						alignItems: 'center',
					}}>
					{title && (
						<TextComponent text={title} font={fontFamilies.medium} size={16} />
					)}
				</View>
			</Row>
		) : (
			<></>
		);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colors.bgColor }}>
			{isScroll === false ? (
				<View style={[globalStyles.container, {}, styles]}>
					{renderHearder()}
					{children}
				</View>
			) : (
				<View style={{ flex: 1 }}>
					{renderHearder()}
					<ScrollView
						showsVerticalScrollIndicator={false}
						style={[
							globalStyles.container,
							{
								flexGrow: 1,
							},
							styles,
						]}>
						{children}
					</ScrollView>
				</View>
			)}
		</SafeAreaView>
	);
};

export default Container;
