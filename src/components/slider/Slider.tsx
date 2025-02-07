import { NextIcon, PrevIcon } from '../../../public/icons'
import styles from './slider.module.scss'

interface Props {
	prevSlide: () => void
	nextSlide: () => void
	children: React.ReactNode
}
export const Slider = ({ prevSlide, nextSlide, children }: Props) => (
	<div className={styles.slider}>
		<button className={styles.slider__prev} onClick={prevSlide}>
			<PrevIcon />
		</button>
		{children}
		<button className={styles.slider__next} onClick={nextSlide}>
			<NextIcon />
		</button>
	</div>
)
