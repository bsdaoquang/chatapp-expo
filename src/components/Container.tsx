/** @format */

import { View, Text, StyleProp, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { globalStyles } from '../styles/globalStyles';

interface Props {
	children: ReactNode;
	styles?: StyleProp<ViewStyle>;
}

const Container = (props: Props) => {
	const { children, styles } = props;

	return <View style={[globalStyles.container, {}, styles]}>{children}</View>;
};

export default Container;
