import React from 'react'

const layout = () => {
  return (
    <div>
      Navigate to Top 
    </div>
  )
}

export default layout



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}