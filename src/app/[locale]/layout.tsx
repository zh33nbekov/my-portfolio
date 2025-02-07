import AppLayout from '@/layouts/AppLayout'
import NextIntlClientProvider from '@/providers/NextIntlClientProvider'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LayoutProps } from '../../../.next/types/app/layout'
import '../globals.css'

export const metadata: Metadata = {
	title: 'Rai Zheenbekov',
	description:
		'Frontend developer with a strong focus on creating scalable, user-friendly, and innovative web applications using modern technologies and best practices.',
}
const supportedLocales = ['en', 'ru']
const RootLayout = async ({ children, params }: LayoutProps) => {
	const { locale } = await params
	if (!supportedLocales.includes(locale)) {
		notFound()
	}

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
