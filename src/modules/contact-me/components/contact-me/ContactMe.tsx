import { ImageCard, SectionTitle } from '@/components'
import { HEADER_LINKS_OPTIONS } from '@/constants'
import { FeedbackForm } from '../../index'
import styles from './contact-me.module.scss'

export const ContactMe = () => {
	return (
		<section id={HEADER_LINKS_OPTIONS.CONTACT.PATH} className={styles.contactMe}>
			<SectionTitle title='Contact me' width='50' />
			<div className={styles.contactMe__content}>
				<ImageCard />
				<FeedbackForm />
			</div>
		</section>
	)
}
