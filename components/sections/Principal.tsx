import stls from '@/styles/components/sections/Principal.module.sass'

const Principal = () => {
  return (
    <section className={stls.container}>
      <h1 className={stls.title}>Онлайн-институт психологии</h1>
      <h2 className={stls.desc}></h2>
    </section>
  )
}

export default Principal
