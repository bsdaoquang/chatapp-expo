/** @format */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Row from './Row';
import SpaceComponent from './SpaceComponent';
import TextComponent from './TextComponent';

interface Props {
	text?: string;
	placement?: 'center' | 'left' | 'right';
}

const Divider = (props: Props) => {
	const { text, placement } = props;

	return (
		<Row>
			{/* {
        !placement || placement === 'left'
      } */}
			<View style={[styles.line]} />
			<SpaceComponent width={12} />
			{text && <TextComponent text={text} />}
			<SpaceComponent width={12} />
			<View style={[styles.line]} />
		</Row>
	);
};

export default Divider;

const styles = StyleSheet.create({
	line: {
		height: 0.5,
		flex: 1,
		backgroundColor: `#e0e0e0e6`,
	},
});
