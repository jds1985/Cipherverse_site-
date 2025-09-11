interface Product { id: string; title: string; price: string; comingSoon?: boolean }

export function ProductCard({ p }: { p: Product }){
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-white/30 transition">
      <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-accent/20 to-white/5 mb-4" />
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">{p.title}</h3>
          <p className="text-white/70 text-sm">{p.comingSoon ? 'Coming Soon' : p.price}</p>
        </div>
        <button disabled={p.comingSoon} className={`px-4 py-2 rounded-xl font-medium ${p.comingSoon ? 'bg-white/10 text-white/40' : 'bg-accent text-black shadow-glow'}`}>
          {p.comingSoon ? 'Notify Me' : 'Buy'}
        </button>
      </div>
    </div>
  )
}
