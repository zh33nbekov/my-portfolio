import Image from 'next/image'
import MyImage from '../../../public/images/contact-me/image.png'
import styles from './image-card.module.scss'

export const ImageCard = () => {
	return (
		<div className={styles.imageCard}>
			<Image src={MyImage} priority alt='' />
		</div>
	)
}
