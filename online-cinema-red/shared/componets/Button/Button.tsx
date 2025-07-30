import React from 'react'
import { Pressable, PressableProps, Text } from 'react-native'

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
		<Pressable className={cn('self-center w-full', className)} {...rest}>
			<LinearGradient
				colors={['#dc3f41', '#a6282b']}
				className='w-full py-3 px-8'
				style={{
					borderRadius: 16,
					display: 'flex',
					flexDirection: icon ? 'row' : 'column',
					alignItems: 'center',
					justifyContent: 'center',
					gap: icon ? 8 : 0,
					paddingBlock: 12,
					paddingHorizontal: 16
				}}
			>
				{icon && <Feather name={icon} size={18} color='#fff' />}
				<Text className='text-white'>{children}</Text>
			</LinearGradient>
		</Pressable>
	)
}

export default Button
