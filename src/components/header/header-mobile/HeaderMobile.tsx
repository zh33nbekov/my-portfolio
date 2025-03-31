'use client'

import { Tooltip } from '@/components'
import { Button } from '@/components/UI'
import { HEADER_LINKS } from '@/constants'
import { useTranslations } from 'next-intl'
import { BurgerMenu } from '../../../../public/icons'
import styles from './header-mobile.module.scss'

interface Props {
	isDrawerVisible: boolean
	onShowDrawer: () => void
	onHideDrawer: () => void
}
const Div = (
	<div>
		<h1>Hello</h1>
	</div>
)

export const HeaderMobile: React.FC<Props> = () => {
	const tHeader = useTranslations('Header')

	return (
		<>
			<div className={styles.headerMobile}>
				<Tooltip title='Burger'>
					<button
						className={styles.headerMobile__burger}
						id='burger-menu'
						aria-label='burger-menu'
					>
						<BurgerMenu />
					</button>
				</Tooltip>
			</div>
			<ul className={styles.list}>
				{HEADER_LINKS.map(({ label, path }) => (
					<li key={label} className={styles.list__item}>
						<Button type='link' href={`#${path}`}>
							{tHeader(label)}
						</Button>
					</li>
				))}
			</ul>
		</>
	)
}
