import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const Loader = () => {
	return (
		<View>
			<ActivityIndicator size='large' color='#bf3335' />
		</View>
	)
}

export default Loader
