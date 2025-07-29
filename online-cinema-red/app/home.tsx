import React from 'react'
import { Pressable, Text, View } from 'react-native'

import { router } from 'expo-router'

const Home = () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: '#090909',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<Text>Home</Text>
			<Pressable onPress={() => router.push('/auth')}>
				<Text style={{ color: 'white' }}>Go to login</Text>
			</Pressable>
		</View>
	)
}

export default Home
