import { Drawer } from '@/components'
import { HEADER_LINKS } from '@/constants'
import { BurgerMenu } from '../../../../public/icons'
import styles from './header-mobile.module.scss'

interface Props {
	onShowDrawer: () => void
	onHideDrawer: () => void
}
export const HeaderMobile: React.FC<Props> = ({ onShowDrawer, onHideDrawer }) => (
	<>
		<button className={styles.list__burger} onClick={onShowDrawer}>
			<BurgerMenu />
		</button>
		<ul className={styles.list}>
			<Drawer open anchor='right' onClose={onHideDrawer}>
				{HEADER_LINKS.map(({ label, path }) => (
					<li key={label}>{label}</li>
				))}
			</Drawer>
		</ul>
	</>
)
