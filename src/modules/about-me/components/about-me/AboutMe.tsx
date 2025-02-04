import { SectionTitle } from '@/components'
import { HEADER_LINKS_OPTIONS } from '@/constants'
import Image from 'next/image'
import AboutMeImage from '../../../../../public/images/about-me/image.png'
import styles from './about-me.module.scss'

export const AboutMe = () => (
	<section id={HEADER_LINKS_OPTIONS.ABOUT.PATH} className={styles.aboutMe}>
		<SectionTitle title='AboutMe' width='30' positionRight />
		<div className={styles.aboutMe__info}>
			<div className={styles.aboutMe__image}>
				<Image src={AboutMeImage} alt='' />
			</div>
			<p className={styles.aboutMe__description}>
				I am actively seeking opportunities to apply my acquired skills and knowledge to
				real-world projects. My educational background has equipped me with a solid foundation
				in AI and ML algorithms, data analysis, and programming languages such as Python.
				Additionally, I have gained practical experience through hands-on projects, both
				independently and collaboratively.
			</p>
		</div>
	</section>
)
