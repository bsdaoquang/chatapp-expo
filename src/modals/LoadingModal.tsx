/** @format */

import { globalStyles } from '@/styles/globalStyles';
import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';

interface Props {
	visible: boolean;
}

const LoadingModal = ({ visible }: Props) => {
	return (
		<Modal
			visible={visible}
			style={[{ flex: 1 }]}
			transparent
			animationType='slide'>
			<View
				style={[globalStyles.modalContainer, globalStyles.center, { flex: 1 }]}>
				<ActivityIndicator color={'white'} />
			</View>
		</Modal>
	);
};

export default LoadingModal;
