import './globals.css'

export const metadata = {
  title: 'Alex Morgan - Full Stack Developer',
  description: 'Portfolio of Alex Morgan - Full Stack Developer specializing in modern web applications',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
