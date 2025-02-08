'use client'

import { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'

const socket: Socket = io('http://localhost:5500')

export default function Chat() {
	const [messages, setMessages] = useState<{ user: string; message: string }[]>([])
	const [input, setInput] = useState('')

	useEffect(() => {
		// Получение сообщений от сервера
		socket.on('response', (data: { user: string; message: string }) => {
			setMessages((prev) => [...prev, data])
		})

		return () => {
			socket.off('response')
		}
	}, [])

	const sendMessage = () => {
		if (input.trim()) {
			const newMessage = { user: 'Client', message: input }
			setMessages((prev) => [...prev, newMessage])
			socket.emit('message', newMessage) // Отправляем сообщение на сервер
			setInput('')
		}
	}

	return (
		<div className='p-4'>
			<h1 className='text-xl font-bold mb-4'>Чат</h1>
			<div className='border rounded-md p-4 h-64 overflow-y-scroll bg-gray-100'>
				{messages.map((msg, index) => (
					<div
						key={index}
						className={`mb-2 ${msg.user === 'Client' ? 'text-blue-500' : 'text-green-500'}`}
					>
						<strong>{msg.user}:</strong> {msg.message}
					</div>
				))}
			</div>
			<div className='chat'>
				<style jsx>
					{`
						.chat {
							display: flex;
							padding: 20px 0;
							input {
								padding: 10px;
							}
							button {
								padding: 5px 10px;
							}
						}
					`}
				</style>
				<input
					type='text'
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder='Введите сообщение...'
				/>
				<button onClick={sendMessage}>Отправить</button>
			</div>
		</div>
	)
}
