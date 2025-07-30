import React from 'react'
import { Pressable, Text, View } from 'react-native'

import { router } from 'expo-router'

const Auth = () => {
	return (
		<View className='flex-1 bg-red-500 justify-center items-center'>
			<Text style={{ color: 'white', fontSize: 24, marginBottom: 20 }}>
				Auth
			</Text>
			<Pressable onPress={() => router.back()}>
				<Text style={{ color: 'white', textDecorationLine: 'underline' }}>
					Go back
				</Text>
			</Pressable>
		</View>
	)
}

export default Auth
