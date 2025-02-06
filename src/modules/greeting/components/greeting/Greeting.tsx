'use client'
import { Button } from '@/UI'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import GreetingImage from '../../../../../public/images/greeting/image.png'
import styles from './greeting.module.scss'

export const Greeting = () => {
	const t = useTranslations('Greeting')
	return (
		<section className={styles.greeting}>
			<div className={styles.greeting__image}>
				<Image src={GreetingImage} alt='Добро пожаловать' priority />
			</div>
			<h2 className={styles.greeting__message}>{t('greeting')}</h2>
			<h3 className={styles.greeting__title}>{t('intro')}</h3>
			<h4 className={styles.greeting__subtitle}>
				Frontend <span>{t('developer')}</span>
			</h4>
			<p className={styles.greeting__description}>{t('bio')}</p>
			<div className={styles.greeting__buttons}>
				<Button type='link' href=''>
					{t('learnMore')}
				</Button>
				<Button type='link' href=''>
					{t('contactMe')}
				</Button>
			</div>
		</section>
	)
}
