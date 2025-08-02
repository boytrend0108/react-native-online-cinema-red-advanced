import React, { FC } from 'react'
import { Control } from 'react-hook-form'
import { View, ViewProps } from 'react-native'

import { IAuthFormData } from '@/shared/types/auth.interface'

import Field from '../field/Field'

interface Props extends ViewProps {
	control: Control<IAuthFormData>
	isPassRequired?: boolean
}

const AuthFields: FC<Props> = ({ control, isPassRequired, style, ...rest }) => {
	return (
		<View style={[{ flexDirection: 'column', gap: 8 }, style]} {...rest}>
			<Field
				control={control}
				name='email'
				placeholder='Email'
				rules={{
					required: 'Email is required',
					pattern: {
						value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
						message: 'Invalid email address'
					}
				}}
				keyboardType='email-address'
			/>

			<Field
				control={control}
				name='password'
				placeholder='Password'
				secureTextEntry
				rules={
					isPassRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Password must be at least 6 characters long'
								}
							}
						: {}
				}
			/>
		</View>
	)
}
;``
export default AuthFields
