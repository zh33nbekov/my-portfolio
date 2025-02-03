import { SectionTitle } from '@/components'
import { HEADER_LINKS_OPTIONS } from '@/constants'
import styles from './skills.module.scss'

export const Skills = () => {
	return (
		<section id={HEADER_LINKS_OPTIONS.SKILLS.PATH} className={styles.skills}>
			<SectionTitle title='Skills' width='80' positionRight={true} />
		</section>
	)
}
