import { Header } from '@/components'

const AppLayout = ({ children }: { children: React.ReactNode }) => (
	<>
		<Header />
		<main className='wrapper'>{children}</main>
		<div id='chat' />
	</>
)
export default AppLayout
