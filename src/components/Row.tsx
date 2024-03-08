/** @format */

import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';
import { globalStyles } from '../styles/globalStyles';

interface Props {
	children: ReactNode;
}

const Row = (props: Props) => {
	const { children } = props;
	return (
		<View style={[globalStyles.row, globalStyles.center]}>{children}</View>
	);
};

export default Row;
