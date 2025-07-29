import React from 'react'
import { StatusBar, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigation from '@/navigation/Navigation'

const App = () => {
	return (
		<SafeAreaProvider>
			<View style={{ flex: 1 }}>
				<Navigation />
				<StatusBar hidden />
			</View>
		</SafeAreaProvider>
	)
}

export default App
