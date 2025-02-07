import { SectionTitle } from '@/components'
import { ProjectsButtons } from '../../index'
import styles from './projects.module.scss'

export const Projects = () => (
	<section className={styles.projects}>
		<SectionTitle title='Projects' width='0' />
		<ProjectsButtons />
	</section>
)
