import Layout from '../components/Layout'
import { ProductCard } from '../components/ProductCard'

const products = [
  { id: 'deck', title: 'Cipherverse Card Deck', price: '$29' },
  { id: 'webster-tee', title: 'Webster Tee', price: '$24', comingSoon: true },
  { id: 'error-tee', title: 'Error Tee', price: '$24', comingSoon: true },
]

export default function Store(){
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold">The Vault</h1>
        <p className="mt-4 text-white/80">Artifacts from the fracture—decks and apparel.</p>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (<ProductCard key={p.id} p={p as any} />))}
        </div>
      </section>
    </Layout>
  )
}
