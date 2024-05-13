import './layout.scss'
import localFont from 'next/font/local'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import ReactQueryProviders from '@/hooks/useReactQuery'

const font = localFont({
  src: '../fonts/Pretendard-Regular.woff2',
  display: 'swap',
  weight: '45 920',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
          <ReactQueryProviders>
            <MantineProvider>{children}</MantineProvider>
          </ReactQueryProviders>
      </body>
    </html>
  )
}
