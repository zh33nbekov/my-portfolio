'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import styles from './tooltip.module.scss'

interface TooltipProps {
	title: string
	children: React.ReactNode
}

export const Tooltip: React.FC<TooltipProps> = ({ children, title }) => {
	const [visible, setVisible] = useState(false)
	const tTooltip = useTranslations('Tooltips')

	return (
		<div
			className={styles.tooltip}
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
		>
			{children}
			{visible && <div className={styles.tooltip__content}>{tTooltip(title)}</div>}
		</div>
	)
}
