import { Button } from '@/components'
import { PROJECTS_BUTTONS } from '../../constants'
import styles from './projects-buttons.module.scss'
export const ProjectsButtons = () => (
	<div className={styles.projectsButtons}>
		{PROJECTS_BUTTONS.map(({ label, active }) => (
			<Button key={label} type='button' className={active ? styles['active'] : undefined}>
				{label}
			</Button>
		))}
	</div>
)
