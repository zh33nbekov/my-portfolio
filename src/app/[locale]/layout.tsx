import AppLayout from '@/layouts/AppLayout'
import NextIntlClientProvider from '@/providers/NextIntlClientProvider'
import { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
	title: 'Rai Zheenbekov',
	description:
		'Frontend developer with a strong focus on creating scalable, user-friendly, and innovative web applications using modern technologies and best practices.',
}

const RootLayout = async ({
	children,
	params,
}: {
	children: React.ReactNode
	params: { locale: string }
}) => {
	const locale = await params.locale
	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider locale={locale}>
					<AppLayout>{children}</AppLayout>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
export default RootLayout
