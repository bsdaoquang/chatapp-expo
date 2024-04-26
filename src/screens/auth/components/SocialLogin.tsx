/** @format */

import { ButtonComponent, Divider, Section } from '@/components';
import { colors } from '@/constants/colors';
import { LoadingModal } from '@/modals';
import React, { useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as GoogleSignIn from 'expo-auth-session/providers/google';
import { clienIds } from '@/constants/appInfos';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '@/firebase/firebaseConfig';

WebBrowser.maybeCompleteAuthSession();

const SocialLogin = () => {
	const [isLoading, setIsLoading] = useState(false);

	const [request, response, promptAsync] = GoogleSignIn.useIdTokenAuthRequest({
		clientId: clienIds.clienId,
	});

	useEffect(() => {
		console.log(response);
		if (response?.type === 'success') {
			const { id_token } = response.params;
			const credential = GoogleAuthProvider.credential(id_token);
			signInWithCredential(auth, credential)
				.then((res) => {
					console.log(res);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [response]);

	const handleLoginWithGoogle = async () => {};

	return (
		<>
			<Section styles={{ flex: 1 }}>
				<Divider placement='center' text='Or' />
				<ButtonComponent
					text='Google'
					onPress={() => promptAsync()}
					styles={{ marginVertical: 12 }}
					textStyles={{ color: colors.white }}
					color='#e74c3c'
				/>
				<ButtonComponent
					text='Facebook'
					onPress={() => {}}
					textStyles={{ color: colors.white }}
					color='#2980b9'
				/>
			</Section>

			<LoadingModal visible={isLoading} />
		</>
	);
};

export default SocialLogin;
