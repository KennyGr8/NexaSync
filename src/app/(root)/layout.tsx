import StreamClientProvider from '@/context/StreamClientProvider'

function Layout({ children }: { children: React.ReactNode }) {
  return <StreamClientProvider>{children}</StreamClientProvider>
}
export default Layout
