import { AboutMe } from '@/modules/about-me'
import { Certifications } from '@/modules/certifications'
import { Chat } from '@/modules/chat'
import { ContactMe } from '@/modules/contact-me'
import { Experience } from '@/modules/experience'
import { Greeting } from '@/modules/greeting'
import { Projects } from '@/modules/projects'
import { Skills } from '@/modules/skills'
import './page.css'

const Home = () => (
	<>
		<Greeting />
		<AboutMe />
		<Projects />
		<Skills />
		<Certifications />
		<Experience />
		<ContactMe />
		<Chat />
	</>
)

export default Home
