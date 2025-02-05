interface HeaderLinks {
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
		label: HEADER_LINKS_OPTIONS.CONTACT.LABEL,
		path: HEADER_LINKS_OPTIONS.CONTACT.PATH,
	},
	{
		label: HEADER_LINKS_OPTIONS.RESUME.LABEL,
		path: HEADER_LINKS_OPTIONS.RESUME.PATH,
	},
	{
		label: HEADER_LINKS_OPTIONS.ABOUT.LABEL,
		path: HEADER_LINKS_OPTIONS.ABOUT.PATH,
	},
	{
		label: HEADER_LINKS_OPTIONS.CERTIFICATE.LABEL,
		path: HEADER_LINKS_OPTIONS.CERTIFICATE.PATH,
	},
	{
		label: HEADER_LINKS_OPTIONS.SKILLS.LABEL,
		path: HEADER_LINKS_OPTIONS.SKILLS.PATH,
	},
]
