'use client'
import styles from './feedback-form.module.scss'

export const FeedbackForm = () => {
	return (
		<form
			className={styles.feedbackForm}
			onSubmit={(e) => {
				return e.preventDefault()
			}}
		>
			<input className={styles.feedbackForm__input} placeholder='Name*' type='text' />
			<input className={styles.feedbackForm__input} placeholder='Email*' type='text' />
			<input className={styles.feedbackForm__input} placeholder='Message*' type='text' />
			<button className={styles.feedbackForm__submit} type='submit'>
				Send
			</button>
		</form>
	)
}
