/** @format */

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Row, TextComponent } from '.';
import { UserModel } from '../models/UserModel';

interface Props {
	user: UserModel;
}

const UserComponent = (props: Props) => {
	const { user } = props;

	const myKey = 'myKey';

	const handleCreateConversation = () => {
		console.log(user.key);
	};

	return (
		<TouchableOpacity
			onPress={handleCreateConversation}
			style={[
				{
					padding: 12,
					marginBottom: 6,
				},
			]}>
			<Row>
				<TextComponent text={user.name} flex={1} />
			</Row>
			<TextComponent text={user.email} color={`#e0e0e0`} />
		</TouchableOpacity>
	);
};

export default UserComponent;
