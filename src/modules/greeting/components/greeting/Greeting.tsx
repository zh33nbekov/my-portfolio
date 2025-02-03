import { Button } from '@/components'
import Image from 'next/image'
import GreetingImage from '../../../../../public/images/greeting/image.png'
import styles from './greeting.module.scss'

export const Greeting = () => {
	return (
		<section className={styles.greeting}>
			<div className={styles.greeting__image}>
				<Image src={GreetingImage} alt='' priority />
			</div>
			<h3 className={styles.greeting__message}>Hey</h3>
			<h1 className={styles.greeting__title}>I&apos;m a Rai</h1>
			<h5 className={styles.greeting__subtitle}>
				Frontend <span>developer</span>
			</h5>
			<p className={styles.greeting__description}>
				A highly motivated student studying Artificial Intelligence and Machine Learning.
				Actively seeking opportunities to apply my skills and knowledge to real-world projects
				and contribute to the advancement of the industry.
			</p>
			<div className={styles.greeting__buttons} style={{ display: 'flex' }}>
				<Button type='link' href=''>
					Learn More
				</Button>
				<Button type='link' href=''>
					Contact me
				</Button>
			</div>
		</section>
	)
}
