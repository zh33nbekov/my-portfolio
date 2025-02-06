import Link from 'next/link'
import styles from './button.module.scss'

interface BaseProps {
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
				<button className={`${styles.button} ${props.className}`} onClick={props.onClick}>
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

export const Button: React.FC<Props> = (props) => <>{createButton(props)}</>
