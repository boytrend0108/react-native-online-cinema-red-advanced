import React from 'react'
import { Pressable, Text, View } from 'react-native'

import { useAuth } from '@/hooks/useAuth'

const Profile = () => {
	const { user, setUser } = useAuth()

	const handleLogout = () => {
		setUser(null)
	}

	return (
		<View className='flex-1 bg-black p-4'>
			<Text className='text-white text-2xl mb-4'>Profile</Text>

			{user && (
				<View className='mb-6'>
					<Text className='text-white mb-2'>Email: {user.email}</Text>
					<Text className='text-white mb-2'>
						Admin: {user.isAdmin ? 'Yes' : 'No'}
					</Text>
				</View>
			)}

			<Pressable className='bg-red-500 p-4 rounded-lg' onPress={handleLogout}>
				<Text className='text-white text-center font-bold'>Logout</Text>
			</Pressable>
		</View>
	)
}

export default Profile
