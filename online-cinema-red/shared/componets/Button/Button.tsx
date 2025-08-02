import React from 'react'
import { Pressable, PressableProps, Text, View } from 'react-native'

import { Feather } from '@expo/vector-icons'

import { LinearGradient } from 'expo-linear-gradient'

import cn from 'clsx'

import { TypeFeatherIconName } from '@/shared/types/icon.types'

interface Props extends PressableProps {
	className?: string
	icon?: TypeFeatherIconName
	children: React.ReactNode
	onPress: () => void
}

const Button: React.FC<Props> = ({ className, icon, children, ...rest }) => {
	return (
		<Pressable className={cn('w-full border rounded-lg', className)} {...rest}>
			<LinearGradient
				colors={['#dc3f41', '#a6282b']}
				style={{
					width: '100%',
					paddingVertical: 12,
					paddingHorizontal: 32,
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: 8
				}}
			>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					{icon && (
						<Feather
							name={icon}
							size={18}
							color='#fff'
							style={{ marginRight: 8 }}
						/>
					)}
					<Text className='text-white'>{children}</Text>
				</View>
			</LinearGradient>
		</Pressable>
	)
}

export default Button
