import styles from './skill-item.module.scss'

interface Props {
	skillIcon: React.ElementType
	skillName: string
}
export const SkillItem = ({ skillIcon: SkillIcon, skillName }: Props) => (
	<div className={styles.skillItem}>
		<SkillIcon />
		<h3 className={styles.skillItem__name}>{skillName}</h3>
	</div>
)
