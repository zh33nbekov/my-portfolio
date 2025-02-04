import { AboutMe } from '@/modules/about-me'
import { ContactMe } from '@/modules/contact-me'
import { Experience } from '@/modules/experience'
import { Greeting } from '@/modules/greeting'
import { Projects } from '@/modules/projects'
import { Skills } from '@/modules/skills'

const Home = () => (
	<div className='wrapper'>
		<Greeting />
		<AboutMe />
		<Projects />
		{/* <Skills />
		<Experience />
		<ContactMe /> */}
	</div>
)

export default Home
