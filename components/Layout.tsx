import Link from 'next/link'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm bg-black/20 border-b border-white/10">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wide">CIPHERVERSE</Link>
          <div className="flex items-center gap-6 text-sm">
            <Link className="hover:text-accent transition" href="/">Home</Link>
            <Link className="hover:text-accent transition" href="/lore">Lore</Link>
            <Link className="hover:text-accent transition" href="/store">Store</Link>
          </div>
        </nav>
      </header>
      <main className="pt-20 relative">{children}</main>
      <footer className="relative z-30 border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-white/70 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Cipherverse</span>
          <span className="opacity-70">Where reality fractures and cards decide fate.</span>
        </div>
      </footer>
    </div>
  )
}
