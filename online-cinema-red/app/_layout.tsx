import 'react-native-reanimated'

import { StatusBar } from 'expo-status-bar'

import { AuthProvider } from '@/providers/auth/AuthProvider'

import '../global.css'
import AuthNavigator from './AuthNavigator'

export default function RootLayout() {
	return (
		<AuthProvider>
			<AuthNavigator />
			<StatusBar style='auto' />
		</AuthProvider>
	)
}
