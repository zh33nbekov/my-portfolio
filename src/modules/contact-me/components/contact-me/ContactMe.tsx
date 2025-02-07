import ContactMeImg from '../../../../../public/images/contact-me/image.png'
import styles from './contact-me.module.scss'

import { SectionTitle } from '@/components'
import { HEADER_LINKS_OPTIONS } from '@/constants'
import Image from 'next/image'
import { FeedbackForm } from '../feedback-form/FeedbackForm'

export const ContactMe = () => (
	<section id={HEADER_LINKS_OPTIONS.CONTACT.PATH} className={styles.contactMe}>
		<SectionTitle title='ContactMe' width='50' />
		<div className={styles.contactMe__content}>
			<div className={styles.contactMe__image}>
				<Image src={ContactMeImg} alt='Связаться со мной' />
			</div>
			<FeedbackForm />
		</div>
	</section>
)
