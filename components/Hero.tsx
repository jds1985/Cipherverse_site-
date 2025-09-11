import Link from 'next/link'

export function Hero(){
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="relative z-20 mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Welcome to the <span className="text-accent">Cipherverse</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80">
          A fractured world of cards, chaos, and hidden truth.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/lore" className="px-6 py-3 rounded-2xl bg-accent text-black font-semibold shadow-glow">Discover the Lore</Link>
          <Link href="/store" className="px-6 py-3 rounded-2xl border border-white/20 backdrop-blur-sm">Enter the Store</Link>
        </div>
      </div>
    </section>
  )
}
