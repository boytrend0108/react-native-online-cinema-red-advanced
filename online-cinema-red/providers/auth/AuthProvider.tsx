import React, { FC, PropsWithChildren, useEffect } from 'react'

import * as SplashScreen from 'expo-splash-screen'

import { IContext, TypeUserState } from './auth-provider.interface'

SplashScreen.preventAutoHideAsync()

const initialContext: IContext = {
	user: null,
	setUser: () => {}
}

export const AuthContext = React.createContext(initialContext)

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = React.useState<TypeUserState>(null)

	useEffect(() => {
		let isMounted = true

		const checkAccessToken = async () => {
			try {
				console.log('Checking access token...')
				// Simulate some loading time to see the splash screen
				await new Promise(resolve => setTimeout(resolve, 5000))
			} catch {
			} finally {
				await SplashScreen.hideAsync()
			}
		}

		checkAccessToken()

		return () => {
			isMounted = false
		}
	}, [])
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
