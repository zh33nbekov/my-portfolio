import { Header } from '@/components'

const AppLayout = ({ children }: { children: React.ReactNode }) => (
	<>
		<Header />
		<main className='wrapper'>{children}</main>
	</>
)
export default AppLayout
