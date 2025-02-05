import { NextIntlClientProvider as IntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
	locale: string
}

const supportedLocales = ['en', 'ru']

const NextIntlClientProvider = async ({ children, locale }: Props) => {
	if (!supportedLocales.includes(locale)) {
		notFound()
	}

	let messages
	try {
		messages = (await import(`../../messages/${locale}.json`)).default
	} catch (error) {
		console.error(error)
		notFound()
	}
	return (
		<IntlClientProvider locale={locale} messages={messages}>
			{children}
		</IntlClientProvider>
	)
}

export default NextIntlClientProvider
