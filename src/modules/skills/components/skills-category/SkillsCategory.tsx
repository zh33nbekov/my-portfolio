import { Button } from '@/UI'
import { useTranslations } from 'next-intl'
import { memo } from 'react'
import { SkillsCategoryTypes } from '../../constants/skills'
import { SKILLS_CATEGORY_BUTTONS } from '../../constants/skills-category'
import styles from './skills-category.module.scss'

interface Props {
	currentSkillCategory: string
	onChangeSkillCategory: (label: SkillsCategoryTypes) => void
}
export const SkillsCategory = memo(({ currentSkillCategory, onChangeSkillCategory }: Props) => {
	const t = useTranslations('Skills')
	return (
		<div className={styles.skillsCategory}>
			{SKILLS_CATEGORY_BUTTONS.map(({ label }) => (
				<Button
					key={label}
					type='button'
					active={label === currentSkillCategory}
					onClick={() => onChangeSkillCategory(label)}
				>
					{t(label)}
				</Button>
			))}
		</div>
	)
})
SkillsCategory.displayName = 'SkillsCategory'
