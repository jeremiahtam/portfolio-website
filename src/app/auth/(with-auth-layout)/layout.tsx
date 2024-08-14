export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <div>These are the auth components</div>
      {children}
    </div>
  )
}
