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
		maxHeight: 48,
		justifyContent: 'center',
		alignItems: 'center',
		height: 48,
		minWidth: 40,
	},

	inputContainer: {
		marginBottom: 16,
		marginTop: 8,
		width: '100%',
	},

	inputContent: {
		borderRadius: 8,
		maxHeight: 48,
		justifyContent: 'center',
		alignItems: 'center',
		height: 48,
		minWidth: 40,
		backgroundColor: '#00000040',
		paddingHorizontal: 12,
	},
	input: {
		margin: 0,
		padding: 0,
		flex: 1,
		justifyContent: 'flex-start',
	},
	modalContainer: {
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
});
