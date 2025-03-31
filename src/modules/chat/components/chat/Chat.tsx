'use client'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './chat.module.scss'

export const Chat = () => {
	const [chatOpened, setChatOpened] = useState(false)
	const rootChat: HTMLElement | null = document.getElementById('chat')
	console.log(rootChat)

	if (!rootChat) {
		return null
	}
	const toggleWidget = () => {
		setChatOpened((prev) => !prev)
	}

	return (
		<>
			{createPortal(
				<div className={styles.chat}>
					<button>Click me</button>
					{chatOpened && (
						<div className={styles.widgetOpen}>
							<div className={styles.header}>
								<h4>Напишите менеджеру</h4>
								<button onClick={toggleWidget} className={styles.closeButton}>
									×
								</button>
							</div>
							<div className={styles.body}>
								<textarea
									className={styles.textarea}
									placeholder='Введите ваше сообщение...'
								/>
								<button className={styles.sendButton}>Отправить</button>
							</div>
						</div>
					)}
				</div>,
				rootChat
			)}
		</>
	)
}
