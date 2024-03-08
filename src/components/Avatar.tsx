/** @format */

import { View, Text, Image, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import { globalStyles } from '../styles/globalStyles';

interface Props {
	photoUrl?: string;
	size?: number;
	bordered?: boolean;
	border?: {
		width?: number;
		color?: string;
	};
	styles?: StyleProp<ViewStyle>;
}

const Avatar = (props: Props) => {
	const { photoUrl, size, bordered, border, styles } = props;

	const localStyles: any = [globalStyles.avatar, {}, styles];

	return (
		<View>
			{photoUrl ? (
				<Image style={localStyles} source={{ uri: photoUrl }} />
			) : (
				<View style={localStyles}>
					<TextComponent text='A' />
				</View>
			)}
		</View>
	);
};

export default Avatar;
