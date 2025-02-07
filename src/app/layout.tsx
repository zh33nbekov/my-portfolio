import NextIntlClientProvider from '@/providers/NextIntlClientProvider'
import { getLocale } from 'next-intl/server'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const locale = await getLocale()
	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
			</body>
		</html>
	)
}
