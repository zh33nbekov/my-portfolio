import { HEADER_LINKS } from '@/constants'
import { BurgerMenu } from '../../../public/icons'
import { Button } from '../index'
import styles from './header.module.scss'

export const Header = () => {
	return (
		<div className='wrapper'>
			<div className={styles.header}>
				<nav className={styles.nav}>
					<>
						{HEADER_LINKS.map(({ label, path }) => {
							return (
								<li key={label} className={styles.nav__item}>
									<Button type='link' href={`#${path}`}>
										{label}
									</Button>
								</li>
							)
						})}
						<button className={styles.nav__burger}>
							<BurgerMenu />
						</button>
					</>
				</nav>
			</div>
		</div>
	)
}
