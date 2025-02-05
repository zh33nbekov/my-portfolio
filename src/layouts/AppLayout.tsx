import { Header } from '@/components'

const AppLayout = ({ children }: { children: React.ReactNode }) => (
	<>
		<Header />
		<main>{children}</main>
	</>
)
export default AppLayout
