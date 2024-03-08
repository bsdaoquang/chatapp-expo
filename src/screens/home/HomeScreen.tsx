/** @format */

import React from 'react';
import {
	Avatar,
	Container,
	Row,
	Section,
	SpaceComponent,
	TextComponent,
} from '../../components';

const HomeScreen = () => {
	return (
		<Container>
			<Section>
				<Row>
					<Avatar photoUrl='https://i.pinimg.com/236x/85/43/a4/8543a4f149305799fd122e882b3c4a80.jpg' />
					<SpaceComponent width={12} />
					<TextComponent
						text='Hello world!!!'
						type='title'
						size={24}
						styles={{ textTransform: 'uppercase' }}
						flex={1}
					/>
				</Row>
			</Section>
		</Container>
	);
};

export default HomeScreen;
