/** @format */

import { StatusBar } from 'react-native';
import { HomeScreen } from './src/screens';
import AppLoading from 'expo-app-loading';
import {
	useFonts,
	Roboto_400Regular,
	Roboto_500Medium,
	Roboto_700Bold,
} from '@expo-google-fonts/roboto';

export default function App() {
	let [fontLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_500Medium,
		Roboto_700Bold,
	});

	if (!fontLoaded) {
		return <AppLoading />;
	} else {
		return (
			<>
				<StatusBar hidden />
				<HomeScreen />
			</>
		);
	}
}
