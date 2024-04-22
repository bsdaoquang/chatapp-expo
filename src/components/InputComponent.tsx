/** @format */

import {
	View,
	Text,
	StyleProp,
	ViewStyle,
	TextStyle,
	TextInput,
	TouchableOpacity,
	KeyboardType,
} from 'react-native';
import React, { ReactNode, useState } from 'react';
import TextComponent from './TextComponent';
import { colors } from '../constants/colors';
import { globalStyles } from '../styles/globalStyles';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import Octicons from '@expo/vector-icons/build/Octicons';
import Row from './Row';

interface Props {
	value: string;
	onChange: (val: string) => void;
	affix?: ReactNode;
	containerStyle?: StyleProp<ViewStyle>;
	inputStyles?: StyleProp<TextStyle>;
	placeholder?: string;
	title?: string;
	clear?: boolean;
	password?: boolean;
	keyboardType?: KeyboardType;
	helpText?: string;
}

const InputComponent = (props: Props) => {
	const {
		value,
		onChange,
		affix,
		containerStyle,
		inputStyles,
		placeholder,
		title,
		clear,
		password,
		keyboardType,
		helpText,
	} = props;

	const [isShowPass, setIsShowPass] = useState(password ? true : false);

	return (
		<View style={[globalStyles.inputContainer, {}, containerStyle]}>
			{title && <TextComponent text={title} />}

			<Row
				styles={[
					globalStyles.inputContent,
					{ marginTop: title ? 6 : 0, marginBottom: helpText ? 6 : 0 },
				]}>
				{affix && affix}
				<TextInput
					autoCapitalize='none'
					placeholder={placeholder}
					placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
					style={[
						globalStyles.input,
						globalStyles.text,
						{ paddingLeft: affix ? 8 : 0 },
						inputStyles,
					]}
					value={value}
					onChangeText={(val) => onChange(val)}
					keyboardType={keyboardType}
					secureTextEntry={isShowPass}
				/>

				{value && clear && (
					<TouchableOpacity onPress={() => onChange('')}>
						<AntDesign
							name='close'
							size={20}
							color={'rgba(255, 255, 255, 0.6)'}
						/>
					</TouchableOpacity>
				)}

				{password && (
					<TouchableOpacity onPress={() => setIsShowPass(!isShowPass)}>
						<Octicons
							name={isShowPass ? 'eye-closed' : 'eye'}
							size={20}
							color={'rgba(255, 255, 255, 0.6)'}
						/>
					</TouchableOpacity>
				)}
			</Row>

			{helpText && <TextComponent text={helpText} color={colors.danger} />}
		</View>
	);
};

export default InputComponent;
