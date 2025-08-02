import React from 'react'

import { Stack } from 'expo-router'

import { useAuth } from '@/hooks/useAuth'

import Auth from './(tab)/auth'

const AuthNavigator = () => {
	const { user } = useAuth()

	// If user is not logged in, show auth screen
	if (!user) {
		return <Auth />
	}

	// If user is logged in, show the normal navigation with tabs
	return (
		<Stack>
			<Stack.Screen name='(tab)' options={{ headerShown: false }} />
		</Stack>
	)
}

export default AuthNavigator
