'use client'
import { Drawer as MuiDrawer } from '@mui/material'

interface Props {
	children: React.ReactNode
	open: boolean
	onClose: () => void
	anchor?: 'top' | 'right' | 'bottom' | 'left'
}
export const Drawer: React.FC<Props> = ({ children, open, onClose, anchor = 'right' }) => {
	return (
		<MuiDrawer open={open} anchor={anchor} onClose={onClose}>
			{children}
		</MuiDrawer>
	)
}
