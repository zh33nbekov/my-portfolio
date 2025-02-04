// import CardGiftcardIcon from '@mui/icons-material'
// import ContactPageIcon from '@mui/icons-material/ContactPage'
// import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing'
// import InfoIcon from '@mui/icons-material/Info'
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
// import { SvgIconTypeMap } from '@mui/material'
// import { OverridableComponent } from '@mui/material/OverridableComponent'

interface HeaderLinks {
	icon?: React.ReactNode
	label: 'Contact' | 'Resume' | 'About' | 'Certificate' | 'Skills'
	path: 'contact' | 'resume' | 'about' | 'certificate' | 'skills'
}

export const HEADER_LINKS_OPTIONS = {
	CONTACT: {
		LABEL: 'Contact',
		PATH: 'contact',
	},
	RESUME: {
		LABEL: 'Resume',
		PATH: 'resume',
	},
	ABOUT: {
		LABEL: 'About',
		PATH: 'about',
	},
	CERTIFICATE: {
		LABEL: 'Certificate',
		PATH: 'certificate',
	},
	SKILLS: {
		LABEL: 'Skills',
		PATH: 'skills',
	},
} as const

export const HEADER_LINKS: HeaderLinks[] = [
	{
		// icon: <LocalPhoneIcon />,
		label: HEADER_LINKS_OPTIONS.CONTACT.LABEL,
		path: HEADER_LINKS_OPTIONS.CONTACT.PATH,
	},
	{
		// icon: <ContactPageIcon />,
		label: HEADER_LINKS_OPTIONS.RESUME.LABEL,
		path: HEADER_LINKS_OPTIONS.RESUME.PATH,
	},
	{
		// icon: <InfoIcon />,
		label: HEADER_LINKS_OPTIONS.ABOUT.LABEL,
		path: HEADER_LINKS_OPTIONS.ABOUT.PATH,
	},
	{
		// icon: <CardGiftcardIcon />,
		label: HEADER_LINKS_OPTIONS.CERTIFICATE.LABEL,
		path: HEADER_LINKS_OPTIONS.CERTIFICATE.PATH,
	},
	{
		// icon: <DownhillSkiingIcon />,
		label: HEADER_LINKS_OPTIONS.SKILLS.LABEL,
		path: HEADER_LINKS_OPTIONS.SKILLS.PATH,
	},
]
