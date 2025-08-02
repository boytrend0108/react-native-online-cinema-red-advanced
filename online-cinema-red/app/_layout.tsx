import 'react-native-reanimated'

import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { useAuth } from '@/hooks/useAuth'
import AuthProvider from '@/providers/auth/AuthProvider'

import '../global.css'

export default function RootLayout() {
	const { user } = useAuth()

	return (
		<AuthProvider>
			<Stack initialRouteName={user ? 'home' : 'auth'}>
				<Stack.Screen
					name='home'
					options={{
						headerShown: true,
						contentStyle: { backgroundColor: 'black' }
					}}
				/>

				<Stack.Screen
					name='auth'
					options={{
						headerShown: true,
						contentStyle: { backgroundColor: 'black' }
					}}
				/>
			</Stack>

			<StatusBar style='auto' />
		</AuthProvider>
	)
}
