/** @format */

import { Ionicons } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, Platform, StatusBar, TouchableOpacity } from 'react-native';
import {
	Avatar,
	ButtonComponent,
	Container,
	Row,
	Section,
	SpaceComponent,
	TextComponent,
	UserComponent,
} from '../../components';
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';
import { auth, fs } from '../../firebase/firebaseConfig';
import { UserModel } from '../../models/UserModel';
import { globalStyles } from '../../styles/globalStyles';

const HomeScreen = () => {
	const [users, setUsers] = useState<UserModel[]>([]);

	useEffect(() => {
		onSnapshot(collection(fs, `users`), (snap) => {
			if (snap.empty) {
				console.log('Data not found');
			} else {
				const items: UserModel[] = [];
				snap.forEach((item: any) => {
					items.push({
						key: item.id,
						...item.data(),
					});
				});

				setUsers(items);
			}
		});
	}, []);

	return (
		<Container>
			<Section
				styles={{
					marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
				}}>
				<Row>
					<Avatar photoUrl='https://i.pinimg.com/236x/85/43/a4/8543a4f149305799fd122e882b3c4a80.jpg' />
					<SpaceComponent width={12} />
					<TextComponent
						text='Hello world!!!'
						type='title'
						size={24}
						styles={{ textTransform: 'capitalize' }}
						font={fontFamilies.medium}
						flex={1}
					/>
					<TouchableOpacity onPress={() => signOut(auth)}>
						<TextComponent text='Logout' />
					</TouchableOpacity>
				</Row>
			</Section>
			<Section>
				<Row>
					<Row
						styles={[
							globalStyles.inputContainer,
							{
								flex: 1,
								justifyContent: 'flex-start',
								paddingHorizontal: 0,
								paddingLeft: 12,
							},
						]}>
						<TextComponent text='Search' flex={1} />
						<ButtonComponent
							color='#565E70'
							icon={<Ionicons name='search' size={24} color={colors.white} />}
							onPress={() => {}}
						/>
					</Row>
					<SpaceComponent width={16} />
					<ButtonComponent
						icon={<Ionicons name='add' color={colors.white} size={24} />}
						onPress={() => {}}
					/>
				</Row>
			</Section>

			{users.length > 0 && (
				<FlatList
					removeClippedSubviews
					showsVerticalScrollIndicator={false}
					data={users}
					renderItem={({ item }) => <UserComponent user={item} />}
				/>
			)}
		</Container>
	);
};

export default HomeScreen;
