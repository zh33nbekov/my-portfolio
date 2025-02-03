import { Header } from '@/components'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
}
export default AppLayout
