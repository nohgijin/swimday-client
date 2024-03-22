import './layout.scss'
import localFont from 'next/font/local'
import { MantineProvider } from '@mantine/core'

const font = localFont({
  src: './fonts/Pretendard-Regular.woff2',
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
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  )
}
