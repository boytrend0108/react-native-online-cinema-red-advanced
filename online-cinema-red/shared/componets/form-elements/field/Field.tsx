import React from 'react'
import {
	Control,
	Controller,
	FieldPath,
	FieldValues,
	RegisterOptions
} from 'react-hook-form'
import { Text, TextInput, TextInputProps, View } from 'react-native'

import cn from 'clsx'

export interface IField<T extends FieldValues>
	extends Omit<TextInputProps, 'onChange' | 'onChangeText' | 'value'> {
	control: Control<T>
	name: FieldPath<T>
	placeholder?: string
	rules?: Omit<
		RegisterOptions<T, FieldPath<T>>,
		'valueAsNumber' | 'setValueAs' | 'disabled' | 'valueAsDate'
	>
}

const Field: React.FC<IField<any>> = ({
	control,
	name,
	placeholder,
	rules,
	...rest
}) => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { onChange, onBlur, value, ref },
				fieldState: { error }
			}) => (
				<View
					className={cn(
						'bg-gray rounded-md p-2 border pb-2 pt-2.5 border-gray-500',
						{
							'border-red': error
						}
					)}
				>
					<TextInput
						autoCapitalize='none'
						onChangeText={onChange}
						onBlur={onBlur}
						value={(value || '').toString()}
						ref={ref}
						className='text-white'
						placeholder={placeholder}
						placeholderTextColor='red'
						{...rest}
					/>
					{error && <Text className='text-red'>{error.message}</Text>}
				</View>
			)}
		/>
	)
}

export default Field
