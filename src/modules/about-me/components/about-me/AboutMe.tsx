'use client'
import { SectionTitle } from '@/components'
import { HEADER_LINKS_OPTIONS } from '@/constants'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import AboutMeImage from '../../../../../public/images/about-me/image.png'
import styles from './about-me.module.scss'

export const AboutMe = () => {
	const t = useTranslations('AboutMe')
	return (
		<section id={HEADER_LINKS_OPTIONS.ABOUT.PATH} className={styles.aboutMe}>
			<SectionTitle title='AboutMe' width='100' positionRight />
			<div className={styles.aboutMe__info}>
				<div className={styles.aboutMe__image}>
					<Image src={AboutMeImage} alt='Обо мне' priority />
				</div>
				<p className={styles.aboutMe__description}>{t('description')}</p>
			</div>
		</section>
	)
}
