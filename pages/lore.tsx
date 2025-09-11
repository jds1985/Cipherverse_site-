import Layout from '../components/Layout'

export default function Lore(){
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold">Lore of the <span className="text-accent">Cipherverse</span></h1>
        <p className="mt-6 text-white/80 max-w-2xl">
          The Cipherverse is unstable. Webster and Error wander its broken halls, scavenging meaning from corrupted realities.
        </p>
      </section>
    </Layout>
  )
}
