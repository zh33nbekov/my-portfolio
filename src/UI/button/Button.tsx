import Link from 'next/link'
import { memo } from 'react'
import styles from './button.module.scss'

interface BaseProps {
	active?: boolean
	className?: string
	onClick?: () => void
	children: React.ReactNode
}

interface ButtonProps extends BaseProps {
	type: 'button'
}

interface LinkProps extends BaseProps {
	type: 'link'
	href: string
}

type Props = ButtonProps | LinkProps
const createButton = (props: Props) => {
	switch (props.type) {
		case 'button':
			return (
				<button
					className={`${styles.button} ${props.active && styles['active']} ${props.className}`}
					onClick={props.onClick}
				>
					{props.children}
				</button>
			)
		case 'link':
			return (
				<Link className={`${styles.button} ${props.className}`} href={props.href}>
					{props.children}
				</Link>
			)
		default:
			return null
	}
}

export const Button: React.FC<Props> = memo((props) => <>{createButton(props)}</>)
Button.displayName = 'Button'
