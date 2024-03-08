/** @format */

import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.bgColor,
	},
	text: {
		color: colors.white,
		fontSize: 14,
		fontFamily: fontFamilies.regular,
	},
	section: {
		marginHorizontal: 16,
		marginBottom: 20,
		paddingVertical: 16,
	},
	row: {
		flexDirection: 'row',
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	avatar: {
		width: 45,
		height: 45,
		borderRadius: 50,
	},
});
