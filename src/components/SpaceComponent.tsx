/** @format */

import { View, Text } from 'react-native';
import React from 'react';

const SpaceComponent = ({
	width,
	height,
}: {
	width?: number;
	height?: number;
}) => {
	return (
		<View
			style={{
				width,
				height,
			}}
		/>
	);
};

export default SpaceComponent;
