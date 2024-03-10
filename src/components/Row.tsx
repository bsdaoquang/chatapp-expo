/** @format */

import {
	View,
	Text,
	TouchableOpacity,
	StyleProp,
	ViewStyle,
} from 'react-native';
import React, { ReactNode } from 'react';
import { globalStyles } from '../styles/globalStyles';

interface Props {
	children: ReactNode;
	onPress?: () => void;
	styles?: StyleProp<ViewStyle>;
}

const Row = (props: Props) => {
	const { children, onPress, styles } = props;

	const localStyles = [globalStyles.row, globalStyles.center, {}, styles];

	return onPress ? (
		<TouchableOpacity onPress={onPress} style={localStyles}>
			{children}
		</TouchableOpacity>
	) : (
		<View style={localStyles}>{children}</View>
	);
};

export default Row;
