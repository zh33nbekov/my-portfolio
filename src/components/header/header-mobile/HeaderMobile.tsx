import { Drawer } from '@/components'
import { HEADER_LINKS } from '@/constants'
import { BurgerMenu } from '../../../../public/icons'
import styles from './header-mobile.module.scss'

export const HeaderMobile = () => {
	return (
		<ul className={styles.list}>
			<button className={styles.list__burger}>
				<BurgerMenu />
			</button>
			<Drawer open anchor='' onClose={}>
				{HEADER_LINKS.map(({ label, path }) => {
					return <p></p>
				})}
			</Drawer>
		</ul>
	)
}
