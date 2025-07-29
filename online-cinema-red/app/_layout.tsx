import 'react-native-reanimated'

import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
	return (
		<>
			<Stack initialRouteName='home'>
				<Stack.Screen name='home' options={{ headerShown: true }} />
				<Stack.Screen name='auth' options={{ headerShown: true }} />
			</Stack>
			<StatusBar style='auto' />
		</>
	)
}
