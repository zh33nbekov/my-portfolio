'use client'
import { SectionTitle, Slider } from '@/components'
import { HEADER_LINKS_OPTIONS } from '@/constants'
import { useCallback, useState } from 'react'
import { SkillItem, SKILLS, SkillsCategory, SkillsCategoryTypes } from '../../index'
import styles from './skills.module.scss'

export const Skills = () => {
	const [skill, setSkill] = useState(0)
	const [skillCategory, setSkillCategory] = useState<SkillsCategoryTypes>('all')
	const changeSkillCategory = useCallback((checkedSkillCategory: SkillsCategoryTypes) => {
		setSkill(0)
		setSkillCategory(checkedSkillCategory)
	}, [])
	const filteringSkills = (skillCategory: SkillsCategoryTypes) => {
		if (skillCategory === 'all') {
			return SKILLS
		}
		return SKILLS.filter((skill) => skill.category === skillCategory)
	}
	const nextSkill = () => {
		setSkill((prevIndex) => (prevIndex + 1) % filteringSkills(skillCategory).length)
	}
	const prevSkill = () => {
		setSkill(
			(prevIndex) =>
				(prevIndex - 1 + filteringSkills(skillCategory).length) %
				filteringSkills(skillCategory).length
		)
	}
	const { icon, name } = filteringSkills(skillCategory)[skill] ?? {
		name: '',
		icon: () => null,
	}

	return (
		<section id={HEADER_LINKS_OPTIONS.SKILLS.PATH} className={styles.skills}>
			<SectionTitle title='Skills' width='80' positionRight={true} />
			<SkillsCategory
				onChangeSkillCategory={changeSkillCategory}
				currentSkillCategory={skillCategory}
			/>
			<Slider nextSlide={nextSkill} prevSlide={prevSkill}>
				<SkillItem skillIcon={icon} name={name} />
			</Slider>
		</section>
	)
}
