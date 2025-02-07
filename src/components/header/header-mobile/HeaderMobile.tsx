'use client'
import { HEADER_LINKS } from '@/constants'
import { Button } from '@/UI'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useLocale, useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { BurgerMenu } from '../../../../public/icons'
import styles from './header-mobile.module.scss'

const Drawer = dynamic(() => import('@/components').then((module) => module.Drawer), {
	ssr: false,
})

interface Props {
	isDrawerVisible: boolean
	onShowDrawer: () => void
	onHideDrawer: () => void
}
export const HeaderMobile: React.FC<Props> = ({ isDrawerVisible, onShowDrawer, onHideDrawer }) => {
	const router = useRouter()
	const locale = useLocale()
	const tHeader = useTranslations('Header')
	const tTranslations = useTranslations('Translations')
	const languageChangeHandler = (e: SelectChangeEvent<string>) => {
		const checkedLocale = e.target.value
		console.log(e.target.value)
		router.push(`/${checkedLocale}`)
	}

	return (
		<>
			<div className={styles.headerMobile}>
				<FormControl
					className={styles.headerMobile__formControl}
					variant='filled'
					sx={{
						minWidth: 120,
						backgroundColor: 'white',
						borderRadius: 2,
						boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
						'& .MuiSelect-select': {
							padding: '10px 14px',
						},
					}}
				>
					<InputLabel id='language-select-label'>Language</InputLabel>
					<Select
						labelId='language-select-label'
						id='language-select'
						onChange={languageChangeHandler}
						defaultValue={locale}
						name='language'
					>
						<MenuItem value='ru'>{tTranslations('russian')}</MenuItem>
						<MenuItem value='en'>{tTranslations('english')}</MenuItem>
					</Select>
				</FormControl>
				<button
					className={styles.headerMobile__burger}
					onClick={onShowDrawer}
					id='burger-menu'
					aria-label='burger-menu'
				>
					<BurgerMenu />
				</button>
			</div>
			<Drawer open={isDrawerVisible} anchor='right' onClose={onHideDrawer}>
				<ul className={styles.list}>
					{HEADER_LINKS.map(({ label, path }) => (
						<li key={label} className={styles.list__item}>
							<Button type='link' href={`#${path}`}>
								{tHeader(label)}
							</Button>
						</li>
					))}
				</ul>
			</Drawer>
		</>
	)
}
