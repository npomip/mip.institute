import stls from '@/styles/components/sections/ContactForm.module.sass'
import Wrapper from '@/ui/Wrapper'
import loadIcon from '@/helpers/general/loadIcon'
import dynamic from 'next/dynamic'

const FormAlpha = dynamic(() => import('@/components/forms/FormAlpha'), {
  ssr: false
})

const ContactForm = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.wrapper}>
          <div className={stls.atom}>
            {loadIcon('IconAtom', { regular: true, crho: true })}
          </div>
          <h2 className={stls.title}>Подберите программу</h2>
          <p className={stls.p}>
            Ответьте на несколько вопросов и подберите программу обучения
          </p>
          <div className={stls.form}>
            <FormAlpha />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default ContactForm
