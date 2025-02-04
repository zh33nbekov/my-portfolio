import { Button } from '@/components'
import { HEADER_LINKS } from '@/constants'
import dynamic from 'next/dynamic'
import { BurgerMenu } from '../../../../public/icons'
import styles from './header-mobile.module.scss'

const Drawer = dynamic(() => import('@/components').then((module) => module.Drawer), {
	ssr: false,
})

interface Props {
	isDrawerVisible: boolean
	onShowDrawer: () => void
	onHideDrawer: () => void
}
export const HeaderMobile: React.FC<Props> = ({ isDrawerVisible, onShowDrawer, onHideDrawer }) => (
	<>
		<button className={styles.list__burger} onClick={onShowDrawer}>
			<BurgerMenu />
		</button>
		<Drawer open={isDrawerVisible} anchor='right' onClose={onHideDrawer}>
			<ul className={styles.list}>
				{HEADER_LINKS.map(({ label, path }) => (
					<li key={label} className={styles.list__item}>
						<Button type='link' href={`#${path}`}>
							{label}
						</Button>
					</li>
				))}
			</ul>
		</Drawer>
	</>
)
