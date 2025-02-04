import { Button } from '@/components'
import Image from 'next/image'
import GreetingImage from '../../../../../public/images/greeting/image.png'
import styles from './greeting.module.scss'

export const Greeting = () => (
	<section className={styles.greeting}>
		<div className={styles.greeting__image}>
			<Image src={GreetingImage} alt='' priority />
		</div>
		<h3 className={styles.greeting__message}>Hey</h3>
		<h2 className={styles.greeting__title}>I&apos;m a Rai</h2>
		<h4 className={styles.greeting__subtitle}>
			Frontend <span>developer</span>
		</h4>
		<p className={styles.greeting__description}>
			A passionate software engineer with expertise in frontend development and a strong
			foundation in server-side technologies such as Node.js and Express.js. Always eager to
			apply my skills to impactful projects and contribute to innovative solutions in the tech
			industry.
		</p>
		<div className={styles.greeting__buttons} style={{ display: 'flex' }}>
			<Button type='link' href=''>
				Learn more
			</Button>
			<Button type='link' href=''>
				Contact me
			</Button>
		</div>
	</section>
)
