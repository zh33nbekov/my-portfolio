import { Button, SectionTitle } from '@/components'
import { PROJECTS_BUTTONS } from '../../index'
import styles from './projects.module.scss'

export const Projects = () => {
	return (
		<div className={styles.projects}>
			<SectionTitle title='Projects' width='90' />
			<div className={styles.projects__buttons}>
				{PROJECTS_BUTTONS.map(({ label, active }) => {
					return (
						<Button
							key={label}
							type='button'
							className={active ? styles['active'] : undefined}
						>
							{label}
						</Button>
					)
				})}
			</div>
		</div>
	)
}
