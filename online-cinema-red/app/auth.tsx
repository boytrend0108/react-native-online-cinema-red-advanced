import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'

import { router } from 'expo-router'

import Loader from '@/shared/componets/Loader'
import Button from '@/shared/componets/button/Button'
import AuthFields from '@/shared/componets/form-elements/auth-fieds/AuthFields'
import { IAuthFormData } from '@/shared/types/auth.interface'

const Auth = () => {
	const [isReg, setIsReg] = useState(false)

	const { handleSubmit, reset, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const onSubmit = (data: IAuthFormData) => {
		const { email, password } = data
		console.log(data)
		reset()
	}

	const isLoading = false

	return (
		<View className='flex-1 bg-black mx-2 justify-center items-center'>
			<Text className='text-white text-2xl mb-4 font-bold'>
				{isReg ? 'Register' : 'Login'}
			</Text>

			<Pressable onPress={() => router.back()}>
				<Text className='text-white'>Go back</Text>
			</Pressable>

			{isLoading ? (
				<Loader />
			) : (
				<View>
					<AuthFields
						control={control}
						isPassRequired={true}
						className='mb-4'
					/>

					<Button
						icon='film'
						onPress={handleSubmit(onSubmit)}
						className='px-12'
					>
						Go to Movies
					</Button>

					<Pressable
						className='bg-red-500 p-4 rounded-lg mt-4'
						onPress={() => setIsReg(!isReg)}
					>
						<Text className='text-white opacity-30 text-right text-base'>
							{isReg ? 'Register' : 'Login'}
						</Text>
					</Pressable>
				</View>
			)}
		</View>
	)
}

export default Auth
