import { HeaderDesktop } from './header-desktop/HeaderDesktop'
import { HeaderMobile } from './header-mobile/HeaderMobile'
import styles from './header.module.scss'

export const Header = () => {
	return (
		<div className='wrapper'>
			<div className={styles.header}>
				<nav className={styles.nav}>
					<HeaderDesktop />
					<HeaderMobile />
				</nav>
			</div>
		</div>
	)
}
