import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='ru'>
			<Head>
				<link rel='icon' href='/favicon.svg' type='image/svg+xml' />

				<meta name='theme-color' content='#3437eb' />
				<meta name='msapplication-navbutton-color' content='#3437eb' />
				<meta name='apple-mobile-web-app-status-bar-style' content='#3437eb' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
