'use client'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './chat.module.scss'

export const Chat = () => {
	const [chatOpened, setChatOpened] = useState(false)
	const [chat, setChat] = useState<HTMLElement | null>(null)

	const toggleWidget = () => {
		setChatOpened((prev) => !prev)
	}

	useEffect(() => {
		setChat(document.getElementById('chat'))
	}, [])
	if (!chat) return null

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
				chat
			)}
		</>
	)
}
