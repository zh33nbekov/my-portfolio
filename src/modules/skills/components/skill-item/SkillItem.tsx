import styles from './skill-item.module.scss'

interface Props {
	skillIcon: React.ElementType
	name: string
}
export const SkillItem = ({ skillIcon: SkillIcon, name }: Props) => (
	<div className={styles.skillItem}>
		<SkillIcon />
		<h3 className={styles.skillItem__name}>{name}</h3>
	</div>
)
