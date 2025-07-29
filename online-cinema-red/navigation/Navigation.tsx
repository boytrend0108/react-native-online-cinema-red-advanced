import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TypeRootStackParamList } from './navigation.types'
import { userRoutes } from './user.routes'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const Navigation = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				// headerShown: false,
				contentStyle: { backgroundColor: '#090909' },
				animation: 'slide_from_left'
			}}
		>
			{userRoutes.map(route => (
				<Stack.Screen
					key={route.name}
					name={route.name}
					component={route.component}
				/>
			))}
		</Stack.Navigator>
	)
}

export default Navigation
