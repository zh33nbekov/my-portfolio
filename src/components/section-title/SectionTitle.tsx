import styles from './section-title.module.scss'

type Props = {
	title: string
	width: string
	positionRight?: true | undefined
}
export const SectionTitle: React.FC<Props> = ({ title, width, positionRight }) => {
	return (
		<div className={styles.sectionTitle}>
			<h3 className={styles.title} style={positionRight && { marginLeft: 'auto' }}>
				{title}
			</h3>
			<div className={styles.progress}>
				<div className={styles.progress__right} style={{ width: `${width}%` }} />
				<div className={styles.progress__left} />
			</div>
		</div>
	)
}
