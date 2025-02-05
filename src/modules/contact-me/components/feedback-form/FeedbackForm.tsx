'use client'
import { useTranslations } from 'next-intl'
import { FEEDBACK_FORM_INPUTS } from '../../constants'
import styles from './feedback-form.module.scss'

export const FeedbackForm = () => {
	const t = useTranslations('FeedbackForm')
	return (
		<form className={styles.feedbackForm} onSubmit={(e) => e.preventDefault()}>
			{FEEDBACK_FORM_INPUTS.map(({ name, placeholder, type }) => (
				<input
					key={name}
					className={styles.feedbackForm__input}
					placeholder={t(placeholder)}
					type={type}
					id={name}
					name={name}
					autoComplete='on'
				/>
			))}
			<textarea
				className={styles.feedbackForm__textarea}
				name='message'
				id='message'
				placeholder={t('message')}
			></textarea>
			<button className={styles.feedbackForm__submit} type='submit'>
				{t('send')}
			</button>
		</form>
	)
}
