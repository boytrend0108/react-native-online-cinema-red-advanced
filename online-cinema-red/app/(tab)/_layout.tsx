import React from 'react'

import { Ionicons } from '@expo/vector-icons'

import { Tabs } from 'expo-router'

const TabLayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#ef4444',
				tabBarInactiveTintColor: '#6b7280',
				tabBarStyle: {
					backgroundColor: '#000000',
					borderTopColor: '#1f2937'
				},
				headerStyle: {
					backgroundColor: '#000000'
				},
				headerTintColor: '#ffffff'
			}}
		>
			<Tabs.Screen
				name='home'
				options={{
					title: 'Home',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='home' size={size} color={color} />
					)
				}}
			/>
			<Tabs.Screen
				name='search'
				options={{
					title: 'Search',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='search' size={size} color={color} />
					)
				}}
			/>
			<Tabs.Screen
				name='trending'
				options={{
					title: 'Trending',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='trending-up' size={size} color={color} />
					)
				}}
			/>
			<Tabs.Screen
				name='favorites'
				options={{
					title: 'Favorites',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='heart' size={size} color={color} />
					)
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					title: 'Profile',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='person' size={size} color={color} />
					)
				}}
			/>
			<Tabs.Screen
				name='auth'
				options={{
					href: null // Hide this tab since it's only for unauthenticated users
				}}
			/>
		</Tabs>
	)
}

export default TabLayout
