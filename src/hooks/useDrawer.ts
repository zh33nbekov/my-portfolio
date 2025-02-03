import { useState } from 'react'

export const useDrawer = () => {
	const [isDrawerVisible, setDrawerVisible] = useState(false)
	const showDrawer = () => {
		return setDrawerVisible(true)
	}
	const hideDrawer = () => {
		return setDrawerVisible(false)
	}

	return {
		isDrawerVisible,
		showDrawer,
		hideDrawer,
	}
}
