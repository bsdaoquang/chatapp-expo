/** @format */

import { View, Text, StyleProp, ViewStyle, SafeAreaView } from 'react-native';
import React, { ReactNode } from 'react';
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../constants/colors';

interface Props {
	children: ReactNode;
	styles?: StyleProp<ViewStyle>;
}

const Container = (props: Props) => {
	const { children, styles } = props;

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colors.bgColor }}>
			<View style={[globalStyles.container, {}, styles]}>{children}</View>
		</SafeAreaView>
	);
};

export default Container;
