import { Button } from '@/components'
import { HEADER_LINKS } from '@/constants'
import styles from './header-desktop.module.scss'

export const HeaderDesktop = () => {
	return (
		<ul className={styles.list}>
			{HEADER_LINKS.map(({ label, path }) => {
				return (
					<li key={label} className={styles.list__item}>
						<Button type='link' href={`#${path}`}>
							{label}
						</Button>
					</li>
				)
			})}
		</ul>
	)
}
