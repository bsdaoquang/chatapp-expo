/** @format */

import { View, Text } from 'react-native';
import React from 'react';

const ChatRoom = ({ navigation, route }: any) => {
	const { conversationId }: { conversationId: string } = route.params;

	return (
		<View>
			<Text>ChatRoom</Text>
		</View>
	);
};

export default ChatRoom;
