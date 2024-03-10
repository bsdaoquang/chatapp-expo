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

	button: {
		borderRadius: 8,
		maxHeight: 40,
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
		minWidth: 40,
	},

	inputContainer: {
		borderRadius: 8,
		maxHeight: 40,
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
		minWidth: 40,
		backgroundColor: '#00000040',
		paddingHorizontal: 8,
	},
});
