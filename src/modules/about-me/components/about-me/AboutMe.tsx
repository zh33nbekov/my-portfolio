import { SectionTitle } from '@/components'
import { HEADER_LINKS_OPTIONS } from '@/constants'
import styles from './about-me.module.scss'

export const AboutMe = () => {
	return (
		<section id={HEADER_LINKS_OPTIONS.ABOUT.PATH} className={styles.aboutMe}>
			<SectionTitle title='AboutMe' width='80' />
			<div>
				<h3>About me</h3>
				<p>
					I am actively seeking opportunities to apply my acquired skills and knowledge to
					real-world projects. My educational background has equipped me with a solid
					foundation in AI and ML algorithms, data analysis, and programming languages such as
					Python. Additionally, I have gained practical experience through hands-on projects,
					both independently and collaboratively.
				</p>
			</div>
		</section>
	)
}
